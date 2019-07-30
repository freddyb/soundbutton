window.addEventListener('DOMContentLoaded', function() {
  let btn = document.getElementById("button");
  btn.addEventListener("click", function() {
    var sounds = ["assets/lol.mp3",
                 "assets/lol1.mp3",
                 "assets/lol2.mp3",
                 "assets/lol3.mp3",
                 "assets/lol4.mp3",
                 "assets/lol5.mp3",
                 "assets/lol6.mp3",
                 "assets/lol7.mp3",
                 "assets/lol8.mp3"];
    var index = Math.floor(Math.random() * (sounds.length));
    let audio = new Audio(sounds[index]);
    audio.play();
  });
});
