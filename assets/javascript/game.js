//_VARIABLES__________________________________________________________________________

// Create array of possible letters.
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Initialize empty array of user choices.
var userChoiceArray = [];

// Initialize variables for wins, losses, guesses left, and computer choice.
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var computerChoice = null;


//_FUNCTIONS__________________________________________________________________________

function updateWins() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
}

function updateLosses() {
	document.querySelector("#losses").innerHTML = "Losses: " + losses;
}

function updateGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function updateUserChoiceArray() {
	document.querySelector("#guesses").innerHTML = "Your Guesses so far: " + userChoiceArray.join(', ').toUpperCase(); // .join
}

function generateComputerChoice() {
	computerChoice = letters[Math.floor(Math.random() * letters.length)];
	return computerChoice;
}


//_MAIN PROCESS_______________________________________________________________________

// Call functions to start game.
updateGuessesLeft();
updateWins();
updateLosses();


// Computer chooses random letter.
generateComputerChoice();
console.log('Computer choice: ' + computerChoice);

// When the user presses a key, run the following function...
document.onkeyup = function(event) {

	// Store user letter choice when key is pressed.
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	console.log('User choice: ' + userChoice);

	// If the user's keystroke is in the letters array, run this code...
	// Since -1 is returned if the value to search for in an array does not occur,
	// not -1 means the user's keystroke must be in the letters array.
	if (letters.indexOf(userChoice) !== -1){

		// If the choices match, add one to the wins total and update the html.
		if (userChoice === computerChoice) {
			wins++;
			updateWins();
			alert("Right!");

			// Update computer choice.
			generateComputerChoice();
			console.log('Computer choice: ' + computerChoice);

			// Clear guesses so far.
			userChoiceArray = [];
			updateUserChoiceArray();

			// Reset guesses left to 10.
			guessesLeft = 10;
			updateGuessesLeft();
		}

		// Otherwise, the choices do not match, subtract one from guesses left, and update the html.
		else {
			// Don't choose the same letter twice.
			// Since -1 is returned if the value to search for in an array does not occur,
			// not -1 means the user's keystroke must be in the user choice array. Therefore,
			// alert with a message to choose a different letter.
			if (userChoiceArray.indexOf(userChoice) !== -1) {
				alert(`You already tried "${userChoice}," please choose a different letter.`);
			}

			else {
				guessesLeft--;
				updateGuessesLeft();
				alert("Wrong.");

				// Add guess to user choice array.
				userChoiceArray.push(userChoice);
				updateUserChoiceArray();

				// If there are no guesses left, add one to losses, update the html, update the computer choice, and reset guesses left.
				if (guessesLeft === 0) {
					losses++;
					updateLosses();

					// Display alert showing no guesses left.
					alert("No guesses remaining! You lose :(");

					// Update computer choice.
					generateComputerChoice();
					console.log('Computer choice: ' + computerChoice);

					// Clear guesses so far.
					userChoiceArray = [];
					updateUserChoiceArray();

					// Reset guesses left to 10.
					guessesLeft = 10;
					updateGuessesLeft();
				}
			}
		}
	}

	// If the user's keystroke is not in the letters array, display alert.
	else {
		alert("Invalid character. Please choose a letter.");
	}
}