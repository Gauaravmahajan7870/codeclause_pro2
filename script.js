const playBtn = document.querySelector('.play-btn');
const progressBar = document.querySelector('.progress');

playBtn.addEventListener('click', togglePlay);

function togglePlay() {
    const audio = document.querySelector('audio');
    playBtn.classList.toggle('playing');
    if (playBtn.classList.contains('playing')) {
        playBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol
        audio.play();
        animateProgressBar(audio);
    } else {
        playBtn.innerHTML = '&#9658;'; // Play symbol
        audio.pause();
    }
}

function animateProgressBar(audio) {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + '%';
    if (!audio.paused && currentTime < duration) {
        requestAnimationFrame(() => animateProgressBar(audio));
    }
}
