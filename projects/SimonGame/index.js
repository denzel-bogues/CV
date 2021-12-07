var level = 0;
var started = false;
var lost = false;
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];


function playSound(soundName) {
  var colorSound = new Audio("sounds/" + soundName + ".mp3");
  colorSound.play();
}

function animatePress(currentColor) {
  currentColor.addClass("pressed");
  setTimeout(function() {
    currentColor.removeClass("pressed");
  }, 100);

}
function startOver(){
  level = 0;
  gamePattern = [];
  lost = false;
  started = true;
  nextSequence();
}

function nextSequence() {
userClickedPattern = [];

  level++;
  $("#level-title").text("level " + level);


  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  playSound(randomChosenColor);

  $("#" + randomChosenColor).fadeOut().fadeIn();

}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length){
      setTimeout( function() {
        nextSequence();
      },1000);
    }

  } else {
    lost = true;

    var wrongAnsSound = new Audio("sounds/wrong.mp3");
    wrongAnsSound.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    $("#level-title").text("Game over. Press any key to restart!");

  }
}


$(".btn").click(function() {
  var userSelectedColor = $(this).attr("id");
  userClickedPattern.push(userSelectedColor);
  playSound(userSelectedColor);
  animatePress($(this));
checkAnswer(userClickedPattern.length - 1);


});

$(document).keypress(function() {
  if (!started) {
    $("#level-title").before("<h1 class='instruction-txt'>Remember The Pattern... </h1>");

    setTimeout(function(){
      $(".instruction-txt").fadeOut();
    },1000);

    $("#level-title").text("Level " + level);
    setTimeout(function(){
      nextSequence();
    },1500);

    started = true;
  }
  if(lost){
    startOver()
  }
});
