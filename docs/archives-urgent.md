---
hide:
  - toc
---

<style>
/* ========== 全局 ========== */
html, body {
    background-color: #e8e4db !important;
    margin: 0; padding: 0;
    font-family: 'Noto Serif SC', serif;
    color: #3a3528;
}

/* ========== 顶部导航栏 ========== */
.md-header {
    background: rgba(90, 82, 70, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
}

/* ========== 左侧边栏修复 ========== */
.md-sidebar--primary {
    background: transparent !important;
}
.md-sidebar--primary .md-sidebar__inner {
    background: rgba(55, 48, 40, 0.7) !important;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    background: transparent;
}
.md-nav__link:hover {
    color: #f5eed9 !important;
    background: rgba(255,255,255,0.06);
    border-radius: 4px;
}

/* ========== 报纸内容区 ========== */
.md-content {
    max-width: 1000px !important;
    margin: 2rem auto !important;
    background-color: #2c2820 !important;
    background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png');
    padding: 2.5rem !important;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    border: 1px solid #5a5243;
    border-radius: 8px;
    color: #e8e2d2;
}
.md-content__inner {
    background: transparent !important;
    box-shadow: none;
    border: none;
    padding: 0;
}
h1 {
    color: #f5eed9 !important;
    border-bottom: 1px solid #5a5243;
    padding-bottom: 0.3em;
}

/* ========== 卡片列表（普通垂直排列，无绝对定位） ========== */
.archive-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 1.5rem 0;
}

/* ========== 每张卡片的包装 ========== */
.card-item {
    background: #3a3528;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: box-shadow 0.2s, transform 0.2s;
}
.card-item:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    transform: translateY(-2px);
}

/* ========== 彻底清除 details/summary 的默认样式 ========== */
.card-item details {
    background: transparent !important;
    border: none !important;
    outline: none !important;
}
.card-item summary {
    list-style: none !important;
    cursor: pointer;
    outline: none !important;
    background: transparent !important;
    border: none !important;
    /* 去掉默认的小三角（针对不同浏览器） */
}
.card-item summary::-webkit-details-marker {
    display: none !important;
}
.card-item summary::marker {
    display: none !important;
}

/* 打开时, 摘要与内容之间的间距 */
.card-item details[open] > summary {
    margin-bottom: 0.8em;
}

/* 预览内容 */
.preview-content {
    margin-top: 0.8em;
    color: #d0c8b0;
}

/* 按钮 */
.btn-link {
    display: inline-block;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    padding: 0.5em 1.2em;
    color: #e8e2d2 !important;
    text-decoration: none !important;
    margin-top: 0.6em;
    transition: transform 0.2s, box-shadow 0.2s;
}
.btn-link:hover {
    transform: translateY(-2px);
}

/* 标题样式 */
.card-item h3 {
    margin: 0.3em 0;
    color: #f0e6d2;
}
.card-item .meta {
    color: #b0a090;
    font-size: 0.85rem;
}
</style>

<h1>特急编集 · 正在追踪</h1>

<div class="archive-list">
    <!-- 卡片1：虚境梦潮 -->
    <div class="card-item">
        <details>
            <summary>
                <h3>《虚境梦潮》</h3>
                <p class="meta">近代·美国</p>
            </summary>
            <div class="preview-content">
                <p>梦境与现实在潮水中模糊了边界。</p>
                <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
            </div>
        </details>
    </div>

    <!-- 卡片2：圣维塔利斯疗养院 -->
    <div class="card-item">
        <details>
            <summary>
                <h3>《圣维塔利斯疗养院》</h3>
                <p class="meta">近现代·瑞士</p>
            </summary>
            <div class="preview-content">
                <p>三个外国人相遇的起始。</p>
                <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
            </div>
        </details>
    </div>
</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/categories/" class="btn-link">← 返回档案分类</a>
</p>
