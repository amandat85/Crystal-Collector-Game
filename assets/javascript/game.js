$(document).ready(function() {

//VARIABLES AND RANDOM NUMBER GENERATION===========================================================================

//Assign user stats variables and display them in html
var yourTotal = 0;
console.log(yourTotal)
var wins = 0;
var losses = 0;

$("#wins").html("Wins" + "<br>" + wins);
$("#losses").html("Losses" + "<br>" + losses);
$("#yourNumber").html("Your Total" + "<br>" + yourTotal);

//When the game starts a random target number will be generated for the player
//Generate random number for target
var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
console.log(targetNumber);

//Assign target number to location in html
$("#target").html("Target" + "<br>" + targetNumber);

//A random number will be assigned to the gems
var gem1 = Math.floor(Math.random() *(12-1+1)) + 1;
//$(".gemCount").html(gem1);
console.log(gem1);

var gem2 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem2);

var gem3 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem3);

var gem4 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem4);

//RESET FUNCTION====================================================================================================

//Reset Game Function
function reset() {
    yourTotal = 0;
    $("#yourNumber").html("Your Total" + "<br>" + yourTotal);
    console.log(yourTotal)
    yourTotal = parseInt(yourTotal);

    targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
    console.log(targetNumber);

    $("#target").html("Target" + "<br>" + targetNumber);

    gem1 = Math.floor(Math.random() *(12-1+1)) + 1;
    console.log(gem1);

    gem2 = Math.floor(Math.random() *(12-1+1)) + 1;
    console.log(gem2);

    gem3 = Math.floor(Math.random() *(12-1+1)) + 1;
    console.log(gem3);

    gem4 = Math.floor(Math.random() *(12-1+1)) + 1;
    console.log(gem4);
}
//ON CLICK FUNCTION/IF/ELSE IF======================================================================================

//when the gem is clicked the number for that gem will be added to the players progress score * 4
$("#orange").on("click", function() {
    yourTotal = yourTotal + gem1
    $("#yourNumber").html("Your Total" + "<br>" + yourTotal);
    console.log(yourTotal);

//If the player reaches target without going over then win++ and reset
    if (targetNumber === yourTotal) {
        alert("Congratulations! You Win!");
        wins++;
        $("#wins").html("Wins" + "<br>" + wins);
        reset();
    }
//Else if the player goes over target then losses++    
    else if (yourTotal > targetNumber) {
        alert("Better Luck Next Time!");
        losses++;
        $("#losses").html("Losses" + "<br>" + losses);
        reset();
    }
})

$("#blue").on("click", function() {
    yourTotal = yourTotal + gem2
    $("#yourNumber").html("Your Total" + "<br>" + yourTotal);
    console.log(yourTotal);

//If the player reaches target without going over then win++ and reset
    if (targetNumber === yourTotal) {
        alert("Congratulations! You Win!");
        wins++;
        $("#wins").html("Wins" + "<br>" + wins);
        reset();
    }
//Else if the player goes over target then losses++
    else if (yourTotal > targetNumber) {
        alert("Better Luck Next Time!");
        losses++;
        $("#losses").html("Losses" + "<br>" + losses);
        reset();
    }
})

$("#red").on("click", function() {
    yourTotal = yourTotal + gem3
    $("#yourNumber").html("Your Total" + "<br>" + yourTotal);
    console.log(yourTotal);

//If the player reaches target without going over then win++ and reset
    if (targetNumber === yourTotal) {
        alert("Congratulations! You Win!");
        wins++;
        $("#wins").html("Wins" + "<br>" + wins);
        reset();
    }
//Else if the player goes over target then losses++
    else if (yourTotal > targetNumber) {
        alert("Better Luck Next Time!");
        losses++;
        $("#losses").html("Losses" + "<br>" + losses);
        reset();
    }
})

$("#purple").on("click", function() {
    yourTotal = yourTotal + gem4
    $("#yourNumber").html("Your Total" + "<br>" + yourTotal);
    console.log(yourTotal);
//If the player reaches target without going over then win++ and reset
    if (targetNumber === yourTotal) {
        alert("Congratulations! You Win!");
        wins++;
        $("#wins").html("Wins" + "<br>" + wins);
        reset();
    }
//Else if the player goes over target then losses++
    else if (yourTotal > targetNumber) {
        alert("Better Luck Next Time!");
        losses++;
        $("#losses").html("Losses" + "<br>" + losses);
        reset();
    }
})

});