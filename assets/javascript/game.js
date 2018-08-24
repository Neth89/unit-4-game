//Event
$(document).ready(function(){

// Generate a random number between 19-120
var gameNum = Math.floor(Math.random() * 120 + 19)
// Give the random number box its number
    $("#randomNum").text(gameNum);

// we need to create reset game after win or lose
function reset(){

    var gameNum = Math.floor(Math.random() * 120 + 19);
    var crys1 = Math.floor(Math.random() * 12 + 1);
    var crys2 = Math.floor(Math.random() * 12 + 1);
    var crys3 = Math.floor(Math.random() * 12 + 1);
    var crys4 = Math.floor(Math.random() * 12 + 1);
    totalScore = 0; 
    $("#score").text(totalScore);
    $("#randomNum").text(gameNum); 
}
//variable 
    var wins=0;
    var losses=0;
    var totalScore=0;

//crystals will generate random number 1-12
var crys1 = Math.floor(Math.random() * 12 + 1);
var crys2 = Math.floor(Math.random() * 12 + 1);
var crys3 = Math.floor(Math.random() * 12 + 1);
var crys4 = Math.floor(Math.random() * 12 + 1);

function won(){
    wins++;
    console.log("yay!");
    $("#win").text(wins);
    reset();
}

function loss(){
    losses++;
    console.log("no!");
    $("#loss").text(losses);
    reset();
}

//When crystal is clicked, add a number
    $("#green").on("click", function(){
        totalScore = totalScore + crys1;
        $("#score").text(totalScore);

    if (totalScore === gameNum){
        won();
    }
    else if (totalScore > gameNum){
        loss();
    }

    $("#pink").on("click", function(){
        totalScore = totalScore + crys2;
        $("#score").text(totalScore);

    if (totalScore === gameNum){
        won();
    }
    else if (totalScore > gameNum){
        loss();
    }
    })

    $("#purple").on("click", function(){
        totalScore = totalScore + crys3;
        $("#score").text(totalScore);

    if (totalScore === gameNum){
        won();
    }
    else if (totalScore > gameNum){
        loss();
    }
    })

    $("#red").on("click", function(){
        totalScore = totalScore + crys4;
        $("#score").text(totalScore);

    if (totalScore === gameNum){
        won();
    }
    else if (totalScore > gameNum){
        loss();
    }
    })

    })
})