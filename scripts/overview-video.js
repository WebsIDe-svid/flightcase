function playVideo() {
    let videoElement = document.getElementById('video');
    let thumbnailElement = document.getElementById('thumbnail');
    let playButton = document.getElementById('play-icon');

    thumbnailElement.style.animation = 'hide-thumbnail 0.3s forwards';
    playButton.style.animation = 'hide-thumbnail 0.3s forwards';
    videoElement.style.visibility = 'visible';
}