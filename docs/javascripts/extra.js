var clickSound = new Audio('/my-coc-wiki/sounds/click.mp3');
var audioEnabled = false;

function playClickSound() {
    if (audioEnabled) {
        clickSound.play().catch(function(e) {});
    }
}

function enableAudio() {
    if (!audioEnabled) {
        audioEnabled = true;
        clickSound.play().then(function() {
            clickSound.pause();
            clickSound.currentTime = 0;
        }).catch(function(e) {});
    }
}

document.addEventListener('click', function(event) {
    enableAudio();
    playClickSound();
});
