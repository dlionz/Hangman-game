//words array
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

wordToGuess = wordToGuess.split("");

//blank space post for page.
for (var i = 0; i < wordSplit.length; i++) {
  wordSplit[i] = "_ ";
  document.getElementById("word").innerHTML = wordSplit.join("");
}

//pressed key function and into the abyss
document.onkeyup = function(event) {
  //writting to html for Wins, Word, LetterGeuss
  document.getElementById("wins").innerHTML = win;
  document.getElementById("geussLeft").innerHTML = guessCounter;

  //as long as my array isnt empty code will show the key pressed.
  if (letterGeussed.length === 0) {
    letterGeussed.push(event.key);
  }

  for (var k = 0; k < letterGeussed.length; k++) {
    if (letterGeussed.includes(event.key)) {} else {
      letterGeussed.push(event.key);
      document.getElementById("guess").innerHTML = letterGeussed;
    }
  }
  // for loop to checks the letter you geussed. if you geuss incorrect
  //you loose a geuss point line 49
  for (var j = 0; j < letterGeussed.length; j++) {
    for (var h = 0; h < wordToGuess.length; h++) {
      if (letterGeussed[j] === wordToGuess[h]) {
        wordSplit[h] = letterGeussed[j];
        var geussNum = true;
      }
    }
  }
  //updates geuss counter per the above if geussNum eveluates to false.
  if (!geussNum) {
    guessCounter--;
    document.getElementById("geussLeft").innerHTML = guessCounter;
  }
  //this block is the invisivle wordToGuess
  //and is used to evaluate if the player wins
  var showWord = "";
  for (var i = 0; i < wordToGuess.length; i++) {
    if (letterGeussed.indexOf(wordToGuess[i].toLowerCase()) >= 0) {
      showWord = showWord + wordToGuess[i] + " ";
    } else {
      showWord = showWord + "_ ";
    }
  }
  document.getElementById("word").innerHTML = showWord;
  //lose
  if (guessCounter === 0) {
    youLosse();
  }
  //win
  if (showWord.search("_") === -1) {
    document.getElementById("word").innerHTML = showWord;
    youWin();
  }
}


//Win Function
function youWin() {
  win++;
  document.getElementById("wins").innerHTML = win;
  alert("WHOOOOOOOOOO! You got'em! Lets go again!");
  cleanSlate();
}

//Loose Function
function youLose() {
  alert("You loose! Beware the darkside! Try again.");
  cleanSlate();
}

//new game function
function cleanSlate() {
  //sets up variables
  wordToGuess = words[Math.floor(Math.random() * words.length)];
  guessCounter = 10;
  letterGeussed = [];
  showWord = "";
  for (var i = 0; i < wordSplit.length; i++) {
    wordSplit[i] = "_ ";
    document.getElementById("word").innerHTML = wordSplit.join("");
  }

  //clears geussed letters & counter
  document.getElementById("geussLeft").innerHTML = guessCounter;
  document.getElementById("guess").innerHTML = letterGeussed;
}
