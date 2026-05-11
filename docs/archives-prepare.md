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
    background: rgba(90,82,70,0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
}

/* ========== 左侧边栏修复 ========== */
.md-sidebar--primary { background: transparent !important; }
.md-sidebar--primary .md-sidebar__inner {
    background: rgba(55,48,40,0.7) !important;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1.2rem;
    margin: 1rem 0.5rem;
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}
.md-sidebar__inner * { background-color: transparent !important; box-shadow: none !important; }
.md-nav__title { color: #f5eed9 !important; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.15); }
.md-nav__link { color: #d0c8b0 !important; background: transparent; }
.md-nav__link:hover { color: #f5eed9 !important; background: rgba(255,255,255,0.06); border-radius: 4px; }

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
.md-content__inner { background: transparent !important; box-shadow: none; border: none; padding: 0; }
h1 { color: #f5eed9 !important; border-bottom: 1px solid #5a5243; padding-bottom: 0.3em; }

/* ========== 卡片堆叠容器 ========== */
.archive-stack {
    display: flex;
    flex-direction: column;
    margin: 1.5rem 0;
}

/* ========== 单个卡片：重叠并增加高度 ========== */
.stack-card {
    background: #3a3528;
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 6px;
    padding: 0.8rem 1.5rem 1.5rem 1.5rem;
    color: #e8e2d2;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    margin-top: -80px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    position: relative;
    z-index: 1;
    min-height: 180px;
    cursor: pointer;                 /* 整个卡片都是手型 */
}
.stack-card:first-child {
    margin-top: 0;
}
.stack-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.5);
    z-index: 10;
}

/* ========== 隐藏的 checkbox ========== */
.card-toggle {
    display: none;
}

/* ========== 标题栏 ========== */
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    user-select: none;
    pointer-events: none;           /* 让点击穿透到 .stack-card，由 JS 捕捉 */
}

/* ========== 预览内容（默认隐藏） ========== */
.preview-content {
    display: none;
    color: #c0b8a8;
    font-size: 0.95rem;
    line-height: 1.5;
    margin-top: 0.8em;
    pointer-events: auto;           /* 恢复内部按钮的点击 */
}

.card-toggle:checked ~ .preview-content {
    display: block;
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
    position: relative;
    z-index: 2;                     /* 确保按钮在最上层，可被点击 */
}
.btn-link:hover { transform: translateY(-2px); }

/* 卡片内标题和地点 */
.stack-card h3 {
    margin: 0;
    font-size: 1.3rem;
    color: #f0e6d2;
    pointer-events: none;           /* 让点击穿透 */
}
.stack-card .meta {
    font-size: 0.85rem;
    color: #b0a090;
    margin: 0;
    text-align: right;
    pointer-events: none;
}
</style>

<h1>资料归集 · 待开启</h1>

<div class="archive-stack" id="stack">
    <!-- 谢娘娘点化 -->
    <div class="stack-card" onclick="toggleCard(this)">
        <input type="checkbox" id="card2" class="card-toggle">
        <div class="card-header">
            <h3>《谢娘娘点化》</h3>
            <p class="meta">现代·中国</p>
        </div>
        <div class="preview-content">
            <p>南无观世音菩萨。</p>
            <a href="/my-coc-wiki/home/" class="btn-link" onclick="event.stopPropagation()">→ 翻阅档案</a>
        </div>
    </div>
</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/categories/" class="btn-link">← 返回档案分类</a>
</p>

<script>
// 极简卡片展开/收起逻辑，点击整张卡片（除按钮外）切换
function toggleCard(card) {
    const checkbox = card.querySelector('.card-toggle');
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
    }
}
</script>
