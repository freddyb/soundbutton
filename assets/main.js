window.addEventListener('DOMContentLoaded', function() {
  console.info("DOM Content Loaded");
  let audio = new Audio("assets/lol.mp3");
  let btn = document.getElementById("button");
  btn.addEventListener("click", function() {
    console.info("Button clicked");
    audio.play();
  });
});
