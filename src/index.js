// Click sound + animation

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
    animation(this.innerHTML);
  });
}

// Keypress sound + animation

document.addEventListener('keypress',function(event) {
  makeSound(event.key);
  animation(event.key);
});

const makeSound = (temp) => {
  switch (temp) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
  }
}

const animation = (currentkey) => {
  document.querySelector('.' + currentkey).classList.add("pressed");
  setTimeout(() => {
    document.querySelector('.' + currentkey).classList.remove("pressed");
  }, 100);
}