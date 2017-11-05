
var wordGenerator  = require('./wordGenerator.js');

var word = function(word){

	
	// this.wordArr = word.split("");
	this.word = word.split("");

	this.displayWord = function(){
		console.log(this.word);
		// console.log(typeof(this.wordArr));
		// console.log(this.wordArr[2]);

	};
	

}


// console.log('Word' + wordGenerator.computerPicked);
// var word1 = new word(wordGenerator.computerPicked);


// word1.displayWord();


module.exports = word;