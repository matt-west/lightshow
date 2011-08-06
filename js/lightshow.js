$(function() {
	// Screen dimension variables used for calculating entry points
	scrWidth = document.width;
	scrHeight = document.height;
	
	/*
	 * The number of light trails that have been created.
	 * This is used to generate IDs
	 */
	count = 0;
	
	// Add a light trail to get things started
  genLightTrail();
	
});

/*
 *	Add a new light trail (LT) to the screens
 */
function genLightTrail() {
	// Get the random values for positioning the LT
	var color = randColor();
	var orientation = randOrientation();
	var entry = 0;
	var id = "tail" + (count + 1);
	
	// Initialise position values
	var topVal = '';
	var bottomVal = '';
	var leftVal = '';
	var rightVal = '';
	
	// Calculate the entry points and set the variables
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
	
	// Prepare the trail HTML
	var html = '<div id="' + id + '" class="' + color + ' ' + orientation + '" style="' + start +  ': ' + entry + 'px;"></div>';
	
	// Apply the trail to the document
	$('body').append(html);
	
	// Increment the count
	count++;
	
	// Animate the light trail
	$('#' + id).animate({
		// TODO: This is ugly, sort it out
    top: '+=' + topVal,
    bottom: '+=' + bottomVal,
    left: '+=' + leftVal,
    right: '+=' + rightVal
  }, 5000, function() {
  	// Once the light trail hits the other side remove it from the DOM
    $(this).remove();
  });
	
	// Add a new light trail in 950 milliseconds
	setTimeout("genLightTrail()", 950);
}

/*
 *	Compute a random entry point
 *	
 *	@param	max						This is the maximum value (e.g. the width or height of the screen)
 *	@return	randomNumber	The entry point
 */
function randEntryPoint(max) {
	var randomNumber = (Math.floor((Math.random()*max / 10)) * 10);
	
	return randomNumber;
}

/*
 *	Select a random orientation from the orientations array.
 *	This will determine the direction that the light trail travels in
 *
 *	@return	orientation	The random orientation string
 */
function randOrientation() {
	var orientations = ['horizontal-LR', 'horizontal-RL', 'vertical-TB', 'vertical-BT'];
	var randPos = Math.floor(Math.random()*4);
	
	return orientations[randPos];
}

/*
 *	Select a random color (from the 4 available colors) which will determine
 *	the color of the light trail
 *
 *	@return	color	A random color
 */
function randColor() {
	var colors = ['GREENtail', 'REDtail', 'YELLOWtail', 'BLUEtail'];
	var randPos = Math.floor(Math.random()*4);
	
	return colors[randPos];
}
