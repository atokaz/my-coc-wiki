var clickSound = new Audio('/my-coc-wiki/sounds/click.mp3');

function playClick(event) {
    let target = event.target.closest('a, .md-button, .md-nav__link');
    if (target) {
        clickSound.play().catch(e => console.log("音频播放失败", e));
    }
}

document.addEventListener('click', playClick);
