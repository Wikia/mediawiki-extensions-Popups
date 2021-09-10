/**
 * @module trackExperimentsInteractions
 */
export function buildPopupTrackingFunction(name) {
		return window.pathfinderTracking.buildTrackingFunctions('PopupsExtModule', name);
}

export function trackPopupClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		buildPopupTrackingFunction(window.pathfinderPopupsExtVariant)({
			action: 'click-on-popup',
			experimentVariant: window.pathfinderPopupsExtVariant
		})
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupClick();
	}
}

export function trackLinkClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		buildPopupTrackingFunction(window.pathfinderPopupsExtVariant)({
			action: 'click-on-link',
			experimentVariant: window.pathfinderPopupsExtVariant
		})
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtLinkClick();
	}
}

export function trackImpression() {
	if ( window.pathfinderPopupsExtVariant ) {
		buildPopupTrackingFunction(window.pathfinderPopupsExtVariant).impression({
			label: 'open-popup',
		})
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupHover();
	}
}
