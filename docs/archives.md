---
hide:
  - toc
---

<style>
    /* ========== 全局 ========== */
    html, body {
        background-color: #e8e4db !important;
        margin: 0; padding: 0;
        font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif;
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
        background: transparent !important;
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

    /* ========== 报纸内容区 ========== */
    .md-content {
        max-width: 700px !important;
        margin: 2rem auto !important;
        background-color: #2c2820 !important;
        background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png') !important;
        padding: 2rem !important;
        box-shadow: 0 0 30px rgba(0,0,0,0.5) !important;
        border: 1px solid #5a5243 !important;
        border-radius: 8px !important;
        color: #e8e2d2 !important;
    }

    /* ========== 标题 ========== */
    h1 {
        color: #f5eed9 !important;
        border-bottom: 1px solid #5a5243;
        padding-bottom: 0.3em;
    }

    /* ========== 卡片堆叠容器 ========== */
    .archive-stack {
        position: relative;
        min-height: 650px;
        margin: 2rem 0;
    }

    /* ========== 叠层卡片 ========== */
    .stack-card {
        position: absolute;
        width: 100%;
        background: #3a3528;
        border: 1px solid rgba(255,255,255,0.15);
        border-radius: 6px;
        padding: 1.5rem;
        color: #e8e2d2;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), 
                    box-shadow 0.3s ease,
                    z-index 0s step-end;  /* z-index 变化无动画 */
        z-index: 1;
        cursor: pointer;
    }

    /* 悬停效果：自动上浮、置顶、露出标题 */
    .stack-card:hover {
        transform: translateY(-12px) !important;
        z-index: 20 !important;
        box-shadow: 0 10px 25px rgba(0,0,0,0.6);
    }

    /* 被推开的卡片（点击展开某张后，它上面的卡片向下滑） */
    .stack-card.shifted {
        transform: translateY(80px) scale(0.98);
        z-index: 0 !important;
    }

    /* 当前展开的卡片（点击后固定展开） */
    .stack-card.active {
        transform: translateY(0) scale(1);
        z-index: 10 !important;
        border-color: rgba(255,255,255,0.35);
    }

    /* 标签 */
    .tag {
        font-size: 0.75rem;
        padding: 0.2em 0.6em;
        border-radius: 4px;
        background: rgba(255,255,255,0.1);
        color: #c0b8a8;
    }

    /* 预览内容默认隐藏，active 时显示 */
    .preview-content {
        display: none;
        margin-top: 0.8em;
    }
    .stack-card.active .preview-content {
        display: block;
    }

    /* 按钮链接 */
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
</style>


# 往期刊载

<p style="color:#c0b8a8;">悬停卡片可预览标题，点击可查看详情；再次点击或点击其他卡片收起。</p>

<div class="archive-stack" id="cardStack">

    <!-- 排序1：心湖传说 -->
    <div class="stack-card" style="top: 0px;" onclick="toggleCard(this)">
        <span class="tag">封存编集</span>
        <h3 style="margin:0.3em 0;">《心湖传说》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">现代·中国</p>
        <div class="preview-content">
            <p>我有一个小秘密，小秘密，就不告诉你。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

    <!-- 排序2：大幕山 -->
    <div class="stack-card" style="top: 15px;" onclick="toggleCard(this)">
        <span class="tag">封存编集</span>
        <h3 style="margin:0.3em 0;">《大幕山》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">现代·中国</p>
        <div class="preview-content">
            <p>期末老师巧用连环计，大学生误入克苏鲁。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

    <!-- 排序3：虚境梦潮 -->
    <div class="stack-card" style="top: 30px;" onclick="toggleCard(this)">
        <span class="tag">特急编集</span>
        <h3 style="margin:0.3em 0;">《虚境梦潮》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">近代·美国</p>
        <div class="preview-content">
            <p>梦境与现实在潮水中模糊了边界。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

    <!-- 排序4：圣维塔利斯疗养院 -->
    <div class="stack-card" style="top: 45px;" onclick="toggleCard(this)">
        <span class="tag">特急编集</span>
        <h3 style="margin:0.3em 0;">《圣维塔利斯疗养院》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">近现代·瑞士</p>
        <div class="preview-content">
            <p>三个外国人相遇的起始。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

    <!-- 排序5：谢娘娘点化 -->
    <div class="stack-card" style="top: 60px;" onclick="toggleCard(this)">
        <span class="tag">资料归集</span>
        <h3 style="margin:0.3em 0;">《谢娘娘点化》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">现代·中国</p>
        <div class="preview-content">
            <p>南无观世音菩萨。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/home/" class="btn-link">← 返回档案室</a>
</p>


<script>
    let currentActive = null;

    function toggleCard(card) {
        if (card === currentActive) {
            // 收起当前展开的卡片
            card.classList.remove('active');
            currentActive = null;
            resetAllShifts();
            return;
        }

        // 收起之前的卡片
        if (currentActive) {
            currentActive.classList.remove('active');
        }

        // 展开新卡片
        card.classList.add('active');
        currentActive = card;
        applyShifts(card);
    }

    function applyShifts(activeCard) {
        const cards = document.querySelectorAll('.stack-card');
        let foundActive = false;

        cards.forEach(c => {
            if (c === activeCard) {
                foundActive = true;
                c.classList.remove('shifted');
            } else if (foundActive) {
                // 在 activeCard 之后的卡片（HTML 顺序在上面）向下推开
                c.classList.add('shifted');
            } else {
                c.classList.remove('shifted');
            }
        });
    }

    function resetAllShifts() {
        document.querySelectorAll('.stack-card').forEach(c => {
            c.classList.remove('shifted');
        });
    }
</script>
