const play = document.querySelector(".fa-play");
const pause = document.querySelector('.fa-pause');
const stop = document.querySelector("#stop");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");
const expand = document.querySelector("#expand");
const video = document.querySelector(".video");
const progress = document.querySelector("#progress");
const videoCurrent = document.querySelector(".video-current");
const videoDuration = document.querySelector(".video-duration");
const controlList = document.getElementById("controls").classList;
// SEt Timeout

// Visible Controls
let visible = () => {
  if (!controlList.contains("visible")) {
    controlList.add("visible");
  } else {
    controlList.remove("visible");
  }
  setTimeout(() => {
    if (controlList.contains("visible")) {
      controlList.remove("visible"); 
    }
  }, 1500);
};
// Toggle Video
let toggleVideo = (e) => {
  if (video.paused || video.ended) {
    video.play();
    play.className = "fa fa-pause";
  } else {
    video.pause();
    play.className = "fa fa-play";
  }
};
// Stop Video
let stopVideo = (e) => {
  video.load();
  play.className = "fa fa-play";
};
let updateVideo = () => {
  progress.value = video.currentTime;
  
}
play.addEventListener("click", toggleVideo);
// pause.addEventListener('click', toggleVideo);
stop.addEventListener("click", stopVideo);
video.addEventListener('dblclick', toggleVideo);
video.addEventListener("click", visible);
backward.addEventListener('click', () => {
  video.load();
  video.play();
});
expand.addEventListener('click', (e) => {
  video.requestFullscreen();
});
progress.addEventListener('change', updateVideo);