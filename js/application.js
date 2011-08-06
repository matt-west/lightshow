$(function() {
	scrWidth = document.width;
	scrHeight = document.height;
	count = 0;
	
	// Get The Users Apps
	chrome.management.getAll(function(a){
		// alert(a);
	});
	
  genLightTrail();
	
});

function genLightTrail() {
	var color = randColor();
	var orientation = randOrientation();
	var entry = 0;
	var id = "tail" + (count + 1);
	
	var topVal = '';
	var bottomVal = '';
	var leftVal = '';
	var rightVal = '';
	
	if (orientation == "vertical-TB") {
		start = "left";
		topVal = scrHeight + 254;
		entry = randEntryPoint(scrWidth) - 1;
	} else if (orientation == "vertical-BT") {
		start = "left";
		bottomVal = (scrHeight + 254);
		entry = randEntryPoint(scrWidth) - 1;
	} else if (orientation == "horizontal-LR") {
		start = "top";
		leftVal = (scrWidth + 254);
		entry = randEntryPoint(scrHeight);
	} else if (orientation == "horizontal-RL") {
		start = "top";
		rightVal = (scrWidth + 254);
		entry = randEntryPoint(scrHeight);
	}
	
	var html = '<div id="' + id + '" class="' + color + ' ' + orientation + '" style="' + start +  ': ' + entry + 'px;"></div>';
	
	$('body').append(html);
	
	count++;
	
	$('#' + id).animate({
    top: '+=' + topVal,
    bottom: '+=' + bottomVal,
    left: '+=' + leftVal,
    right: '+=' + rightVal
  }, 5000, function() {
    $(this).remove();
  });
	
	setTimeout("genLightTrail()", 950);
}

function randEntryPoint(max) {
	var randomNumber = (Math.floor((Math.random()*max / 10)) * 10);
	
	return randomNumber;
}

function randOrientation() {
	var orientations = ['horizontal-LR', 'horizontal-RL', 'vertical-TB', 'vertical-BT'];
	var randPos = Math.floor(Math.random()*4);
	
	return orientations[randPos];
}

function randColor() {
	var colors = ['GREENtail', 'REDtail', 'YELLOWtail', 'BLUEtail'];
	var randPos = Math.floor(Math.random()*4);
	
	return colors[randPos];
}
