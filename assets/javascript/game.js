
// create an array of words
var pixarWords = ["Merida", "Nemo", "Squirt", "Buzz", "Woody", "Jessie", "Rex", "Eve", "Walle", "Boo", "Crush", "Dory", "Mike", "Sulley", "Mater", "Gasprin", "Flik", "Joy", "Anger", "Sadness", "Disgust", "Hector", "Miguel", "Russell", "Remy"]

//stores letters user guessed
var lettersGuessed = [];

//current word in array
var currentWord;

//word being guessed to build word in array
var wordGuess = [];

//how many guesses left
var numberRemaining = 0;

//game ends, alert "press any key to try again"
var gameOver = false;

//how many wins player has total
var numberWins = 0;



//chooses random word from the array




var currentWord = pixarWords[Math.floor(Math.random() * pixarWords.length)];

document.body.innerHTML = currentWord