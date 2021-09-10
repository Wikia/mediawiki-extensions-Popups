/**
 * @module gateway/mediawiki
 */

import { createModel } from '../preview/model';
import * as formatter from '../formatter';

// Public and private cache lifetime (5 minutes)
//
// FIXME: Move this to src/constants.js.
const mw = mediaWiki,
	CACHE_LIFETIME = 300,
	$ = jQuery;

/**
 * @typedef {Gateway} MediaWikiGateway
 * @prop {Function(object): object} extractPageFromResponse
 * @prop {Function(object): object} formatPlainTextExtract
 */

/**
 * Creates an instance of the MediaWiki API gateway.
 *
 * @param {mw.Api} api
 * @param {Object} config Configuration that affects the major behavior of the
 *  gateway.
 * @param {number} config.THUMBNAIL_SIZE The length of the major dimension of
 *  the thumbnail.
 * @param {number} config.EXTRACT_LENGTH The maximum length, in characters,
 *  of the extract.
 * @param {string} config.acceptLanguage The accepted language sent in the
 *  header
 * @return {MediaWikiGateway}
 */
export default function createMediaWikiApiGateway( api, config ) {
	const clcategories = getCategoriesFilter();

	function fetch( title ) {
		return api.get( {
			action: 'query',
			prop: 'info|articlesnippet|revisions|info|categories|vignetteimages',
			formatversion: 2,
			redirects: true,
			artchars: config.EXTRACT_LENGTH,

			rvprop: 'timestamp',
			inprop: 'url',
			titles: title,
			smaxage: CACHE_LIFETIME,
			maxage: CACHE_LIFETIME,
			uselang: 'content',

			// Parameters for categories properties
			cllimit: 5,
			clshow: '!hidden',
			clcategories,
			vigthumbsize: config.THUMBNAIL_SIZE
		}, {
			headers: {
				'X-Analytics': 'preview=1',
				'Accept-Language': config.acceptLanguage
			}
		} );
	}

	/**
	 * @param {mw.Title} title
	 * @returns {AbortPromise<PagePreviewModel>}
	 */
	function fetchPreviewForTitle( title ) {
		const xhr = fetch( title.getPrefixedDb() );
		return xhr.then( ( data ) => {
			const page = extractPageFromResponse( data );
			const plainTextExtract = formatPlainTextExtract( page );
			return convertPageToModel( plainTextExtract );
		} ).promise( {
			abort() {
				xhr.abort();
			}
		} );
	}

	return {
		fetch,
		extractPageFromResponse,
		convertPageToModel,
		fetchPreviewForTitle,
		formatPlainTextExtract
	};
}

/**
 * Extracts page data from the API response.
 *
 * @function
 * @name MediaWikiGateway#extractPageFromResponse
 * @param {Object} data The response
 * @throws {Error} If the response is empty or doesn't contain data about the
 *  page
 * @return {Object}
 */
function extractPageFromResponse( data ) {
	if (
		data.query &&
		data.query.pages &&
		data.query.pages.length
	) {
		return data.query.pages[ 0 ];
	}

	throw new Error( 'API response `query.pages` is empty.' );
}

/**
 * Make plain text nicer by applying formatter.
 *
 * @function
 * @name MediaWikiGateway#formatPlainTextExtract
 * @param {Object} data The response
 * @return {Object}
 */
function formatPlainTextExtract( data ) {
	const result = $.extend( {}, data );
	result.extract = formatter.formatPlainTextExtract( data.extract, data.title );
	return result;
}

/**
 * Converts the API response to a preview model.
 *
 * @function
 * @name MediaWikiGateway#convertPageToModel
 * @param {Object} page
 * @return {PagePreviewModel}
 */
function convertPageToModel( page ) {
	return createModel(
		page.title,
		page.canonicalurl,
		page.pagelanguagehtmlcode,
		page.pagelanguagedir,
		page.extract,
		page.type,
		page.thumbnail,
		page.pageid,
		page.categories
	);
}

/**
 * Build category filter for ApiQuery from current page categories
 *
 * @returns {string}
 */
function getCategoriesFilter () {
	const NS_CATEGORY = mw.config.get( 'wgNamespaceIds' ).category;

	return mw.config.get('wgCategories')
		.slice(0, 49) // Category filter accepts only 50 categories
		.map((category) => mw.Title.newFromText(category, NS_CATEGORY).getPrefixedText())
		.join('|');
}
