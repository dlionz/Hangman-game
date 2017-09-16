//words arry
var words = ["jedi", "luke"];
//stores letters geussed
var letterGeussed = [];
//counter for guess
var guessCounter = 10;
//win counter
var win = 0;
//word to guess
var wordToGuess = words[Math.floor(Math.random() * words.length)];
//split random word
var wordSplit = wordToGuess.split("");
var secretWord = wordSplit;

wordToGuess = wordToGuess.split("");


//writting to html for Wins, Word, LetterGeuss
document.getElementById("wins").innerHTML = win;
document.getElementById("geussLeft").innerHTML = guessCounter;

//creates arrry for random word
for (var i = 0; i < wordSplit.length; i++) {
  wordSplit[i] = "_ ";
  document.getElementById("word").innerHTML = wordSplit.join("");
}



//pressed key function and into the abyss
document.onkeyup = function(event) {

  if (letterGeussed.length === 0) {
    console.log("run")
    letterGeussed.push(event.key);
  }

  for (var k = 0; k < letterGeussed.length; k++) {
    if (letterGeussed.includes(event.key)) {} else {
      letterGeussed.push(event.key);
      document.getElementById("guess").innerHTML = letterGeussed;
    }

  }
  // for loop to check wordToGuess and Letterguessed
  for (var j = 0; j < letterGeussed.length; j++) {
    for (var h = 0; h < wordToGuess.length; h++) {
      if (letterGeussed[j] === wordToGuess[h]) {
        wordSplit[h] = letterGeussed[j];
        var hit = true;

      }

    }

  }

  var showWord = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    if (letterGeussed.indexOf(wordToGuess[i].toLowerCase()) >= 0) {
      showWord = showWord + wordToGuess[i] + " ";
    }
    //need an else if to check
    else {
      showWord = showWord + "_ ";
    }
  }

  //checking guess
  if (!hit) {
    guessCounter--;
    document.getElementById("geussLeft").innerHTML = guessCounter;
  }

  document.getElementById("word").innerHTML = showWord;

  console.log(showWord);
  //loose
  if (guessCounter === 0) {
    youLoose();
  }
  //win
  if (showWord.search("_") === -1) {
    youWin();
  }
}


//Win Function
function youWin() {
  win++;
  document.getElementById("wins").innerHTML = win;
  alert("WHOOOOOOOOOO! You got'em!");
  cleanSlate();

}

//Loose Function
function youLoose() {
  alert("You loose! Beware the darkside!");
  cleanSlate();
}


function cleanSlate() {
  //clears geussed letters & counter
  document.getElementById("geussLeft").innerHTML = guessCounter;
  document.getElementById("guess").innerHTML = letterGeussed;
  //sets up variables
  var wordToGuess = words[Math.floor(Math.random() * words.length)];
  var guessCounter = 10;
  var letterGeussed = [];
  var showWord = "";
  for (var i = 0; i < wordSplit.length; i++) {
    wordSplit[i] = "_ ";
    document.getElementById("word").innerHTML = wordSplit.join("");
  }
}
