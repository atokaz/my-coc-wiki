.md-header, .md-tabs {
    background: #1a2c1e !important;  /* 深墨绿色，符合苇下记社氛围 */
    border-bottom: none;
}

.md-header-nav__button, .md-tabs__link {
    color: #e8e6df;
}

.md-search__form {
    background-color: rgba(255, 255, 255, 0.15);
}
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

document.querySelectorAll('.md-nav__link, .md-tabs__link').forEach(link => {
    link.addEventListener('click', function(e) {
        const main = document.querySelector('.md-main');
        if (main) {
            main.style.animation = 'none';
            main.offsetHeight; 
            main.style.animation = 'pageFade 0.3s ease-out';
        }
    });
});
