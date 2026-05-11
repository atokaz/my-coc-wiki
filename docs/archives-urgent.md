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

/* ========== 卡片堆容器 ========== */
.archive-stack {
    position: relative;
    min-height: 400px;
    margin: 1.5rem 0;
}

/* ========== 每张卡片的包装容器（让卡片能够绝对定位） ========== */
.card-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1);
}

/* ========== 卡片基础样式 ========== */
.stack-card {
    background: #3a3528;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 1.5rem;
    color: #e8e2d2;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: box-shadow 0.3s;
}

/* 悬停效果 */
.card-wrapper:hover {
    z-index: 20 !important;
}
.card-wrapper:hover .stack-card {
    box-shadow: 0 10px 25px rgba(0,0,0,0.6);
}

/* ========== 折叠面板样式 ========== */
.card-wrapper details {
    height: 100%;
}
.card-wrapper details[open] > summary {
    margin-bottom: 0.8em;
}
.card-wrapper summary {
    list-style: none;
    cursor: pointer;
    outline: none;
}
.card-wrapper summary::-webkit-details-marker {
    display: none;
}

/* 预览内容 */
.preview-content {
    margin-top: 0.8em;
}

/* 标签 */
.tag {
    font-size: 0.75rem;
    padding: 0.2em 0.6em;
    border-radius: 4px;
    background: rgba(255,255,255,0.1);
    color: #c0b8a8;
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

/* ========== 滑动逻辑：当某张卡片被打开时，它下面的卡片向下移动 ========== */
/* 默认所有卡片都在原始位置，由 top 属性决定 */
/* 当某张卡片的 details 处于打开状态时，它后面的所有兄弟卡片都向下平移 */
.card-wrapper:has(details[open]) ~ .card-wrapper {
    transform: translateY(80px);
}
/* 如果后面还有卡片，再增加一点距离，形成阶梯 */
.card-wrapper:has(details[open]) ~ .card-wrapper ~ .card-wrapper {
    transform: translateY(110px);
}
/* 更多张卡片可以叠加 */
.card-wrapper:has(details[open]) ~ .card-wrapper ~ .card-wrapper ~ .card-wrapper {
    transform: translateY(140px);
}
</style>

<h1>特急编集 · 正在追踪</h1>

<div class="archive-stack">
    <!-- 卡片1：虚境梦潮 -->
    <div class="card-wrapper" style="top: 0; z-index: 1;">
        <div class="stack-card">
            <details>
                <summary>
                    <span class="tag">特急编集</span>
                    <h3 style="margin:0.3em 0;">《虚境梦潮》</h3>
                    <p style="color:#b0a090; font-size:0.85rem;">近代·美国</p>
                </summary>
                <div class="preview-content">
                    <p>梦境与现实在潮水中模糊了边界。</p>
                    <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
                </div>
            </details>
        </div>
    </div>

    <!-- 卡片2：圣维塔利斯疗养院 -->
    <div class="card-wrapper" style="top: 30px; z-index: 2;">
        <div class="stack-card">
            <details>
                <summary>
                    <span class="tag">特急编集</span>
                    <h3 style="margin:0.3em 0;">《圣维塔利斯疗养院》</h3>
                    <p style="color:#b0a090; font-size:0.85rem;">近现代·瑞士</p>
                </summary>
                <div class="preview-content">
                    <p>三个外国人相遇的起始。</p>
                    <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
                </div>
            </details>
        </div>
    </div>
</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/categories/" class="btn-link">← 返回档案分类</a>
</p>
