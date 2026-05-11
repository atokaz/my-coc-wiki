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
        card.style.transform = '';
        card.style.zIndex = '';
        if (index < activeIndex) {
            card.classList.add('shifted');
        } else if (index > activeIndex) {
            card.style.transform = `translateY(${80 + (index - activeIndex) * 20}px) scale(0.98)`;
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
