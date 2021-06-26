for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.gquerySelectorAll(".drum")[i].addEventListener("click", () => {
    switch (this.innerHTML) {
      case "w":
        let sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;

      case "a":
        let sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;

      case "s":
        let sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;

      case "d":
        let sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;

      case "j":
        let sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;

      case "k":
        let sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;

      case "l":
        let sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
    }
  });
}