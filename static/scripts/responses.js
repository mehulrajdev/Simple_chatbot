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


