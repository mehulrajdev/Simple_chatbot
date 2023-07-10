function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "hi") {
        return "What's you name!";
    } else if (input == "Who are you"){
        return "I'm a bot";
    }

    else {
        return "Type rock,paper or scissors";
    }

}



//   function getResponse(){  
// const inputField = document.getElementById("textInput")
// inputField.addEventListener("keydown", function(e) {
//     if (e.code === "Enter") {
//         let input = inputField.value;
//         inputField.value = "";
//         output(input);
// }
// });

//   }

// function getBotResponse()
// {
//       let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
          
     
//      text = text
//     .replace(/ a /g, " ")
//     .replace(/whats/g, "what is")
//     .replace(/please /g, "")
//     .replace(/ please/g, "");
// }


// const utterances = [ 
//     ["how are you", "how is life", "how are things"],        //0
//     ["hi", "hey", "hello", "good morning", "good afternoon"],      //1
//     ["what are you doing", "what is going on", "what is up"],      //2
//     ["how old are you"],					//3
//     ["who are you", "are you human", "are you bot", "are you human or bot"],   //4
    
// ]
   
//   ;
   
//   // Possible responses corresponding to triggers
   
//   const answers = [
//      [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],                                                                                  	//0
//     [
//       "Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"
//     ],						//1
//     [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],						//2
//     ["I am infinite"],					//3
//     ["I am just a bot", "I am a bot. What are you?"],	//4
    
    
   
//   ];
   
//   // For any other user input
   
//   const alternatives = [
//     "Go on...",
//     "Try again",
//   ];

//   function compare(utterancesArray, answersArray, string) {
//     let item;
//     for (let x = 0; x < utterancesArray.length; x++) {
//       for (let y = 0; y < utterancesArray[x].length; y++) {
//         if (utterancesArray[x][y] === string) {
//           items = answersArray[x];
//           item = items[Math.floor(Math.random() * items.length)];
//           }
//         }
//      }
//     return item;
//   }

//   function getBotResponse(input) {
//     let product;
//     let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
//     text = text
//       .replace(/ a /g, " ")
//       .replace(/whats/g, "what is")
//       .replace(/please /g, "")
//       .replace(/ please/g, "");
   
//     if (compare(utterances, answers, text)) {
//       product = compare(utterances, answers, text);
//     } 
//     else {
//       product = alternatives[Math.floor(Math.random() * alternatives.length)];
//     }
// }  