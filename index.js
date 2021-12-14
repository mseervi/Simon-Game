var allColor = ["red", "green", "blue", "yellow"];
var gamePattern = [];
var myPattern = [];
var level = 0;
var start = false;

$(document).keypress(function(){
  if (!start) {

      $("h1").text("Level " + level);
      nextSequence();

     start = true;
  }

});


$(".btn").click(function() {

    var clickedColor = this.id;
    myPattern.push(clickedColor);
    console.log(myPattern);

    $("." + clickedColor).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + clickedColor + ".mp3");
    audio.play();

     checkAnswer(myPattern.length-1);

});


function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === myPattern[currentLevel]) {
      if (myPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      //playSound("wrong");
      var audio = new Audio("sounds/wrong.mp3");
      audio.play();

      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}




function nextSequence() {

  myPattern= [];
  level++;
  $("h1").text("level "+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = allColor[randomNumber];

  gamePattern.push(randomColor);
  console.log(gamePattern);

  $("." + randomColor).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomColor + ".mp3");
  audio.play();


}

function startOver(){
  start = false;
  gamePattern=[];
  level =0;
}
