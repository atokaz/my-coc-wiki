---
hide:
  - navigation
  - toc
---

<style>
/* ========== 苇下记社 · 雨夜欢迎页 ========== */

/* 强制黑色背景，覆盖全局 */
html, body {
    background-color: #0a0c0f !important;
    background-image: none !important;
    color: #d0cfc0 !important;
    font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif !important;
}

/* 欢迎页专属：让内容垂直居中（如果需要） */
.md-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
}

/* 毛玻璃导航栏 */
.md-header {
    background-color: rgba(10, 12, 15, 0.7) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
    box-shadow: none !important;
}
.md-header__topic,
.md-header__title {
    color: #d0cfc0 !important;
}

/* 主标题更醒目 */
h1 {
    color: #e8e2d2 !important;
    text-shadow: 0 0 20px rgba(200, 180, 140, 0.3);
}

/* 副标题 */
.subtitle {
    color: #b0a894 !important;
    font-style: italic;
}

/* 玻璃按钮微调，适配深色背景（你的 .glass-btn 样式在 extra.css 中保留） */
.glass-btn {
    background: rgba(255, 255, 255, 0.08) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    color: #d0cfc0 !important;
}
.glass-btn:hover {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.4) !important;
}
</style>

# 苇下记社

<p class="subtitle">—— 特殊案件记载与报道组织 ——</p>

<div class="welcome-button">
  <a href="./home/" class="md-button glass-btn"> 翻阅旧案</a>
</div>

<script>
  document.body.classList.add('landing');
</script>
