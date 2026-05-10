(function() {
    // 共享AudioContext实例
    let audioCtx = null;

    // 安全的初始化
    function ensureAudioCtx() {
        if (audioCtx) {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        }
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AC();
            // 某些移动端需要手动resume
            if (audioCtx.state === 'suspended') {
                audioCtx.resume();
            }
            return audioCtx;
        } catch (e) {
            console.warn('Web Audio API not supported');
            return null;
        }
    }

    // 播放晶莹玻璃音效
    function playCrispClick() {
        const ctx = ensureAudioCtx();
        if (!ctx) return;

        const now = ctx.currentTime;
        const duration = 0.08; // 极短，清脆

        // 第一个振荡器：高频正弦，模拟玻璃本体
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(2400, now);          // 高频
        osc1.frequency.exponentialRampToValueAtTime(1600, now + duration);
        gain1.gain.setValueAtTime(0.3, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + duration);

        // 第二个振荡器：更高频，少量，增加空气感
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(3600, now);
        osc2.frequency.exponentialRampToValueAtTime(2800, now + duration);
        gain2.gain.setValueAtTime(0.15, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + duration);

        // 连接
        osc1.connect(gain1).connect(ctx.destination);
        osc2.connect(gain2).connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + duration);
        osc2.stop(now + duration);
    }

    // 全局事件委托：监听所有包含玻璃样式的元素点击
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.btn-link, .collage-card, .case-details summary, .glass-btn');
        if (target) {
            playCrispClick();
        }
    });

    // 为防止移动端浏览器挂起，首次触摸时也初始化
    document.addEventListener('touchstart', function initAudio() {
        ensureAudioCtx();
        document.removeEventListener('touchstart', initAudio);
    }, { once: true });

})();
