$(function() {
	$(".toggleBox").hide();
	
	getApps();
	getFavourites();
	getRecentlyClosed();
	
	$(".toggleTrigger").click(function(){
		if ($(this).next('.toggleBox').hasClass('openBox')) {
			$('.openBox').removeClass('openBox').hide();
		} else {
			$('.openBox').removeClass('openBox').hide();
			$(this).next('.toggleBox').addClass('openBox');
			$(this).next('.toggleBox').slideDown();
		}
	});
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
