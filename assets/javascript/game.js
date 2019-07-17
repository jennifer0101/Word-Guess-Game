// create an array of words
var pixarWords = ["merida", "nemo", "squirt", "buzz", "woody", "jessie", "rex", "eve", "walle", 
"boo", "crush", "dory", "mike", "sulley", "mater", "gasprin", "flik", "joy", "anger", "sadness", 
"disgust", "hector", "miguel", "russell", "remy"]

//stores letters user guessed
var lettersGuessed = [];

//current word in array
var currentWord;

//word being guessed to build word in array
var wordGuess = [];

//how many guesses left
var numberRemaining = 15;

//game starts flag
var gameStart = false;

//game ends, alert "press any key to try again"
var gameOver = false;

//how many wins player has total
var numberWins = null;




function startGame(){
    console.log("game is starting")
  
    gameStart = false;
    //clear arrays
    lettersGuessed = [];
    wordGuess = [];

    //round random number down to nearest whole
    currentWord = Math.floor(Math.random() * (pixarWords.length));
    
    
    //build wordGuess and clear it out
    for (var i = 0; i < pixarWords[currentWord].length; i++){
        wordGuess.push(" _ ");
    }
    updatePage();
}



//updates main html page display
function updatePage(){
    console.log("updatePage is starting")
    document.getElementById("numberWins").innerText = numberWins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < wordGuess.length; i++) {
       document.getElementById("currentWord").innerText += wordGuess [i];
    }
    document.getElementById("numberRemaining").innerText = numberRemaining;
    document.getElementById("lettersGuessed").innerText = lettersGuessed;
        if(numberRemaining <= 0) {
            //
            //document.getElementById
            //document.getElementById
            // add images
    gameOver = true;
    }
}



document.onkeydown = function(event) {
    //finsih game, one keystroke resets
    if(gameOver){
        console.log(gameOver)
        startGame();
        gameOver = false;
    }  else {
        //checks to make sure a-z was pressed
        if(event.keyCode >= 65 && event.keyCode <= 90) {
           guessLetter(event.key.toLowerCase());   
        }
    }
    buildWordView();
  };



function buildWordView(){
    var wordView="";
    //loops through array of words, 
    for (let i = 0; i < wordGuess.length; i++) {
        console.log(wordGuess[i]);
    //if letters match, fills into word, if not, puts in dash    
    if (lettersGuessed.indexOf(wordGuess[i]) !== -1){
        wordView += wordGuess[i];
    } else {
        wordView += "&nbsp;_&nbsp;"
    }
    }
    document.querySelector("#currentWord").innerHTML=wordView;
}



function guessLetter(letter) {
    if (numberRemaining > 0) {
        if (!gameStart){
            gameStart = true;
        }

    //make sure didn't already use this letter
    if (lettersGuessed.indexOf(letter) === -1) {
        lettersGuessed.push(letter);
        checkGuess(letter);
    }
    }

    updatePage();
    ifWin();
}



//finds letter in string and replaces with guessed letter
function checkGuess(letter) {
    console.log("checkGuess is starting")
    // stores positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store in array.
    for (var i = 0; i < pixarWords[currentWord].length; i++) {
        if(pixarWords[currentWord][i] === letter) {
            positions.push(i);
        }
    }

    // if there are no indicies, remove a guess
    if (positions.length <= 0) {
        numberRemaining--;
       
    
    } else {
        // Loop through and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            wordGuess[positions[i]] = letter;
        }
    }
};



function ifWin() {
    if(wordGuess.indexOf("_") === 1) {
        numberWins++;
        gameOver = true;
       
    }
};

//function that runs when game starts
startGame();

