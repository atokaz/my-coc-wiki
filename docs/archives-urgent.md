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

/* ========== 卡片堆叠容器 ========== */
.archive-stack {
    position: relative;
    min-height: 400px;
    margin: 1.5rem 0;
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
                box-shadow 0.3s ease;
    z-index: 1;
    cursor: pointer;
}

.stack-card:hover {
    transform: translateY(-12px) !important;
    z-index: 20 !important;
    box-shadow: 0 10px 25px rgba(0,0,0,0.6);
}

/* 被推开的卡片：向下滑动，仍保持部分遮盖 */
.stack-card.shifted {
    transform: translateY(60px) scale(0.98);
    z-index: 0 !important;
}

/* 当前展开的卡片 */
.stack-card.active {
    transform: translateY(0) scale(1);
    z-index: 10 !important;
    border-color: rgba(255,255,255,0.35);
}

/* 卡片内标签 */
.tag {
    font-size: 0.75rem;
    padding: 0.2em 0.6em;
    border-radius: 4px;
    background: rgba(255,255,255,0.1);
    color: #c0b8a8;
}

/* 卡片内预览内容 */
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


# 特急编集 · 正在追踪

<p style="color:#c0b8a8;">点击卡片预览案件详情，再次点击或点击其他卡片收起。</p>

<div class="archive-stack">
    <!-- 卡片1：虚境梦潮（底层卡片） -->
    <div class="stack-card" style="top: 0;" onclick="toggleCard(this)">
        <span class="tag">特急编集</span>
        <h3 style="margin:0.3em 0;">《虚境梦潮》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">近代·美国</p>
        <div class="preview-content">
            <p>梦境与现实在潮水中模糊了边界。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>

    <!-- 卡片2：圣维塔利斯疗养院（堆叠在第一张卡片上方） -->
    <div class="stack-card" style="top: 30px;" onclick="toggleCard(this)">
        <span class="tag">特急编集</span>
        <h3 style="margin:0.3em 0;">《圣维塔利斯疗养院》</h3>
        <p style="color:#b0a090; font-size:0.85rem;">近现代·瑞士</p>
        <div class="preview-content">
            <p>三个外国人相遇的起始。</p>
            <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
        </div>
    </div>
</div>

<p style="margin-top: 2em;">
    <a href="/my-coc-wiki/categories/" class="btn-link">← 返回档案分类</a>
</p>


<script>
let currentActive = null;
let currentStack = null;

function toggleCard(card) {
    const stack = card.closest('.archive-stack');
    if (!stack) return;

    // 再次点击已展开卡片 -> 收起
    if (card === currentActive) {
        card.classList.remove('active');
        card.querySelector('.preview-content').style.display = 'none';
        currentActive = null;
        currentStack = null;
        resetStack(stack);
        return;
    }

    // 如果有其他堆被打开，先重置它
    if (currentActive && currentStack && currentStack !== stack) {
        currentActive.classList.remove('active');
        currentActive.querySelector('.preview-content').style.display = 'none';
        resetStack(currentStack);
    }

    // 收起当前堆中的其他卡片
    if (currentActive && currentStack === stack) {
        currentActive.classList.remove('active');
        currentActive.querySelector('.preview-content').style.display = 'none';
    }

    // 展开新卡片
    card.classList.add('active');
    card.querySelector('.preview-content').style.display = 'block';
    currentActive = card;
    currentStack = stack;
    applyShifts(stack, card);
}

function applyShifts(stack, activeCard) {
    const cards = Array.from(stack.querySelectorAll('.stack-card'));
    const activeIndex = cards.indexOf(activeCard);

    cards.forEach((card, index) => {
        card.classList.remove('shifted');
        card.style.transform = '';
        card.style.zIndex = '';

        if (index < activeIndex) {
            // 上方的卡片向下滑
            card.classList.add('shifted');
        } else if (index > activeIndex) {
            // 下方的卡片向下滑更多
            card.style.transform = `translateY(${80 + (index - activeIndex) * 30}px) scale(0.98)`;
            card.style.zIndex = '0';
        }
    });
}

function resetStack(stack) {
    stack.querySelectorAll('.stack-card').forEach(card => {
        card.classList.remove('shifted');
        card.style.transform = '';
        card.style.zIndex = '';
    });
}
</script>
