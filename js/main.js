
function game() {
// COMPUTER GENERATES A RANDOM NUMBER EVERY TIME YOU PLAY THE GAME
var number = Math.floor((Math.random() * 100) + 1)
// USERINPUT
var userInput = Number(prompt("Guess a number from 1-100"))
// SET GUESS = 1 SO WE CAN KEEP TRACK OF THE NUMBER OF TRIES
var guess = 1

	while(userInput != number) {
		// IF NUMBER OF TRIES IS MORE THAN OR EQUAL TO 10
		if(guess >= 10) {
			document.getElementById('results').innerHTML =("Tries: " + guess) 
			document.getElementById('lost').className = 'show'
			document.getElementById('text').className = 'hide'
			document.getElementById('again').className = 'show'
			document.getElementById('info').className = 'hide'
			break
		} else if(userInput > number) {
			// IF USERINPUT IS HIGHER THAN THE RANDOM NUMBER GENERATED
			userInput = prompt("Guess lower")
			guess++ 
		} else if(userInput < number) {
			// IF USERINPUT IS LOWeR THAN THE RANDOM NUMBER GENERATED
			userInput = prompt("Guess higher")
			guess++
		} 
		} 	if (userInput == number) {
			// IF USERINPUT = RANDOM NUMBER GENERATED
		document.getElementById('results').innerHTML = ("Tries: " + guess)
		document.getElementById('win').className = 'show'
		document.getElementById('text').className = 'hide'
		document.getElementById('again').className = 'show'
		document.getElementById('info').className = 'hide'
		}
}

