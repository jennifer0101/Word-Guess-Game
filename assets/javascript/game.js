//maximum number of tries per word
var maxTries = 10

// create an array of words
var pixarWords = ["Merida", "Nemo", "Squirt", "Buzz", "Woody", "Jessie", "Rex", "Eve", "Walle", "Boo", "Crush", "Dory", "Mike", "Sulley", "Mater", "Gasprin", "Flik", "Joy", "Anger", "Sadness", "Disgust", "Hector", "Miguel", "Russell", "Remy"]

//stores letters user guessed
var lettersGuessed = [];

//current word in array
var currentWord;

//letters being guessed to build word in array
var wordGuess = [];

//how many guesses left
var numberRemaining = 0;

//game starts flag
var gameStart = false;

//game ends, alert "press any key to try again"
var gameOver = false;

//letters of current word
var lettersOfCurrentWord = [];

//store matched letters if guessed correctly
var matchedLetters = [];

//how many wins player has total
var numberWins = 0;
document.querySelector("#numberWins").innerHTML=numberWins;

function resetGame() {
    numberRemaining = maxTries;
    gameStarted = false;
}

function setUpGame(){
    //choose random word from array
    currentWord = pixarWords[Math.floor(Math.random() * pixarWords.length)];
    //splits up word into individual letters
    lettersOfCurrentWord = currentWord.split("");
    buildWordView();
}


function buildWordView(){
    var wordView="";
    //loops through array of words, 
    for (let i = 0; i < lettersOfCurrentWord.length; i++) {
        console.log(lettersOfCurrentWord[i]);
    //if letters match, fills into word, if not, puts in dash    
    if (matchedLetters.indexOf(lettersOfCurrentWord[i]) !== -1){
        wordView += lettersOfCurrentWord[i];
    } else {
        wordView += "&nbsp;_&nbsp;"
    }
    }
    document.querySelector("#currentWord").innerHTML=wordView;
}

document.onkeyup = function() {
    wordguess = String.fromCharCode(event.keycode).toLowerCase();
    
}




//function that runs when game starts
setUpGame();

