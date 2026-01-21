document.addEventListener('DOMContentLoaded', function() {
    // Elementos do modal
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    
    // Selecionar todos os cards de projeto
    const projectCards = document.querySelectorAll('#projetos .card img');
    let currentImageIndex = 0;
    const projectImages = Array.from(projectCards).map(img => img.src);
    
    // Função para abrir o modal com a imagem clicada
    function openModal(imgSrc, index) {
        modal.classList.add('show');
        modalImg.src = imgSrc;
        currentImageIndex = index;
        
        // Prevenir scroll da página quando o modal estiver aberto
        document.body.style.overflow = 'hidden';
        
        // Adicionar animação à imagem após um pequeno delay
        setTimeout(() => {
            modalImg.classList.add('show');
        }, 100);
    }
    
    // Função para fechar o modal
    function closeModal() {
        modalImg.classList.remove('show');
        
        // Delay para a animação de saída da imagem
        setTimeout(() => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Função para navegar para a próxima imagem
    function nextImage() {
        modalImg.classList.remove('show');
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % projectImages.length;
            modalImg.src = projectImages[currentImageIndex];
            
            setTimeout(() => {
                modalImg.classList.add('show');
            }, 100);
        }, 300);
    }
    
    // Função para navegar para a imagem anterior
    function prevImage() {
        modalImg.classList.remove('show');
        
        setTimeout(() => {
            currentImageIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
            modalImg.src = projectImages[currentImageIndex];
            
            setTimeout(() => {
                modalImg.classList.add('show');
            }, 100);
        }, 300);
    }
    
    // Adicionar evento de clique a cada card de projeto
    projectCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            openModal(this.src, index);
        });
        
        // Adicionar cursor pointer para indicar que é clicável
        card.style.cursor = 'pointer';
    });
    
    // Eventos para fechar o modal e navegar entre imagens
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    
    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Navegação com teclado
    document.addEventListener('keydown', function(e) {
        if (!modal.classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            prevImage();
        }
    });
    
    // Impedir que o zoom da imagem seja afetado por gestos de pinça em dispositivos móveis
    modalImg.addEventListener('touchmove', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
});