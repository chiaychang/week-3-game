<SCRIPT LANGUAGE="javascript">

var bestwords = ["huge","bing","wall","rich","grab","fake"];
var guessleft = 12;


document.onkeyup = function(event) {
         
        //guessleft= i--,

        var userGuess = event.key;
        var bestwordsanswer = bestwords[Math.floor(Math.random() * bestwords.length)];


        for(i=0; i <bestwordsanswer.length; i++) {
        	if userGuess.toLowerCase() === bestwordsanswer.charAt(i) {

        		document.write(bestwordsanswer[i]);


        	}

        else { document.write(userGuess);

        }


       //if guessleft=0 { 
       	//document.getElementById("trumpgame").reset();
        //}


       
