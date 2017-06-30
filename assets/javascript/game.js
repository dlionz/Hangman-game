//words arry
var words = ["Jedi", "StawWars", "Luke", "HanSolo", "Empire"];
//stores letters geussed
var letterGeussed =[];
//counter for guess
var guessCounter = 10;
//win counter
var win = 0;
//word to guess
var wordToGuess = words[Math.floor(Math.random()*words.length)];
//split random word
var wordSplit = wordToGuess.split("");

//danny
wordToGuess = wordToGuess.split("");

//writting to html for Wins, Word, LetterGeuss

document.getElementById("wins").innerHTML = win;
document.getElementById("geussLeft").innerHTML = guessCounter;


//creates arrry for random word
for(var i = 0; i < wordSplit.length; i++){
	wordSplit[i] = "_ ";
	document.getElementById("word").innerHTML = wordSplit.join("");
}


//pressed key function and into the abyss
document.onkeyup = function(event){
 	
 	if(letterGeussed.length === 0){
 		console.log("run")
 		letterGeussed.push(event.key);
 	}
		//forloop to compare users geuss to letters already geussed
		 //loop through each letter in letterGeussed
		 // //if ANY of the letters match, log already
		//  // //else, push the new letter into the array
	 	for(var k = 0; k < letterGeussed.length; k++){
	 		if(letterGeussed.includes(event.key)){
	 		}	
	 		else{
	 			letterGeussed.push(event.key);
	 			console.log(letterGeussed);
	 			document.getElementById("guess").innerHTML = letterGeussed;
	 		}
	 		
	 	}
 	// for loop to check wordToGuess and Letterguessed	
	 for(var j = 0; j < letterGeussed.length; j++){
		for(var h =0; h < wordToGuess.length; h++){
 			if(letterGeussed[j] === wordToGuess[h]){
 				wordSplit[h] = letterGeussed[j];
 				var hit = true;
	 				
	 			}
	 
	 		}
	 
	 	}

	//dannys loop
		var showWord = "";
		for(var i = 0; i<wordToGuess.length;i++){
			
			if(letterGeussed.indexOf(wordToGuess[i].toLowerCase()) >=0){
				showWord = showWord + wordToGuess[i] + " ";
				
				console.log("position of letter: ", letterGeussed.indexOf(wordToGuess[i]));
			}
			//need an else if to check
			else {
				showWord = showWord + "_ ";
			
			}	
		}

		//checking guess
		if(!hit){
			guessCounter--;
			document.getElementById("geussLeft").innerHTML = guessCounter;
		}

	 	document.getElementById("word").innerHTML = showWord;


	 	//loose
	 	if(guessCounter === 0){
	 		youLoose();
	 	}
	 	//win
	 	if(wordSplit === wordToGuess){
	 		console.log(showWord);
	 		youWin();
	 	}
		
 }



//Win Function
function youWin(){
	alert("WHOOOOOOOOOO! You got'em!");
	win++;
	document.getElementById("wins").innerHTML = win;
	var wordToGuess = words[Math.floor(Math.random()*words.length)];
	var guessCounter = 10;
	var letterGeussed =[];
}

//Loose Function
function youLoose(){
	alert("Beware the darkside!");
	var wordToGuess = words[Math.floor(Math.random()*words.length)];
	var guessCounter = 10;
	var letterGeussed =[];
}







