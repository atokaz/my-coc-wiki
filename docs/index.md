---
hide:
  - navigation
  - toc
---

<style>
/* ========== 苇下记社 · 雨夜欢迎页 ========== */
html, body {
    background-color: #0a0c0f !important;
    background-image: none !important;
    color: #d0cfc0 !important;
    font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif !important;
}

.md-main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
}

/* 放大并调深标题颜色，增加可读性 */
h1 {
    font-size: 3.5rem !important;
    color: #e8e2d2 !important;
    text-shadow: 0 0 30px rgba(180, 160, 120, 0.4);
    margin-bottom: 0.2em;
}

/* 副标题放大 */
.subtitle {
    font-size: 1.3rem;
    color: #b0a894 !important;
    font-style: italic;
    margin-top: 0;
}

/* 按钮改成毛玻璃卡片风格（和奥蒂莉亚卡片一致） */
.glass-btn {
    display: inline-block;
    background: rgba(255,255,255,0.1) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 8px !important;
    padding: 0.8em 2em !important;
    font-size: 1.3rem !important;
    color: #e8e2d2 !important;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.glass-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}

/* 顶部导航栏保持深色毛玻璃 */
.md-header {
    background-color: rgba(10, 12, 15, 0.7) !important;
    backdrop-filter: blur(12px) !important;
}
</style>

# 苇下记社

<p class="subtitle">—— 特殊案件记载与报道组织 ——</p>

<div class="welcome-button">
  <a href="./home/" class="md-button glass-btn">翻阅旧案</a>
</div>

<script>
  document.body.classList.add('landing');
</script>
