var userClickedPattern = []
var gamePattern = []
var buttonColours = ["red","blue","green","yellow"];
var level = 0
var started = false;
//
// $(document).keypress(function() {
//     if(!started) {
//     level += 1;
//     $("#level-title").text("level "+ level);
//     nextSequence();
//     started = true;
//   }
// });
$(document).on("keypress", function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success')

    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    }
  else {
    $("h1").text("Press a key to restart");
    playSound('wrong')
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");}, 200);
      console.log("failed");

      startOver();
  }

}


function nextSequence() {
  userClickedPattern = []

  level ++ ;
  $('#level-title').text("Level "+ level);

  var randomNumber =  Math.floor((Math.random() * 4));
  var randomChosenColours = buttonColours[randomNumber];
  gamePattern.push(randomChosenColours);

  pathtoID = '#'+randomChosenColours;
  $(pathtoID).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColours);
}

function playSound(name) {
  pathtoAudio = "sounds/"+name.toString()+".mp3";
  var audio = new Audio(pathtoAudio);
  audio.play();
}

function animatePress(currentColour) {
  $("#"+ currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
