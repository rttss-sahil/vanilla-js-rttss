const play = document.querySelector(".fa-play");
const stop = document.querySelector(".fa-stop");
const fullScreen = document.querySelector(".fa-expand");
const video = document.querySelector(".video");



// Play/Pause Function + Event Listener
play.addEventListener("click", playPause = (e) => {
  if (e.target.classList.contains("fa-play")) {
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    video.play();
  } else {
    e.target.classList.remove("fa-pause");
    e.target.classList.add("fa-play");
    video.pause();
  }
});

// Stop Function + Event Listener
stop.addEventListener('click', (e) => {
    video.load();
    playPause();

})

progress.addEventListener('click', function(e) {
    var pos = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
    video.currentTime = pos * video.duration;
 });