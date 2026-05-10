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

/* ========== 顶部导航栏：稍深的半透明毛玻璃 ========== */
.md-header {
    background-color: rgba(90, 82, 70, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
}
.md-header__topic,
.md-header__title {
    color: #f0e6d2 !important;
}

/* ========== 左侧边栏：卡片化，颜色介于背景和报纸之间 ========== */
.md-sidebar--primary {
    background-color: transparent !important;   /* 去除默认背景 */
    backdrop-filter: none !important;
}
/* 给边栏内的导航容器加卡片 */
.md-sidebar--primary .md-nav {
    background: rgba(60, 54, 44, 0.7);          /* 中深灰褐色，半透明 */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1rem;
    margin: 1rem 0.5rem;
}
.md-nav__link {
    color: #d0c8b0 !important;
}
.md-nav__link:hover {
    color: #f5eed9 !important;
    background: rgba(255,255,255,0.05);
    border-radius: 4px;
}

/* ========== 报纸核心内容区：最深色块 ========== */
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

/* ========== 折叠面板：去掉默认样式，自定义毛玻璃 ========== */
.case-details {
    margin: 1.5em 0;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    padding: 0;
    background: transparent;               /* 无背景 */
    backdrop-filter: none;
}
.case-details summary {
    list-style: none;                      /* 隐藏默认箭头 */
    cursor: pointer;
    color: #f0e6d2;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 0.8em 1rem;
    background: rgba(255,255,255,0.06);    /* 标题条浅色玻璃 */
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: background 0.2s;
}
.case-details summary:hover {
    background: rgba(255,255,255,0.1);
}
/* 自定义箭头 */
.case-details summary::before {
    content: "▶";
    display: inline-block;
    transition: transform 0.2s ease;
    font-size: 0.75rem;
    color: #c0b090;
}
.case-details[open] summary::before {
    transform: rotate(90deg);
}

/* 打开后的内容区域：半透明深色玻璃 */
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

/* ========== 按钮链接（毛玻璃） ========== */
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
}

/* 隐藏页脚 */
.md-footer {
    display: none !important;
}
</style>


# 苇下

<blockquote>
    <p>探微索隐，归寂于无；以记其源，以苇为名</p>
    <p>「魑魅魍魎を原初の闇に還し、森羅万象の彼方を葦の根元に記す」</p>
</blockquote>

## Ξ 主笔 Ξ

<div class="collage-card">
    <ul style="margin:0; padding-left:1.5em;">
        <li><strong>奥丽维娅</strong>：苇下记社现任“不可见的主笔”</li>
    </ul>
</div>

## ﹡ 事件记录·进行中

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
    <a href="./" class="btn-link"> 翻阅更多往期刊载</a>
</p>

## 驻社名录

- **被卷入者**：请稍后，名录建设中…
- <a href="/my-coc-wiki/roster/" class="btn-link" style="margin-top:0.8em;"> 查看完整名录</a>

*档案持续更新中。最后更新：2025-05-09*
