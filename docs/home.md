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
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1.5rem 0;
    color: #e8e2d2;
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
<div class="archives-layout">

    <!-- 左侧面板：导航 + 目录 -->
    <div class="side-panel">
        <!-- 导航块（由浅） -->
        <div class="panel-block" style="background: rgba(255,255,255,0.08);">
            <strong> 档案分类</strong>
            <ul>
                <li><a href="/my-coc-wiki/"> 卷封</a></li>
                <li><a href="/my-coc-wiki/home/"> 档案室</a></li>
                <li><a href="/my-coc-wiki/roster/"> 驻社名录</a></li>
            </ul>
        </div>

        <!-- 目录块（由浅到深过渡，此处稍浅） -->
        <div class="panel-block" style="background: rgba(255,255,255,0.12);">
            <strong> 本文目录</strong>
            <!-- 手动维护目录，与你的文章标题同步 -->
            <ul>
                <li><a href="#苇下">苇下</a></li>
                <li><a href="#主笔">Ξ 主笔</a></li>
                <li><a href="#事件记录进行中">事件记录·进行中</a></li>
                <li><a href="#驻社名录">驻社名录</a></li>
            </ul>
        </div>
    </div>

    <!-- 中间报纸区域（最深色块） -->
    <div class="newspaper">

        <!-- 以下是你原来的 Markdown 内容，包裹在 newspaper 容器内 -->
        # 苇下

        > 探微索隐，归寂于无；以记其源，以苇为名
        > 「魑魅魍魎を原初の闇に還し、森羅万象の彼方を葦の根元に記す」

        ## Ξ 主笔 Ξ

        <div class="collage-card">
          <ul style="margin:0; padding-left:1.5em;">
            <li><strong>奥丽维娅</strong>：苇下记社现任“不可见的主笔”</li>
          </ul>
        </div>

        ## ﹡ 事件记录·进行中

        | 状态 | 事件代号 | 时间/地点 |
        | :---: | :--- | :--- |
        | **（封存文档）** | 《大幕山》 | 现代·中国 |
        | **（封存文档）** | 《心湖传说》 | 现代·中国 |
        | **（资料归集）** | 《谢娘娘点化》 | 现代·中国 |
        | **（特急编集）** | 《圣维塔利斯疗养院》 | 近现代·瑞士 |
        | **（特急编集）** | 《虚境梦潮》 | 近现代·美国 |

        [→ 翻阅更多往期刊载](./)

        ## 驻社名录

        - **被卷入者**：请稍后，名录建设中…
        - [查看完整名录 →](/my-coc-wiki/roster/)

        *档案持续更新中。最后更新：2025-05-09*
    </div>

</div>
