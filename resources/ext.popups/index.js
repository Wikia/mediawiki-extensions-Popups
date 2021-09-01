function loadPopups() {
	// load popups only if the extension is enabled in WikiConfig or user is in experiment group
	if (window.pathfinderPopupsExtVariant || window.wgEnablePopups) {
		mw.loader.using( 'ext.popups.main' );
	}
}

// Load Popups outside the critical rendering path (T176211)
mw.requestIdleCallback( function () {
	if (window.pathfinderModulesReady) {
		loadPopups();
	} else {
		window.addEventListener('PathfinderModulesLoaded', () => {
			loadPopups();
		});
	}
});
