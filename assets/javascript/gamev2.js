// words arry
var words = ['Jedi', 'StawWars', 'Luke', 'HanSolo', 'Empire'];
// stores letters geussed
var letterGeussed = [];
// counter for guess
var guessCounter = 10;
// win counter
var win = 0;
// word to guess
var wordToGuess = words[Math.floor(Math.random() * words.length)];
// split random word
var wordSplit = wordToGuess.split('');
// splitting wordGeuss
wordToGuess = wordToGuess.split('');
