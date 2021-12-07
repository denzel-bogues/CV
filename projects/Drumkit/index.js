var drumBtns = document.querySelectorAll(".drum");
var drumSounds = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3', 'tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3'];

function playDrumSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio('sounds/' + drumSounds[0]);
      crash.play();
      break;
    case "a":
      var kickbass = new Audio('sounds/' + drumSounds[1]);
      kickbass.play();
      break;
    case "s":
      var snare = new Audio('sounds/' + drumSounds[2]);
      snare.play();
      break;

    case "d":
      var tom1 = new Audio('sounds/' + drumSounds[3]);
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio('sounds/' + drumSounds[4]);
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio('sounds/' + drumSounds[5]);
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio('sounds/' + drumSounds[6]);
      tom4.play();
      break;
  }
  if(key == "w" || key == "a" || key == "s" || key == "d" || key == "j" || key == "k" || key == "l"){
    buttonAnimation(key);
  }
}

function buttonAnimation(buttonKey){
  var activeButton = document.querySelector("." + buttonKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

}


for (var i = 0; i < drumBtns.length; i++) {
  drumBtns[i].addEventListener('click', function() {
    var innerHtml = this.innerHTML;
    playDrumSound(innerHtml);
  });
}

document.addEventListener('keydown', function(event) {
  playDrumSound(event.key);
});
