$(document).ready(function () {



  var targetNumber;
  var counter = 0;
  var winner = 0;
  var hasWon = false;
  var hasLost = false;
  var counterone =5;
  var counterTwo =2;
  var counterThree =2;

  

  // function to run everytime the player wins or loses, it will recalculate your random number and reset your counter
  function startGame() {
    targetNumber = Math.floor(Math.random() * 69) + 30;
     console.log( "targetNumber ");
    //---Counter 1 and so forth 
    counterone = Math.floor(Math.random() * (20 -2));
    console.log(counterone);

    counterTwo = Math.floor(Math.random() * (20 -2));
    console.log(counterone);

    counterThree = Math.floor(Math.random() * (20 -2));
    console.log(counterone);




    console.log(targetNumber);
    $("#number-to-guess").html('Guess This Number: ' + targetNumber)
    counter = 0;
    $("#counterToGuess").text(counter);
  };

  targetNumber = Math.floor(Math.random() * 69) + 30;
  $("#number-to-guess").html('Guess This Number: ' + targetNumber)

  $(".crystal-image1", ).on("click", function () {
    counter += counterone;

    ////--define counter 
    console.log(counter);
    $("#counterToGuess").text(counter);
    if (counter === targetNumber) {
      //  winner++ to increment the variable everytime you win
      winner++ ;
      $("#gameWins").text(winner);
      // function here to reset the game after you win
      startGame();
    } else if (counter >= targetNumber) {
      alert("You lose!!");
      // restart your game after you lose
      startGame();
    }


  });

  $(".crystal-image2", ).on("click", function () {
    counter += counterTwo;
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
    counter += counterThree;
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
    counter += 2;
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