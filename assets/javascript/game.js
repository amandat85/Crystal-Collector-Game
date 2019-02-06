$(document).ready(function() {

//Assign user stats variables
var yourTotal = 0
console.log(yourTotal)
var wins = 0
var losses = 0

$("#wins").text(wins);
$("#losses").text(losses);

//When the game starts a random target number will be generated for the player
//Generate random number for target
var targetNumber = Math.floor(Math.random() * (120-19+1)) + 19;
console.log(targetNumber);
//Assign target number to location
$("#target").text(targetNumber);

//A random number will be assigned to the gems
//when the gem is clicked the number for that gem will be added to the players progress score * 4

var gem1 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem1);


var gem2 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem2);

var gem3 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem3);

var gem4 = Math.floor(Math.random() *(12-1+1)) + 1;
console.log(gem4);


//If the player reaches target without going over then win++
//game reset
//Else if the player goes over the target
//losses++
//game resets 


});
console.log("ready");