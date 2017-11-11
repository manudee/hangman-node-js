var word = require('./word.js');
var wordGenerator  = require('./wordGenerator.js');
var inquirer = require("inquirer");
var letterAlreadyGuessed = [];
var numberOfGuessesRemaining = 10;
var losses= 0;
var wins = 0;
var userGuessed;

var computerPicked = wordGenerator.computerChoice[Math.floor(Math.random() * wordGenerator.computerChoice.length)].toLowerCase();

var letter = function(userGuessed,computerPicked){



	this.userGuessed = userGuessed.toLowerCase();



	this.computerPicked = computerPicked;

	this.display = function(){

		console.log("This letter " + this.userGuessed);
		// console.log("Word " + this.computerPicked);

	};

	this.updateWord = function(){

		for (var i = 0; i < this.computerPicked.length; i++) {
			if(this.computerPicked[i] === this.userGuessed )
				currentWord[i] = currentWord[i].replace("_",this.userGuessed) ;
		}

		console.log(currentWord);


	}




}

var wordToGuess = new word(computerPicked);
wordToGuess.displayWord();
var currentWord = wordToGuess.replaceWord();

// console.log("word is " + currentWord);
// console.log("Computer Picked " + computerPicked);




function reset(){
	computerPicked = wordGenerator.computerChoice[Math.floor(Math.random() * wordGenerator.computerChoice.length)].toLowerCase();
	// console.log("In Reset ");

	inquirer.prompt([{

		type: "confirm",
		name: "reset",
		message: "Play again?"
	}]).then(function(answer){

		if(answer.reset){
			letterAlreadyGuessed = [];
			numberOfGuessesRemaining = 10;
			var wordToGuess = new word(computerPicked);
			//wordToGuess.displayWord();
			//console.log("word to guess Word = " + wordToGuess.displayWord());
			currentWord = wordToGuess.replaceWord();	
			console.log("Current Word = " + currentWord);
			wordChecker();
		}
		else
			console.log("Thanks for playing");
	});


};



function wordChecker(){

	if(numberOfGuessesRemaining!=0 && ((currentWord.join("")) != computerPicked)){
		inquirer.prompt([  {
			name: "letter",
			message: "Please guess the letter?"
		}]).then(function(answers){

			var ltrthere = computerPicked.includes(answers.letter.toLowerCase());
			// console.log("ltrthere " + ltrthere);
			var game = new letter(answers.letter,computerPicked);

			// console.log("Letter exists in array " + !letterAlreadyGuessed.includes(answers.letter.toLowerCase()));
			// console.log("Letter there in word " + !ltrthere);
			if(ltrthere){

				
				game.display();
				game.updateWord();

			}

			else if (!letterAlreadyGuessed.includes(answers.letter.toLowerCase()) && !ltrthere){ 
				game.display();
				game.updateWord();
				letterAlreadyGuessed.push(answers.letter.toLowerCase()); 
				numberOfGuessesRemaining--;
				console.log("Guesses remaining " + numberOfGuessesRemaining);
				
			}
			console.log("Letter guessed so far " + letterAlreadyGuessed);
			wordChecker();


		});

	}


	if(numberOfGuessesRemaining === 0 && (currentWord.join("")) != computerPicked ){

		losses++;
		console.log("You lost");
		console.log("Losses " + losses);
		reset();
	}

	else if (((currentWord.join("")) === computerPicked && numberOfGuessesRemaining === 0) ||
		((currentWord.join("")) === computerPicked && numberOfGuessesRemaining != 0)) 
	{

		wins++;
		console.log("You win!");
		console.log("Wins " + wins);
		reset();

	}
}

wordChecker();


