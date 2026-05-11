---
hide:
  - toc
---

<style>
html, body { background-color: #e8e4db !important; margin:0;padding:0; font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif; color: #3a3528; }
.md-header { background: rgba(90,82,70,0.6) !important; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.1); }
.md-sidebar--primary { background: transparent !important; }
.md-sidebar--primary .md-sidebar__inner { background: rgba(55,48,40,0.7) !important; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); border-radius:12px; padding:1.2rem; margin:1rem 0.5rem; box-shadow:0 6px 20px rgba(0,0,0,0.4); }
.md-sidebar__inner * { background-color: transparent !important; box-shadow: none !important; }
.md-nav__title { color: #f5eed9 !important; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.15); }
.md-nav__link { color: #d0c8b0 !important; background: transparent; }
.md-nav__link:hover { color: #f5eed9 !important; background: rgba(255,255,255,0.06); border-radius:4px; }
.md-content { max-width: 900px !important; margin:2rem auto !important; background-color: #2c2820 !important; background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png'); padding: 2.5rem !important; box-shadow: 0 0 30px rgba(0,0,0,0.5); border: 1px solid #5a5243; border-radius:8px; color: #e8e2d2; }
.md-content__inner { background:transparent !important; box-shadow:none; border:none; padding:0 !important; }

/* 引导文字 */
.guide-text {
    color: #c0b8a8;
    font-size: 1.1rem;
    margin-bottom: 2em;
    font-style: italic;
}

/* 分类卡片列表 */
.category-list { display: flex; flex-direction: column; gap: 1.2rem; }

.category-card {
    display: flex; flex-direction: column;  /* 改为纵向排列，标题在上，描述在下 */
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 12px;
    padding: 1.8rem 2rem;
    color: #e8e2d2;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.category-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.5); background: rgba(255,255,255,0.12); }

.category-title {
    font-size: 1.5rem;            /* 缩小字号 */
    font-weight: bold;
    color: #f5eed9;
    margin-bottom: 0.3em;
}
.category-desc {
    font-size: 1rem;
    color: #b0a090;
}

.btn-link { display: inline-block; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border:1px solid rgba(255,255,255,0.2); border-radius:8px; padding:0.7em 1.6em; color:#e8e2d2 !important; text-decoration:none; box-shadow:0 4px 16px rgba(0,0,0,0.2); transition: transform 0.2s, box-shadow 0.2s; }
.btn-link:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.35); }
</style>

<div class="guide-text">你接下来要查阅的是……</div>

<div class="category-list">
    <!-- 1. 资料归集（准备中） -->
    <a href="/my-coc-wiki/archives-prepare/" class="category-card">
        <span class="category-title">资料归集</span>
        <span class="category-desc">收集那不可见的线索</span>
    </a>

    <!-- 2. 特急编集（进行中） -->
    <a href="/my-coc-wiki/archives-urgent/" class="category-card">
        <span class="category-title">特急编集</span>
        <span class="category-desc">寻找那不可见的真相</span>
    </a>

    <!-- 3. 封存编集（已完结） -->
    <a href="/my-coc-wiki/archives-sealed/" class="category-card">
        <span class="category-title">封存编集</span>
        <span class="category-desc">封存那不可见的往日</span>
    </a>
</div>

<p style="margin-top: 2.5em;">
    <a href="/my-coc-wiki/home/" class="btn-link">← 返回档案室</a>
</p>
