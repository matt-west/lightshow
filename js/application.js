$(function() {
	getApps();
	getFavourites();
	getRecentlyClosed();
});

/*
 *	Get a list of the users apps
 */
function getApps() {
	chrome.management.getAll(function(a){
		// alert(a);
	});
}

/*
 *	Get the user's favourite web pages
 */
function getFavourites() {
	
}

/*
 *	Get tabs that have been recently closed
 */
function getRecentlyClosed() {
	
}
