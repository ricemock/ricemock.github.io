// Display laoding screen
$window.on('load', function () {
	window.setTimeout(function () {
		$body.removeClass('is-preload');
	}, 100);
	loadPageContent(); 
});

function loadPageContent() {
	$('#main').load('index.html');
}