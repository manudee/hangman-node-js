var word = require('./word.js');
var wordGenerator  = require('./wordGenerator.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;
var currentWord = [];
var computerPicked;

var letter = function(userGuessed,computerPicked){



	this.userGuessed = userGuessed;



	this.computerPicked = computerPicked;

	this.display = function(){

		console.log("This letter " + this.userGuessed);
		console.log("Word " + this.computerPicked);

	};

	this.updateWord = function(){

		for (var i = 0; i < this.computerPicked.length; i++) {
			if(this.computerPicked[i] === this.userGuessed )
				currentWord[i] = currentWord[i].replace("_",this.userGuessed) ;
		}

		console.log(currentWord);


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

			else{ 
				console.log("I AM HERE IN ELSE");
				letterAlreadyGuessed.push(userGuessed); 
				numberOfGuessesRemaining--;
				
			}

			if(numberOfGuessesRemaining === 0 ){

				losses++;
				console.log("You lost");
				console.log("Losses " + losses);
				return;
				// startGame();
				// reset();
			}

			else if ((currentWord.join("")) === wordGenerator.computerPicked) {

				wins++;
				console.log("You win!");
				console.log("Wins " + wins);
				return;
				// startGame();

       		// reset();


       	}

       	wordChecker();
       	console.log("Number numberOfGuessesRemaining " + numberOfGuessesRemaining);


       });
	}



}

wordChecker();



