$(document).ready(function() {
// executes when document is ready

// global variables
    var gameRandom;
    var currentScore;
    var userWins = 0;
    var userLoss = 0;
    var gameOver;
    var crystal;
    var crystalRandom;

// generate random start total
    gameRandom = Math.floor(Math.random() * 120) + 19;
    console.log(gameRandom);

// build four crystals + random value assignments
    for(var i=0; i < 4; i++) {
        crystal = $("<div>");
        crystal.attr("class", "crystalbox")
        $(".crystals").append(crystal);
        crystalRandom = Math.floor(Math.random() * 12) + 1;

        console.log(crystalRandom);


    }





// game flow
//  - get random values
//  - check random vs. current total, update
//  - if over random, loss message, increment loss counter
//  - of below random, keep going message, wait for click
//  - if equal random, win message, increment win counter, start over message/button

    // add background, formatting for all html components in style sheet based on class or IDs

// need a welcome message with instructions <p>?

// need random total score + display

   
// need four crystals -- images, variables, random values

// need to write to crystal displays to update hidden numbers

// need a current score + display

// need win, losses counters

// need a start and/or restart button?

}); //doc ready termination