var word = require('./word.js');
var wordGenerator  = require('./wordGenerator.js');



var letter = function(){



	this.replaceWord = function(){

		var currentWord = [];
		var word1 = new word(wordGenerator.computerPicked);
		word1.displayWord();

		console.log(typeof(word1.word));
		console.log(word1.word);

		for (var i = 0; i < word1.word.length; i++) {
		 	console.log(word1.word[i]);
		 	 currentWord[i] = "-";

		 }

console.log(currentWord);
		}
	}




var letter1  = new letter();
letter1.replaceWord();