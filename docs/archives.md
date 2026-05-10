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

/* ========== 顶部导航栏：毛玻璃 ========== */
.md-header {
    background: rgba(90, 82, 70, 0.6) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(0,0,0,0.1) !important;
    box-shadow: none !important;
}
.md-header *,
.md-header__topic,
.md-header__title {
    color: #f0e6d2 !important;
    background: transparent !important;
}

/* ========== 报纸内容区 ========== */
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

/* ========== Grid 档案卡片布局 ========== */
.archive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1.2rem;
    margin-top: 1.8em;
}

/* ========== 单个档案卡 ========== */
.archive-card {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 8px;
    padding: 1.2rem;
    color: #e8e2d2 !important;
    text-decoration: none !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s;
    display: flex;
    flex-direction: column;
    gap: 0.4em;
}
.archive-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.4);
    background: rgba(255,255,255,0.12);
}

/* 卡片内标签 */
.tag {
    display: inline-block;
    font-size: 0.75rem;
    padding: 0.2em 0.6em;
    border-radius: 4px;
    background: rgba(255,255,255,0.1);
    color: #d0c8b0;
    align-self: flex-start;
}
.tag-log { border-left: 3px solid #c0a060; }
.tag-log2 { border-left: 3px solid #a08060; }

/* 卡片内标题 */
.archive-card h3 {
    margin: 0;
    color: #f5eed9 !important;
    border-bottom: none;
    font-size: 1.1rem;
}

/* 卡片内摘要 */
.archive-card .meta {
    font-size: 0.85rem;
    color: #b0a090;
}
.archive-card .preview {
    font-size: 0.85rem;
    color: #c0b8a8;
    line-height: 1.4;
    flex-grow: 1;
}

/* ========== 按钮链接 ========== */
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
    background: rgba(255,255,255,0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}

/* ========== 移动端 ========== */
@media (max-width: 768px) {
    .md-content {
        margin: 1rem !important;
        padding: 1.5rem !important;
    }
}
</style>


# 往期刊载

<p style="color:#c0b8a8; margin-top:0;">所有已归档案件一览。</p>

<div class="archive-grid">

    <!-- 案件卡片模板，复制本块即可添加新案件 -->
    <a href="/my-coc-wiki/home/" class="archive-card">
        <span class="tag tag-log">特急编集</span>
        <h3>《圣维塔利斯疗养院》</h3>
        <p class="meta">近现代·瑞士</p>
        <p class="preview">三个外国人相遇的起始</p>
    </a>

    <a href="/my-coc-wiki/home/" class="archive-card">
        <span class="tag tag-log">特急编集</span>
        <h3>《虚境梦潮》</h3>
        <p class="meta">近代·美国</p>
        <p class="preview">梦境与现实在潮水中模糊了边界。</p>
    </a>

    <a href="/my-coc-wiki/home/" class="archive-card">
        <span class="tag tag-log2">封存文档</span>
        <h3>《大幕山》</h3>
        <p class="meta">现代·中国</p>
        <p class="preview">期末老师巧用连环计，大学生误入克苏鲁。</p>
    </a>

    <a href="/my-coc-wiki/home/" class="archive-card">
        <span class="tag tag-log2">封存文档</span>
        <h3>《心湖传说》</h3>
        <p class="meta">现代·中国</p>
        <p class="preview">我有一个小秘密，小秘密，就不告诉你</p>
    </a>

    <a href="/my-coc-wiki/home/" class="archive-card">
        <span class="tag tag-log2">资料归集</span>
        <h3>《谢娘娘点化》</h3>
        <p class="meta">现代·中国</p>
        <p class="preview">南无观世音菩萨</p>
    </a>

</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/home/" class="btn-link">← 返回档案室</a>
</p>
