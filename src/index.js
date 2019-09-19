import "./style/style.scss";
import "./audio/jingle.mp3";
import "./audio/violin.mp3";
import "./audio/tone.mp3";



const keys = document.querySelectorAll(".key");

const addSound = ev => {
    const sounds = document.querySelectorAll("audio");
  keys.forEach(key => {
    const code = parseInt(key.dataset.key);
    if (code === ev.keyCode) {
      key.classList.add("key__playing");
      const audio = document.querySelector(`audio[data-audio="${code}"]`);
      sounds.forEach(sound => {
          if(sound !== audio){
              sound.muted = true;
          }
          else{
              sound.muted = false
          }
      })
      audio.play();
      audio.currentTime = 0;
      key.addEventListener("transitionend", e => {
        key.classList.remove("key__playing");
      });
    }
  });
};

const check = () => {

};
window.addEventListener("keydown", addSound);
