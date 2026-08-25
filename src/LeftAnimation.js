const leftObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-l');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

const leftElements = document.querySelectorAll('.hidden-l');
leftElements.forEach((el) => leftObserver.observe(el));