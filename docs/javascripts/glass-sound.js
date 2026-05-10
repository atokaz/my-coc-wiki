// 玻璃音效合成器
(function() {
    // 共享一个 AudioContext，避免重复创建
    let audioCtx = null;

    // 初始化 AudioContext（必须在用户交互后）
    function initAudio() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        // 某些浏览器需要 resume
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
    }

    // 播放一次玻璃敲击音
    function playGlassClick() {
        if (!audioCtx) return;
        const now = audioCtx.currentTime;

        // 创建振荡器（主音）
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2000, now);          // 高频清脆
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1); // 轻微下滑，更自然

        // 音量快速衰减，模拟玻璃轻叩
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.15);
    }

    // 等待页面加载完成，并确保首次交互后初始化
    window.addEventListener('DOMContentLoaded', () => {
        // 监听整个文档的第一次点击，初始化 AudioContext
        document.addEventListener('click', function initOnce() {
            initAudio();
        }, { once: true });

        // 给目标元素绑定音效
        const targets = document.querySelectorAll('.btn-link, .collage-card, .case-details summary');
        targets.forEach(el => {
            el.addEventListener('click', function(e) {
                initAudio();            // 确保已初始化
                playGlassClick();
            });
        });
    });
})();
