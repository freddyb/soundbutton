function playLOL(){
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
  console.info(index);
  let audio = new Audio(sounds[index]);
  console.info("Button clicked");
  audio.play();
};
