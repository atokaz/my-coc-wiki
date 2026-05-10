// ========== 音效总开关（改为 true 即可恢复） ==========
const SOUND_ENABLED = false;

(function() {
    'use strict';

    let audioCtx = null;

    function getCtx() {
        if (!SOUND_ENABLED) return null;       // 全局关闭直接返回 null
        if (window.innerWidth <= 768) return null; // 手机端也关闭

        if (audioCtx) {
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(console.warn);
            }
            return audioCtx;
        }
        try {
            const AC = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AC();
            if (audioCtx.state === 'suspended') {
                audioCtx.resume().catch(console.warn);
            }
            return audioCtx;
        } catch (e) {
            console.warn('Web Audio API not available');
            return null;
        }
    }

    function playGlassTap() {
        if (!SOUND_ENABLED) return;             // 二次确认关闭
        const ctx = getCtx();
        if (!ctx) return;

        const now = ctx.currentTime;
        const dur = 0.06;

        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(3000, now);
        osc1.frequency.exponentialRampToValueAtTime(2200, now + dur);
        gain1.gain.setValueAtTime(0.35, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + dur);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(6000, now);
        osc2.frequency.exponentialRampToValueAtTime(4800, now + dur);
        gain2.gain.setValueAtTime(0.15, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + dur);

        const osc3 = ctx.createOscillator();
        const gain3 = ctx.createGain();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(10000, now);
        osc3.frequency.exponentialRampToValueAtTime(8000, now + dur * 0.8);
        gain3.gain.setValueAtTime(0.08, now);
        gain3.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.8);

        osc1.connect(gain1).connect(ctx.destination);
        osc2.connect(gain2).connect(ctx.destination);
        osc3.connect(gain3).connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc3.start(now);
        osc1.stop(now + dur);
        osc2.stop(now + dur);
        osc3.stop(now + dur);
    }

    // 全局事件委托
    document.addEventListener('click', function(e) {
        if (!SOUND_ENABLED) return;             // 全局关闭，不执行任何逻辑
        const target = e.target.closest('.btn-link, .collage-card, .case-details summary, .glass-btn');
        if (target) {
            playGlassTap();
        }
    });

    // 移动端首次触摸激活 AudioContext（但已被开关忽略）
    document.addEventListener('touchstart', function initAudio() {
        if (SOUND_ENABLED) getCtx();
        document.removeEventListener('touchstart', initAudio);
    }, { once: true });

})();
