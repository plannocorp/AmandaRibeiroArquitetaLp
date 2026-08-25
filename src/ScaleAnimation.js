const scaleObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-s');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

const scaleElements = document.querySelectorAll('.hidden-s');
scaleElements.forEach((el) => scaleObserver.observe(el));