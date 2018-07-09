// global variables    
var gameRandom;
var cScore = 0;
var userWins = 0;
var userLoss = 0;
var gameOver;
var crystalImage;
var crystal;
var crystalRandom;
var images = ["assets/images/image1.png", "assets/images/image2.jpg", "assets/images/image3.jpg","assets/images/image4.jpg"];

function initGame() {
    cScore = 0;
    gameRandom = 0;

    // generate random start total
    gameRandom = Math.floor(Math.random() * 120) + 19;
    $("#randomScore").html("Score needed: " + gameRandom);
    console.log(gameRandom);

    // build four crystals + random value assignments
    for(var i=0; i < 4; i++) {
        
        crystalRandom = Math.floor(Math.random() * 12) + 1;
        $("#" + i.toString()).val(crystalRandom);
        
        console.log(crystalRandom);
    }

}

$(document).ready(function() {
// executes when document is ready

    for(var i=0; i < 4; i++) {            
        crystal = $("<button>");
        crystalImage = $("<img>");
        crystal.attr("class", "crystalbox");
        crystal.attr("id", i);        
        crystalImage.attr("src", images[i]);
        crystal.append(crystalImage);
        $(".crystals").append(crystal);               
        
    }
    
// start game
    initGame();

// capture click; set current score, check for win/loss
    $(document).on("click", ".crystalbox", function(){
        var temp = $(this).val();
        cScore +=parseInt(temp);
        if (cScore === gameRandom) {
            ++userWins;
            initGame();
    
        }

        else if (cScore > gameRandom) {
            ++userLoss;
            initGame();

        }
        console.log(cScore);
        console.log(temp);
    
    $("#currentScore").html("Current Score: " + cScore);
    $("#wins").html("Total wins: " + userWins);
    $("#loss").html("Total losses: " + userLoss);

    });


}); //doc ready termination