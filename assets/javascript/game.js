



//Event
$(document).ready(function(){

// Generate a random number between 19-120
var gameNum = Math.floor(Math.random() * 120 + 19)
// Give the random number box its number
    $("#ranNum").text(gameNum);

//variable 
    var wins=0;
    var losses=0;
    var total=0;
//crystal to be displayed as buttons
//crystals will generate random number 1-12
var crys1 = Math.floor(Math.random() * 12 + 1);
var crys2 = Math.floor(Math.random() * 12 + 1);
var crys3 = Math.floor(Math.random() * 12 + 1);
var crys4 = Math.floor(Math.random() * 12 + 1);

//When crystal is clicked, add a number
    $("#green").on("click", function(){
        totalscore = totalscore + crys1;
        console.log("New totals= " + totalscore);
        $("#score").text(total);
    })





















})