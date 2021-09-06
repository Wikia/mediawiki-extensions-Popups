/**
 * @module trackExperimentsInteractions
 */

export function trackPopupClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'click-on-popup',
			variant: window.pathfinderPopupsExtVariant
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupClick();
	}
}

export function trackLinkClick() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'click-on-link',
			variant: window.pathfinderPopupsExtVariant
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtLinkClick();
	}
}

export function trackPopupHover() {
	if ( window.pathfinderPopupsExtVariant ) {
		window.pathfinderTracking.trackPopupsExt({
			action: 'mouseover',
			variant: window.pathfinderPopupsExtVariant
		});
		window.pathfinderOptimizelyCustomEvents.optimizelyPopupsExtPopupHover();
	}
}
