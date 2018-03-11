// Javascript for Psychic Game


//Initialize Variables we will use
var wins = 0; //Initially, user has not made any guesses, and hence no wins
var losses = 0;
var guessesLeft = 9; //Based on the video, the player has 9 chances to guess right
var yourGuessesSoFar = [];
var psychicGuess; //Will initialize later, using function returnRandomLowercaseLetter

//Function to choose random letter
//Randomly choose an element
function returnRandomLowercaseLetter(){
    //Based on the video, it seems as though the random letter is chosen only from lower-case letters
    //In addition, we are including the array here because it's use is directly tied to the function (and vice versa). This is the type of function we could
    //reuse in other projects, but only if it is self-contained and not tied to global variables in this specific module
    var possibleLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
    return possibleLetters[Math.floor(Math.random()*possibleLetters.length)];
}

//Player Wins
//Clear yourGuessesSoFar
//Increase wins counter
//Refresh Guesses so far array (empty it)

//Player Loses
//Clear yourGuessesSoFar
//Increase losses counter
//Refresh Guesses so far array (empty it)

//Event listener for gameplay functionlity
//Inside event that is triggered by keystrokes, check if player has won or lost each time