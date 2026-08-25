const projectImages = [
    "images/Projetos/card1.png",
    "images/Projetos/card2.png",
    "images/Projetos/card3.png",
    "images/Projetos/card4.jpeg",
    "images/Projetos/card5.png",
    "images/Projetos/card6.png",
    "images/Projetos/card7.jpeg",
    "images/Projetos/card8.png"
];

let currentProjectIndex = 0;
let projectInterval = null;

function setFeaturedProject(index) {
    currentProjectIndex = index;
    const featuredImg = document.getElementById('project-featured-img');
    const counter = document.getElementById('project-featured-counter');
    const cards = document.querySelectorAll('.projetos-grid .card');

    if (!featuredImg) return;

    // Transição suave (fade)
    featuredImg.style.opacity = '0.3';

    setTimeout(() => {
        featuredImg.src = projectImages[index];
        featuredImg.style.opacity = '1';
        if (counter) {
            counter.textContent = `0${index + 1} / 08`;
        }
    }, 200);

    // Destacar miniatura ativa na grade
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Reinicia a contagem de 5 segundos ao clicar manualmente
    resetProjectTimer();
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectImages.length;
    setFeaturedProject(currentProjectIndex);
}

function resetProjectTimer() {
    clearInterval(projectInterval);
    projectInterval = setInterval(nextProject, 5000);
}

// Inicia a troca automática quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    resetProjectTimer();
});