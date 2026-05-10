---
hide:
  - toc
---

<style>
/* 全局、导航、侧边栏、报纸容器等复用已验证样式，宽度加宽至 900px */
html, body {
    background-color: #e8e4db !important;
    margin: 0; padding: 0;
    font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif;
    color: #3a3528;
}

.md-header {
    background: rgba(90, 82, 70, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
}

.md-sidebar--primary {
    background: transparent !important;
}
.md-sidebar--primary .md-sidebar__inner {
    background: rgba(55, 48, 40, 0.7) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1.2rem;
    margin: 1rem 0.5rem;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}
.md-sidebar__inner * {
    background-color: transparent !important;
    box-shadow: none !important;
}
.md-nav__title {
    color: #f5eed9 !important;
    font-weight: bold;
    border-bottom: 1px solid rgba(255,255,255,0.15);
}
.md-nav__link {
    color: #d0c8b0 !important;
    background: transparent !important;
}
.md-nav__link:hover {
    color: #f5eed9 !important;
    background: rgba(255,255,255,0.06);
    border-radius: 4px;
}

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

h1 {
    color: #f5eed9 !important;
    border-bottom: 1px solid #5a5243;
    padding-bottom: 0.3em;
    text-align: center;
}

/* 分类卡片网格 */
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.category-card {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 2rem 1.5rem;
    text-align: center;
    color: #e8e2d2;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0,0,0,0.5);
    background: rgba(255,255,255,0.12);
}

.category-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #f5eed9;
    margin-bottom: 0.5rem;
}

.category-desc {
    font-size: 0.95rem;
    color: #b0a090;
    line-height: 1.5;
}

.category-image {
    width: 100%;
    height: 120px;
    background: rgba(0,0,0,0.2);
    border-radius: 8px;
    margin-bottom: 1rem;
}

/* 按钮链接 */
.btn-link {
    display: inline-block;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 0.7em 1.6em;
    color: #e8e2d2 !important;
    text-decoration: none !important;
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    transition: transform 0.2s, box-shadow 0.2s;
}

.btn-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}
</style>


# 档案分类

<div class="category-grid">
    <!-- 特急编集（正在进行） -->
    <a href="/my-coc-wiki/archives-urgent/" class="category-card">
        <div class="category-image"></div>
        <div class="category-title">特急编集</div>
        <div class="category-desc">寻找那不可见的真相</div>
    </a>

    <!-- 封存编集（已完成） -->
    <a href="/my-coc-wiki/archives-sealed/" class="category-card">
        <div class="category-image"></div>
        <div class="category-title">封存编集</div>
        <div class="category-desc">封存那不可见的往日</div>
    </a>

    <!-- 资料归集（准备中） -->
    <a href="/my-coc-wiki/archives-prepare/" class="category-card">
        <div class="category-image"></div>
        <div class="category-title">资料归集</div>
        <div class="category-desc">收集那不可见的线索</div>
    </a>
</div>

<p style="margin-top: 2.5em; text-align: center;">
    <a href="/my-coc-wiki/home/" class="btn-link">← 返回档案室</a>
</p>
