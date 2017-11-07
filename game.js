var word = require('./word.js');
var wordGenerator  = require('./wordGenerator.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;
var currentWord = [];

var letter = function(userGuessed,numberOfGuessesRemaining, computerPicked,ltrthere){
	this.wins = wins;
	this.losses = losses;
	this.letterAlreadyGuessed = letterAlreadyGuessed;

	this.userGuessed = userGuessed;
	this.numberOfGuessesRemaining = 10;
	this.ltrthere = ltrthere;
	this.computerPicked = computerPicked;

	this.display = function(){

		console.log("This letter " + this.userGuessed);
		console.log("Word " + this.computerPicked);
		console.log("boolean ltrthere " + this.ltrthere);
		console.log("guesses remaining " + this.numberOfGuessesRemaining);
	};

	this.updateWord = function(){
		if(this.ltrthere)
		{
			for (var i = 0; i < this.computerPicked.length; i++) {
				if(this.computerPicked[i] === this.userGuessed )
					currentWord[i] = currentWord[i].replace("_",this.userGuessed) ;
			}
		}

		else {
			if(!(this.letterAlreadyGuessed .includes(this.userGuessed))){
				this.letterAlreadyGuessed.push(userGuessed); 
				this.numberOfGuessesRemaining--;

			}
		}
		console.log(currentWord);
		console.log(this.letterAlreadyGuessed);
		console.log(this.numberOfGuessesRemaining);

	}




}


var wordToGuess = new word(wordGenerator.computerPicked);
wordToGuess.displayWord();
currentWord = wordToGuess.replaceWord();

console.log("word is " + wordToGuess.word.join(""));
console.log("Computer Picked " + wordGenerator.computerPicked);




function createWord(){

	inquirer.prompt([  {
		name: "letter",
		message: "Please guess the letter?"
	}]).then(function(answers){

	}
})


	function wordChecker(){
		if(numberOfGuessesRemaining!=0 || ((currentWord.join("")) != wordGenerator.computerPicked)){
			inquirer.prompt([  {
				name: "letter",
				message: "Please guess the letter?"
			}]).then(function(answers){

				var ltrthere = wordGenerator.computerPicked.includes(answers.letter);
				console.log("ltrthere " + ltrthere);

				var game = new letter(answers.letter,numberOfGuessesRemaining,wordGenerator.computerPicked,ltrthere);
				game.display();
				game.updateWord();

				wordChecker();
				console.log("Number numberOfGuessesRemaining " + numberOfGuessesRemaining);
			});
		}
		else if(numberOfGuessesRemaining=0 || ((currentWord.join("")) = wordGenerator.computerPicked)){
//placeholder for reset
}
else{
	letterAlreadyGuessed.push();
}
}

wordChecker();



