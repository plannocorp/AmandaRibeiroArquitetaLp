const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-s');

            entry.target.classList.remove('hidden-s');
        }

        else {
            entry.target.classList.add('hidden-s');

            entry.target.classList.remove('show-s');
        }
    });
});

const scaleElements = document.querySelectorAll('.hidden-s');

scaleElements.forEach((el) => scaleObserver.observe(el));