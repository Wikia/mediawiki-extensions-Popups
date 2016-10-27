( function ( $, mw ) {
	var dwellStartTime, perceivedWait;

	/**
	 * Return data that will be logged with each EL request
	 *
	 * @return {Object}
	 */
	function getDefaultValues() {
		var defaults = {
			pageTitleSource: mw.config.get( 'wgTitle' ),
			namespaceIdSource: mw.config.get( 'wgNamespaceNumber' ),
			pageIdSource: mw.config.get( 'wgArticleId' ),
			isAnon: mw.user.isAnon(),
			hovercardsSuppressedByGadget: false,
			popupEnabled: mw.popups.getEnabledState(),
			popupDelay: mw.popups.render.POPUP_DELAY,
			pageToken: mw.user.generateRandomSessionId() +
				Math.floor( mw.now() ).toString() +
				mw.user.generateRandomSessionId(),
			sessionToken: mw.user.sessionId(),
			// arbitrary name that represents the current UI of the popups
			version: 'legacy',
			// current API version
			api: 'mwapi'
		};

		// Include edit count bucket to the list of default values if the user is logged in.
		if ( !mw.user.isAnon() ) {
			defaults.editCountBucket = mw.popups.schemaPopups.getEditCountBucket(
				mw.config.get( 'wgUserEditCount' ) );
		}

		return defaults;
	}

	/**
	 * Return the sampling rate for the Schema:Popups
	 *
	 * User's session ID is used to determine the eligibility for logging,
	 * thus the function will result the same outcome as long as the browser
	 * hasn't been restarted or the cookie hasn't been cleared.
	 *
	 * @return {number}
	 */
	function getSamplingRate() {
		var bucket,
			samplingRate = mw.config.get( 'wgPopupsSchemaPopupsSamplingRate', 0 );

		if ( !$.isFunction( navigator.sendBeacon ) ) {
			return 0;
		}

		bucket = mw.experiments.getBucket( {
			name: 'ext.popups.schemaPopus',
			enabled: true,
			buckets: {
				control: 1 - samplingRate,
				A: samplingRate
			}
		}, mw.user.sessionId() );

		return bucket === 'A' ? 1 : 0;
	}

	/**
	 * Return edit count bucket based on the number of edits
	 *
	 * @param {number} editCount
	 * @return {string}
	 */
	function getEditCountBucket( editCount ) {
		var bucket;

		if ( editCount === 0 ) {
			bucket = '0';
		} else if ( editCount >= 1 && editCount <= 4 ) {
			bucket = '1-4';
		} else if ( editCount >= 5 && editCount <= 99 ) {
			bucket = '5-99';
		} else if ( editCount >= 100 && editCount <= 999 ) {
			bucket = '100-999';
		} else if ( editCount >= 1000 ) {
			bucket = '1000+';
		}

		return bucket + ' edits';
	}

	/**
	 * Checks whether the event signals the end of a hovercards lifecycle
	 *
	 * @param {string} action
	 * @return {boolean}
	 */
	function isFinalLifeCycleEvent( action ) {
		return [ 'dwelledButAbandoned', 'opened in new window', 'dismissed',
			'opened in new window', 'opened in same tab' ].indexOf( action ) > -1;
	}

	/**
	 * Return data after making some adjustments so that it's ready to be logged
	 * Returns false if the event should not be logged based on its contents or previous logged data
	 *
	 * @param {Object} data
	 * @param {Object} previousLogData
	 * @return {Object|boolean}
	 */
	function processHovercardEvent( data, previousLogData ) {
		// We don't log hover and display events as they are not compatible with the schema
		// but they are useful for debugging
		var action = data.action;

		if ( dwellStartTime ) {
			// Calculate the perceived wait to show the hovercard (currently unused)
			// or the time elapsed before the user abandoned their hover
			if ( action === 'display' ) {
				perceivedWait = Math.round( mw.now() - dwellStartTime );
			} else {
				if ( perceivedWait ) {
					data.perceivedWait = perceivedWait;
				}
				data.totalInteractionTime = Math.round( mw.now() - dwellStartTime );
			}
		}

		// Keep track of dwell time - a hover event should always be the first event in the hovercard lifecycle
		if ( !dwellStartTime && action === 'hover' ) {
			dwellStartTime = mw.now();
			perceivedWait = false;
		} else if ( isFinalLifeCycleEvent( action ) ) {
			// reset dwell start time to allow a new hover event to begin
			dwellStartTime = false;
		}

		if ( action && [ 'hover', 'display' ].indexOf( action ) > -1 ) {
			return false;
		// Only one action is recorded per link interaction token...
		} else if ( data.linkInteractionToken ) {
			// however, the 'disabled' action takes two clicks by nature, so allow it
			if ( previousLogData && data.linkInteractionToken === previousLogData.linkInteractionToken &&
				action !== 'disabled'
			) {
				return false;
			// and a dwelled but abandoned event must following an event which has a dwell start
			} else if ( !data.totalInteractionTime && action === 'dwelledButAbandoned' ) {
				return false;
			}
		}
		data.previewCountBucket = mw.popups.getPreviewCountBucket();
		// Figure out `namespaceIdHover` from `pageTitleHover`.
		if ( data.pageTitleHover && data.namespaceIdHover === undefined ) {
			data.namespaceIdHover = new mw.Title( data.pageTitleHover ).getNamespaceId();
		}
		return data;
	}

	mw.popups.schemaPopups = {
		getDefaultValues: getDefaultValues,
		getSamplingRate: getSamplingRate,
		getEditCountBucket: getEditCountBucket,
		processHovercardEvent: processHovercardEvent
	};

} )( jQuery, mediaWiki );
