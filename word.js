
var wordGenerator  = require('./wordGenerator.js');

var word = function(word){

	

	this.word = word.split("");



	this.displayWord = function(){
		console.log(this.word);


	};
	

	this.replaceWord = function(){
		console.log(typeof(this.word));
		console.log(this.word);
		console.log(this.word.length);
		var currentWord = [];
		for (var i = 0; i < this.word.length; i++) {
			console.log(this.word[i]);
			currentWord[i] = "_";

		}

		return currentWord;
	}

}



// var word1 = new word(wordGenerator.computerPicked);


// word1.displayWord();
// word1.replaceWord();

module.exports = word;