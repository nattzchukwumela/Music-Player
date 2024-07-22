const btnPlay = document.getElementById('play') as HTMLButtonElement;
const btnPause = document.getElementById('pause') as HTMLButtonElement;
const seekBar = document.getElementById('seekBar') as HTMLInputElement;
const audio = document.getElementById('audio') as HTMLAudioElement;
const forward = document.getElementById('forward') as HTMLButtonElement;
const backward = document.getElementById('backward') as HTMLButtonElement;
const mute = document.getElementById('mute') as HTMLButtonElement;


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
	seekBar.max = audio.duration.toString();
  seekBar.value = audio.currentTime.toString();
}
// progress bar can now seek at anypoint when clicked

seekBar.onchange = () => {
  audio.play();
  audio.currentTime = parseFloat(seekBar.value);
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
 let muteBtn = document.getElementById('muteBtn') as HTMLImageElement;
 if(audio.muted) {
 muteBtn.src = "volume-xmark-solid.svg";
 } else {
 muteBtn.src = "volume-high-solid.svg";
  
 }
 audio.muted = !audio.muted;
 console.log(muteBtn.src);
});
