var pass = 50; // Pass Mark
var score = 75; // Current Score
var msg;	// Message

// Select message to write based on score
if (score > pass) {
msg = 'congratulations, you passed!';
} else {
msg = 'Have another go!';
}

var el = document.getElementById('answer');
el.textContent = msg;
