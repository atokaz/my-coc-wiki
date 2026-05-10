---
hide:
  - toc
---

<style>
/* ========== 全局：浅色档案盒背景 ========== */
html, body {
    background-color: #e8e4db !important;
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif;
    color: #3a3528;
}

/* ========== 顶部导航栏：半透明深色毛玻璃 ========== */
.md-header {
    background: rgba(90, 82, 70, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
    box-shadow: none !important;
}
.md-header *,
.md-header__inner,
.md-header__topic,
.md-header__title,
.md-header__button,
.md-tabs {
    background: transparent !important;
}
.md-header__topic,
.md-header__title {
    color: #f0e6d2 !important;
}

/* ========== 左侧边栏：加深，标题清晰，无泛白 ========== */
.md-sidebar--primary {
    background: transparent !important;
}
.md-sidebar--primary .md-sidebar__inner {
    background: rgba(55, 48, 40, 0.7) !important;   /* 比之前深 */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1.2rem;
    margin: 1rem 0.5rem;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}
/* 强制所有子元素背景透明，包括标题区域 */
.md-sidebar__inner *,
.md-nav__title,
.md-nav__title *,
.md-nav__container {
    background-color: transparent !important;
    background: transparent !important;
    box-shadow: none !important;
}
/* 确保侧边栏标题文字可见、颜色适当 */
.md-nav__title {
    color: #f5eed9 !important;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.3em 0;
    margin-bottom: 0.5em;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
/* 导航链接 */
.md-nav__link {
    color: #d0c8b0 !important;
    background: transparent !important;
}
.md-nav__link:hover {
    color: #f5eed9 !important;
    background: rgba(255,255,255,0.06);
    border-radius: 4px;
}

/* ========== 报纸核心内容区 ========== */
.md-content {
    max-width: 900px !important;
    margin: 2rem auto !important;
    background-color: #2c2820 !important;
    background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png') !important;
    padding: 2.5rem !important;
    box-shadow: 0 0 30px rgba(0,0,0,0.5) !important;
    border: 1px solid #5a5243 !important;
    border-radius: 8px !important;
    color: #e8e2d2 !important;
}
.md-content__inner {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
}

/* ========== 标题 ========== */
h1 {
    color: #f5eed9 !important;
    border-bottom: 1px solid #5a5243;
    padding-bottom: 0.3em;
}
h2 {
    color: #f0e6d2 !important;
    border-bottom: 1px solid #5a5243;
    padding-bottom: 0.3em;
    margin-top: 2em;
}

/* ========== 引用文字 ========== */
blockquote {
    color: #c0b090 !important;
    border-left: 3px solid #8b7a5e !important;
    padding-left: 1em;
    margin: 1em 0;
}
blockquote p {
    margin: 0.25em 0;
}
blockquote p + p {
    color: #a09078 !important;
}

/* ========== 毛玻璃卡片 ========== */
.collage-card {
    background: rgba(255,255,255,0.1) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 8px !important;
    padding: 1.5rem !important;
    margin: 1.5rem 0 !important;
    color: #e8e2d2 !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.collage-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}

/* ========== 折叠面板：圆角毛玻璃，无蓝边 ========== */
.case-details {
    margin: 1.5em 0;
    border: 1px solid rgba(255,255,255,0.15) !important;
    border-radius: 8px !important;
    background: transparent !important;
    outline: none !important;
}
.case-details summary {
    list-style: none;
    cursor: pointer;
    color: #f0e6d2;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.8em 1rem;
    background: rgba(255,255,255,0.06);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: background 0.2s;
    outline: none !important;
}
.case-details summary:hover {
    background: rgba(255,255,255,0.1);
}
.case-details summary::before {
    content: none;  /* 无箭头 */
}
.case-details .case-content {
    background: rgba(0,0,0,0.25);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 0 0 8px 8px;
    padding: 1rem;
    margin-top: 2px;
    color: #d0c8b0;
    line-height: 1.6;
}

/* ========== 按钮链接 ========== */
.btn-link {
    display: inline-block;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 0.7em 1.6em;
    color: #e8e2d2 !important;
    text-decoration: none !important;
    font-weight: normal;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
}
.btn-link:hover {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.35);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}

/* ========== 移动端适配 ========== */
@media (max-width: 768px) {
    .md-content {
        max-width: 100% !important;
        margin: 1rem !important;
        padding: 1.5rem !important;
    }
    .md-nav--primary {
        background: #1a1e26 !important;
    }
    .md-nav--primary .md-nav__title {
        background: #0a0c0f !important;
        color: #d0cfc0 !important;
        box-shadow: none !important;
    }
    .md-nav--primary .md-nav__item {
        background: transparent !important;
        border-top: 1px solid rgba(255,255,255,0.05) !important;
    }
    .md-nav--primary .md-nav__link {
        color: #c0b8a8 !important;
        background: transparent !important;
    }
}

/* 页脚隐藏 */
.md-footer {
    display: none !important;
}

/* ========== 头像图片 ========== */
.avatar-img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    object-fit: cover;
    background: transparent;
    transition: transform 0.2s ease;
}
.avatar-img:hover {
    transform: scale(1.05);
}
</style>


# 苇下

<blockquote>
    <p>探微索隐，归寂于无；以记其源，以苇为名</p>
    <p>「魑魅魍魎を原初の闇に還し、森羅万象の彼方を葦の根元に記す」</p>
</blockquote>

## 主笔

<div class="collage-card">
    <div style="display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap;">
        <img src="images/olivia.png" alt="奥丽维娅" class="avatar-img" style="width:100px; height:100px; border-radius:8px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(0,0,0,0.3); object-fit: cover; background: transparent;">
        <div>
            <strong>奥丽维娅</strong>：苇下记社现任“不可见的主笔”
        </div>
    </div>
</div>

## 事件记录·进行中

<details class="case-details">
    <summary><span>特急编集 · 当前追踪</span></summary>
    <div class="case-content">
        <ul style="margin:0; padding-left:1.5em;">
            <li><strong>《圣维塔利斯疗养院》</strong> — 近现代·瑞士</li>
            <li><strong>《虚境梦潮》</strong> — 近代·美国</li>
        </ul>
        <p style="margin-top:0.6em; font-style:italic; font-size:0.9em; color:#b0a090;">以上案件正在进行中，随时可能更新调查进展。</p>
    </div>
</details>

<p style="margin-top: 1.8em;">
    <a href="./" class="btn-link">翻阅更多往期刊载</a>
</p>

## 驻社名录

- **被卷入者**：请稍后，名录建设中…
- <a href="/my-coc-wiki/roster/" class="btn-link" style="margin-top:0.8em;">查看完整名录</a>

*档案持续更新中。最后更新：2025-05-09*
