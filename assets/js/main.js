(function ($) {

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
		loadPageContent(); // Load loadpage.html content
	});

	function loadPageContent() {
		$('#main').load('loadpage.html');
	}

})(jQuery);