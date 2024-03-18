const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const seekBar = document.getElementById('seekBar');
const audio = document.getElementById('audio');
const forward = document.getElementById('forward');
const backward = document.getElementById('backward');
const mute = document.getElementById('mute');


btnPlay.addEventListener("click", function() {
  audio.play();
  btnPause.style.display = "inline";
  btnPlay.style.display = "none";
});

btnPause.addEventListener("click", function() {
  audio.pause();
  btnPause.style.display = "none";
  btnPlay.style.display = "inline";
});

// update progress bar 
audio.addEventListener('timeupdate', updateSeekbar);

function updateSeekbar() {
  seekBar.max = audio.duration;
  seekBar.value = audio.currentTime;
}
// progress bar can now seek at anypoint when clicked

seekBar.onchange = () => {
  audio.play();
  audio.currentTime = seekBar.value;
};

forward.addEventListener("click", () => {
 audio.currentTime += 10;
 console.log(audio.currentTime);
});

backward.addEventListener("click", () => {
  audio.currentTime -= 10;
  console.log(audio.currentTime);
});

mute.addEventListener("click", function toggleMute() {
 let muteBtn = document.getElementById('muteBtn');
 if(audio.muted) {
 muteBtn.src = "volume-xmark-solid.svg";
 } else {
 muteBtn.src = "volume-high-solid.svg";
  
 }
 audio.muted = !audio.muted;
 console.log(muteBtn.src);
});
