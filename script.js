var secondsRemaining;
var intervalHandle;

function tick(){
	// grab the h1
	var timeDisplay = document.getElementById("time");

	// turn the seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	//add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate with colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	// stop is down to zero
	if (secondsRemaining === 0){
		alert("Done!");
		clearInterval(intervalHandle);
		
	}

	//subtract from seconds remaining
	secondsRemaining--;

}

function startCountdown(){



	// get countents of the "minutes" text box
	var minutes = 1;
	
	// check if not a number


	// how many seconds
	secondsRemaining = minutes * 60;
	
	//every second, call the "tick" function
	// have to make it into a variable so that you can stop the interval later!!!
	intervalHandle = setInterval(tick, 1000);




}

window.onload = function(){

	// create input text box and give it an id of "min"
	var inputMinutes = document.createElement("input");
  
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
}

function stopTimer() {
  clearInterval(intervalHandle);
}
