function loadPopups() {
	// load popups only if the extension is enabled in WikiConfig or user is in experiment group
	if (window.pathfinderPopupsExtVariant || window.wgEnablePopups) {
		if (window.wgEnablePopups || window.wgIsTestWiki || window.wgLanguageCode !== 'en') {
			// disable the experiment for wikis that have Popups extensions disabled explicitly
			window.pathfinderPopupsExtVariant = undefined;
		}
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
