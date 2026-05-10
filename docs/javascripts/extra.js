// 页面切换淡入动画（安全版）
(function() {
    'use strict';

    // 避免与其他脚本冲突，只绑定导航链接
    function addPageTransition() {
        const navLinks = document.querySelectorAll('.md-nav__link, .md-tabs__link');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                try {
                    const main = document.querySelector('.md-main');
                    if (main) {
                        main.style.animation = 'none';
                        main.offsetHeight; // 触发回流，重置动画
                        main.style.animation = 'pageFade 0.3s ease-out';
                    }
                } catch (err) {
                    // 静默失败，不影响页面功能
                }
            });
        });
    }

    // 页面加载完成后执行
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addPageTransition);
    } else {
        addPageTransition();
    }
})();
