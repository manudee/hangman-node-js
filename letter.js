var word = require('./word.js');
var wordGenerator  = require('./wordGenerator.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;
var currentWord = [];

var letter = function(userGuessed,computerPicked){
	this.wins = wins;
	this.losses = losses;
	// this.letterAlreadyGuessed = letterAlreadyGuessed;

	this.userGuessed = userGuessed;
	// this.numberOfGuessesRemaining = 10;



	this.computerPicked = computerPicked;

	this.display = function(){

		console.log("This letter " + this.userGuessed);
		console.log("Word " + this.computerPicked);
		// console.log("boolean ltrthere " + this.ltrthere);
		// console.log("guesses remaining " + this.numberOfGuessesRemaining);
	};

	this.updateWord = function(){
	
			for (var i = 0; i < this.computerPicked.length; i++) {
				if(this.computerPicked[i] === this.userGuessed )
					currentWord[i] = currentWord[i].replace("_",this.userGuessed) ;
			}
		// }

		// else {
		// 	if(!(this.letterAlreadyGuessed .includes(this.userGuessed))){
		// 		this.letterAlreadyGuessed.push(userGuessed); 
		// 		this.numberOfGuessesRemaining--;

		// 	}
		// }
		console.log(currentWord);
		// console.log(letterAlreadyGuessed);
		// console.log(numberOfGuessesRemaining);

	}




}


var wordToGuess = new word(wordGenerator.computerPicked);
wordToGuess.displayWord();
currentWord = wordToGuess.replaceWord();

console.log("word is " + wordToGuess.word.join(""));
console.log("Computer Picked " + wordGenerator.computerPicked);

function wordChecker(){
	if(numberOfGuessesRemaining!=0 || ((currentWord.join("")) != wordGenerator.computerPicked)){
		inquirer.prompt([  {
			name: "letter",
			message: "Please guess the letter?"
		}]).then(function(answers){

			var ltrthere = wordGenerator.computerPicked.includes(answers.letter);
			console.log("ltrthere " + ltrthere);

			if(ltrthere){

				var game = new letter(answers.letter,wordGenerator.computerPicked);
				game.display();
				game.updateWord();

			}

			else{ //if(!(letterAlreadyGuessed.includes(userGuessed))){
				console.log("I AM HERE IN ELSE");
				letterAlreadyGuessed.push(userGuessed); 
				numberOfGuessesRemaining--;
				
			}


			wordChecker();
			console.log("Number numberOfGuessesRemaining " + numberOfGuessesRemaining);
		});
	}
	else if(numberOfGuessesRemaining===0 || ((currentWord.join("")) === wordGenerator.computerPicked)){
//placeholder for reset
	console.log("You guessed the word correctly!");
}
else{
	letterAlreadyGuessed.push();
}
}

wordChecker();



