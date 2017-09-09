// Create array of possible letters.
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Initialize empty array of user choices.
var userChoiceArray = [];

// Create variables for wins, losses, guesses left.
var wins = 0;
var losses = 0;
var guessesLeft = 10;

if (guessesLeft === 0){
	document.write('Game Over');
}

else {

	// The computer picks a letter at random.
	var computerChoice = letters[Math.floor(Math.random() * letters.length)];
	console.log('Computer choice: ' + computerChoice);

	// Ask the user to pick a letter.
	document.onkeyup = function() {
		
		var userChoice = String.fromCharCode(event.keyCode).toLowerCase();

		// Compare the letters to see if they match.
		if (userChoice === computerChoice){
			wins++; // increment wins if they match
		}

		if (userChoice != computerChoice){
			losses++; // increment losses if they do not match
		}

		// Add guess to user choice array.
		userChoiceArray.push(userChoice);

		guessesLeft--;
		console.log(guessesLeft);

		// Add the letter to guesses so far.
		var guessesSoFar = "<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses so far: " + userChoiceArray + "</p>";

		document.querySelector('#game').innerHTML = guessesSoFar;

	}
}

