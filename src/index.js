for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
  document.getElementsByClassName("drum")[i].addEventListener("click", () => {
    this.style.color = "white";
  });
}

// let sound = new Audio('sounds/kick-bass.mp3');
//     sound.play();