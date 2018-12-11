$(document).ready()



var targetNumber;
var counter = 0;
var winner = 0;
var hasWon = false;
var hasLost = false;


targetNumber = Math.floor(Math.random() * 69) + 30;
console.log(targetNumber);

$("#number-to-guess").html('Guess This Number: ' + targetNumber);
$(".crystal-image1", ).on("click", function () {

  counter += 5;
  console.log(counter);
  $("#counterToGuess").text(counter);

  if (counter === targetNumber) {
    winner += 1;
    $("#gameWins").text(winner);
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }


});

$(".crystal-image2", ).on("click", function () {


  counter += 4;
  console.log(counter);
  $("#counterToGuess").text(counter);
  if (counter === targetNumber) {
    winner += 1;
    $("#gameWins").text(winner);
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

$(".crystal-image3", ).on("click", function () {


  counter += 6;
  console.log(counter);
  $("#counterToGuess").text(counter);
  if (counter === targetNumber) {
    winner += 1;
    $("#gameWins").text(winner);
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
$(".crystal-image4", ).on("click", function () {


  counter += 3;
  console.log(counter);
  $("#counterToGuess").text(counter);
  if (counter === targetNumber) {
    alert("You win!");
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});