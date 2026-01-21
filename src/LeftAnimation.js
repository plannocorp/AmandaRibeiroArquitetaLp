const leftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-l');

            entry.target.classList.remove('hidden-l');
        }

        else {
            entry.target.classList.add('hidden-l');

            entry.target.classList.remove('show-l');
        }
    });
});

const leftElements = document.querySelectorAll('.hidden-l');

leftElements.forEach((el) => leftObserver.observe(el));