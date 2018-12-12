$(document).ready(function () {



  var targetNumber;
  var counter = 0;
  var winner = 0;
  var hasWon = false;
  var hasLost = false;

  // I added this function to run everytime the player wins or loses, it will recalculate your random number and reset your counter
  function startGame() {
    targetNumber = Math.floor(Math.random() * 69) + 30;

    //---Counter 1 and so forth 
    console.log(targetNumber);
    $("#number-to-guess").html('Guess This Number: ' + targetNumber)
    counter = 0;
    $("#counterToGuess").text(counter);
  };

  targetNumber = Math.floor(Math.random() * 69) + 30;
  $("#number-to-guess").html('Guess This Number: ' + targetNumber)
  $(".crystal-image1", ).on("click", function () {
    counter += 5;

    ////--define eeach counter 
    console.log(counter);
    $("#counterToGuess").text(counter);
    if (counter === targetNumber) {
      // I cahnged this to winner++ to increment the variable everytime you win
      winner++ ;
      $("#gameWins").text(winner);
      // I called this function here to reset the game after you win
      startGame();
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      // Samething here to restart your game after you lose
      startGame();
    }


  });

  $(".crystal-image2", ).on("click", function () {
    counter += 4;
    console.log(counter);
    $("#counterToGuess").text(counter);
    if (counter === targetNumber) {
      winner++ ;
      $("#gameWins").text(winner);
      startGame();
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      startGame();
    }

  });

  $(".crystal-image3", ).on("click", function () {
    counter += 6;
    console.log(counter);
    $("#counterToGuess").text(counter);
    if (counter === targetNumber) {
      winner++;
      $("#gameWins").text(winner);
      startGame();
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      startGame();
    }

  });
  $(".crystal-image4", ).on("click", function () {
    counter += 3;
    console.log(counter);
    $("#counterToGuess").text(counter);
    if (counter === targetNumber) {
      alert("You win!");
      winner++;
      $("#gameWins").text(winner);
      startGame();
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      startGame();
    }
  })
});