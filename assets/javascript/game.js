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

//This function is only run once, just before the eventlistener begins the loop that will encompass the rest of the gameplay
//Using a function instead of direct initialization as I wanted all the variables to be initialized at once and that's not possible with psychic guess
function initializeGameplay(){
    wins = 0;
    losses = 0;
    guessesLeft = 9;
    yourGuessesSoFar = [];
    psychicGuess = returnRandomLowercaseLetter();
}

function correctGuess(){
    wins++;
    guessesLeft = 9;
    yourGuessesSoFar = [];
}

function incorrectGuess(){
    guessesLeft--;

}

//Update the variables on the page to match what they are recorded as in this script
function refreshDisplay(){
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guessesSoFar").innerHTML = "Guesses so Far: " + yourGuessesSoFar;
}

//New Game Function
//Win or Loss, indicated by 'w' or 'l'
//Clear yourGuessesSoFar
//Increase wins counter
//Refresh Guesses so far array (empty it)
//Choose new computer guess
function newGame(winOrLoss){
    //winOrLoss refers to the win condition of the human, not the computer player

    //if win
    if (winOrLoss == 'w'){
        yourGuessesSoFar = [];
        psychicGuess = returnRandomLowercaseLetter();
        refreshDisplay();
    }
    //if loss
    if (winOrLoss == 'l'){
        losses++;
        yourGuessesSoFar = [];
        guessesLeft = 9;
        psychicGuess = returnRandomLowercaseLetter();
        refreshDisplay();
    }

}

//Event listener for gameplay functionlity
//Inside event that is triggered by keystrokes, check if player has won or lost each time
initializeGameplay();
document.onkeyup = function(event){
    var userGuess = event.key;
    yourGuessesSoFar.push(userGuess);
    refreshDisplay();

    if (userGuess == psychicGuess) {
        correctGuess();
        newGame('w');
    }
    else {
        incorrectGuess();
        if (guessesLeft == 0){
            newGame('l');
        }
    }
}