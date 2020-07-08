const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timeStamp = document.querySelector('#timestamp');

// Play & Pause 
function toggleVideoStatus () {
    if (video.paused) {
        video.play();
    }else {
        video.pause();
    }
}

// Update Play/pause Icons
var updatePlayIcon = () => {
    if (video.paused || video.ended) {
        play.firstElementChild.classList.remove('fa-pause');
        play.firstElementChild.classList.add('fa-play');
    } else {
        play.firstElementChild.classList.remove('fa-play');
        play.firstElementChild.classList.add('fa-pause');
    }
}

// Stop Video
var stopVideo = () => {
    video.load();
    updatePlayIcon();
}

// Update Progress & TimeStamp
var updateProgress = () => {
    progress.value = (video.currentTime / video.duration) * 100;
    // Minutes
    let mins = Math.floor( video.currentTime / 60 );
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // Seconds
    let secs = Math.floor( video.currentTime % 60 );
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    // timeStamp
    timeStamp.textContent = `${mins}:${secs}`;
}

// Set Video Progress
var setVideoProgress = () => {
    video.currentTime = + ( progress.value * video.duration ) / 100;
}


// Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);