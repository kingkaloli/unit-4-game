var targetNumber;
var counter = 0;

targetNumber = Math.floor(Math.random() * 69) + 30;
console.log(targetNumber);
$("#number-to-guess").html('Guess This Number: ' + targetNumber);



$(".crystal-image1", ).on("click", function () {



  counter += 5;
  console.log(counter);
  $("#counterToGuess").text(counter);
  if (counter === targetNumber) {
    alert("You win!");
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});
$(".crystal-image2", ).on("click", function () {


  counter += 1;
  console.log(counter);
  $("#counterToGuess").text(counter);
  if (counter === targetNumber) {
    alert("You win!");
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});

$(".crystal-image3", ).on("click", function () {


  counter += 5;
  console.log(counter);
  $("#counterToGuess").text(counter);

  if (counter === targetNumber) {
    alert("You win!");
  } else if (counter >= targetNumber) {
    alert("You lose!!");
  }

});