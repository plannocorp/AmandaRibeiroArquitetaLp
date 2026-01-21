const rightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-r');

            entry.target.classList.remove('hidden-r');
        }

        else {
            entry.target.classList.add('hidden-r');

            entry.target.classList.remove('show-r');
        }
    });
});

const rightElements = document.querySelectorAll('.hidden-r');

rightElements.forEach((el) => rightObserver.observe(el));
