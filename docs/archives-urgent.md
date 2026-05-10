---
hide:
  - toc
---

<style>
/* 与分类页相同的全局、导航、侧边栏样式（略，可复制同套） */
html, body { background-color: #e8e4db !important; margin:0;padding:0; font-family: 'Noto Serif SC', serif; color: #3a3528; }
.md-header { background: rgba(90,82,70,0.6) !important; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.1); }
.md-sidebar--primary { background: transparent !important; }
.md-sidebar--primary .md-sidebar__inner { background: rgba(55,48,40,0.7) !important; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.08); border-radius:12px; padding:1.2rem; margin:1rem 0.5rem; box-shadow:0 6px 20px rgba(0,0,0,0.4); }
.md-sidebar__inner * { background-color: transparent !important; box-shadow: none !important; }
.md-nav__title { color: #f5eed9 !important; font-weight:bold; border-bottom: 1px solid rgba(255,255,255,0.15); }
.md-nav__link { color: #d0c8b0 !important; background:transparent; }
.md-nav__link:hover { color: #f5eed9 !important; background: rgba(255,255,255,0.06); border-radius:4px; }
.md-content { max-width: 1000px !important; margin:2rem auto !important; background-color: #2c2820 !important; background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png'); padding: 2.5rem !important; box-shadow: 0 0 30px rgba(0,0,0,0.5); border: 1px solid #5a5243; border-radius:8px; color: #e8e2d2; }
.md-content__inner { background:transparent !important; box-shadow:none; border:none; padding:0; }
h1 { color: #f5eed9 !important; border-bottom:1px solid #5a5243; padding-bottom:0.3em; }

/* 卡片堆叠 */
.archive-stack { position: relative; min-height: 280px; margin: 1.5rem 0; }
.stack-card {
  position: absolute; width: 100%; background: #3a3528;
  border: 1px solid rgba(255,255,255,0.15); border-radius:6px; padding:1.5rem;
  color: #e8e2d2; box-shadow:0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.5s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.3s;
  z-index:1; cursor:pointer;
}
.stack-card:hover { transform: translateY(-12px) !important; z-index:20 !important; box-shadow:0 10px 25px rgba(0,0,0,0.6); }
/* 上方卡片向下滑动但保持遮盖 */
.stack-card.shifted {
  transform: translateY(60px) scale(0.98);
  z-index:0 !important;
}
.stack-card.active {
  transform: translateY(0) scale(1);
  z-index:10 !important;
  border-color: rgba(255,255,255,0.35);
}
.tag { font-size:0.75rem; padding:0.2em 0.6em; border-radius:4px; background:rgba(255,255,255,0.1); color:#c0b8a8; }
.preview-content { display:none; margin-top:0.8em; }
.stack-card.active .preview-content { display:block; }
.btn-link { display:inline-block; background:rgba(255,255,255,0.1); backdrop-filter:blur(10px); border:1px solid rgba(255,255,255,0.2); border-radius:8px; padding:0.5em 1.2em; color:#e8e2d2 !important; text-decoration:none; margin-top:0.6em; transition:transform 0.2s, box-shadow 0.2s; }
.btn-link:hover { transform:translateY(-2px); }
</style>

# 特急编集 · 正在追踪

<div class="archive-stack">
  <div class="stack-card" style="top: 0;" onclick="toggleCard(this)">
    <span class="tag">特急编集</span>
    <h3>《虚境梦潮》</h3>
    <p style="color:#b0a090;">近代·美国</p>
    <div class="preview-content">
      <p>梦境与现实在潮水中模糊了边界。</p>
      <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
    </div>
  </div>
  <div class="stack-card" style="top: 20px;" onclick="toggleCard(this)">
    <span class="tag">特急编集</span>
    <h3>《圣维塔利斯疗养院》</h3>
    <p style="color:#b0a090;">近现代·瑞士</p>
    <div class="preview-content">
      <p>三个外国人相遇的起始。</p>
      <a href="/my-coc-wiki/home/" class="btn-link">→ 翻阅档案</a>
    </div>
  </div>
</div>

<p style="margin-top:2em;">
  <a href="/my-coc-wiki/categories/" class="btn-link">← 返回档案分类</a>
</p>

<script>
let currentActive = null, currentStack = null;
function toggleCard(card) {
  const stack = card.closest('.archive-stack');
  if (!stack) return;
  if (card === currentActive) {
    card.classList.remove('active');
    currentActive = null; currentStack = null;
    resetStack(stack);
    return;
  }
  if (currentActive && currentStack) {
    currentActive.classList.remove('active');
    resetStack(currentStack);
  }
  card.classList.add('active');
  currentActive = card; currentStack = stack;
  applyShifts(stack, card);
}
function applyShifts(stack, activeCard) {
  const cards = Array.from(stack.querySelectorAll('.stack-card'));
  const activeIndex = cards.indexOf(activeCard);
  cards.forEach((card, index) => {
    card.classList.remove('shifted');
    if (index < activeIndex) card.classList.add('shifted');
  });
}
function resetStack(stack) {
  stack.querySelectorAll('.stack-card').forEach(card => card.classList.remove('shifted'));
}
</script>
