/**
 * @module trackExperimentsInteractions
 */

export function trackPopupClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'click-on-popup'
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupClick();
	}
}

export function trackLinkClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'click-on-link'
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtLinkClick();
	}
}

export function trackPopupHover() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'mouseover'
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupHover();
	}
}
