---
hide:
  - navigation   # 隐藏主题默认侧边栏
  - toc          # 隐藏主题默认右侧目录
---

<style>
/* ========== 全局：黑色雨夜背景 ========== */
html, body {
    background-color: #0a0c0f !important;
    margin: 0;
    padding: 0;
    font-family: 'Noto Serif SC', 'Georgia', 'Times New Roman', serif;
    color: #d0cfc0;
}

/* ========== 顶部导航栏：毛玻璃 ========== */
.md-header {
    background-color: rgba(10, 12, 15, 0.7) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid rgba(255,255,255,0.05) !important;
}

/* ========== 主布局：三栏柔性盒子 ========== */
.archives-layout {
    display: flex;
    max-width: 1300px;
    margin: 2rem auto;
    padding: 0 1rem;
    min-height: 80vh;
}

/* ===== 左侧面板（导航 + 目录） ===== */
.side-panel {
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-right: 2rem;
}

/* 由浅到深的色块：左面板背景最浅，中间次之，右侧最深（这里用半透明控制） */
.panel-block {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 12px;
    padding: 1.2rem;
    color: #c0b8a8;
}

/* 导航列表样式 */
.panel-block ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.panel-block li {
    margin-bottom: 0.5rem;
}
.panel-block a {
    color: #c0b8a8;
    text-decoration: none;
    transition: color 0.2s;
}
.panel-block a:hover {
    color: #e8e2d2;
    text-decoration: underline;
}

/* ===== 中间报纸区域（核心） ===== */
.newspaper {
    flex: 1;
    /* 稍微深一点的色块，形成渐变 */
    background-color: #2c2820;
    background-image: url('https://www.transparenttextures.com/patterns/crepe-paper.png');
    padding: 2.5rem;
    box-shadow: 0 0 40px rgba(0,0,0,0.8);
    border: 1px solid #5a5243;
    border-radius: 8px;
    color: #e8e2d2;
}

/* 报纸内层确保不重复背景 */
.newspaper .md-content,
.newspaper .md-typeset {
    background: transparent !important;
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
}

/* 报纸中的标题颜色 */
.newspaper h1, .newspaper h2, .newspaper h3 {
    color: #f0e6d2;
    border-bottom: 1px solid #5a5243;
}

/* 表格融入深色报纸 */
.newspaper table {
    background: transparent !important;
    box-shadow: none !important;
}
.newspaper th {
    background: rgba(255,255,255,0.06) !important;
    border-bottom: 2px solid #8b7a5e !important;
    color: #e8e2d2 !important;
}
.newspaper td {
    background: transparent !important;
    border-bottom: 1px solid #4a4437 !important;
    color: #e8e2d2 !important;
}

/* 拼贴卡片毛玻璃 */
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

/* 手机端：堆叠布局 */
@media (max-width: 768px) {
    .archives-layout {
        flex-direction: column;
    }
    .side-panel {
        width: 100%;
        margin-right: 0;
        margin-bottom: 1.5rem;
    }
    .newspaper {
        padding: 1.5rem;
    }
}

/* 页脚隐藏 */
.md-footer {
    display: none;
}
</style>

<!-- ==================== 自定义布局开始 ==================== -->
<div class="newspaper">

    <h1>苇下</h1>

<blockquote>
    <p>探微索隐，归寂于无；以记其源，以苇为名</p>
    <p>「魑魅魍魎を原初の闇に還し、森羅万象の彼方を葦の根元に記す」</p>
</blockquote>

    <h2>主笔</h2>

    <div class="collage-card">
        <ul style="margin:0; padding-left:1.5em;">
            <li><strong>奥丽维娅</strong>：苇下记社现任“不可见的主笔”</li>
        </ul>
    </div>

    <h2>﹡ 事件记录·进行中</h2>

    <table>
        <thead>
            <tr>
                <th style="text-align: center;">状态</th>
                <th style="text-align: center;">事件代号</th>
                <th style="text-align: center;">时间/地点</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>（封存文档）</strong></td>
                <td>《大幕山》</td>
                <td>现代·中国</td>
            </tr>
            <tr>
                <td><strong>（封存文档）</strong></td>
                <td>《心湖传说》</td>
                <td>现代·中国</td>
            </tr>
            <tr>
                <td><strong>（资料归集）</strong></td>
                <td>《谢娘娘点化》</td>
                <td>现代·中国</td>
            </tr>
            <tr>
                <td><strong>（特急编集）</strong></td>
                <td>《圣维塔利斯疗养院》</td>
                <td>近现代·瑞士</td>
            </tr>
            <tr>
                <td><strong>（特急编集）</strong></td>
                <td>《虚境梦潮》</td>
                <td>近代·美国</td>
            </tr>
        </tbody>
    </table>

    <p><a href="./">→ 翻阅更多往期刊载</a></p>

    <h2>驻社名录</h2>

    <ul>
        <li><strong>被卷入者</strong>：请稍后，名录建设中…</li>
        <li><a href="/my-coc-wiki/roster/">查看完整名录 →</a></li>
    </ul>

    <p><em>档案持续更新中。最后更新：2025-05-09</em></p>

</div>
