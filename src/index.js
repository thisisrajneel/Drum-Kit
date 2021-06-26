for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", () => {
    this.setAttribute('color', '#fff');
  });
}

// let sound = new Audio('sounds/kick-bass.mp3');
//     sound.play();