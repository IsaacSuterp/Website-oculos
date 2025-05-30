document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');

            // Opcional: Mudar o texto do botão ou ícone (ARIA)
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                menuToggle.innerHTML = '&times;'; // Ícone de fechar (X)
            } else {
                menuToggle.innerHTML = '☰'; // Ícone de hamburger
            }
        });
    }

    // Animações de Scroll com Intersection Observer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: parar de observar após a primeira vez para não re-animar
                    // observer.unobserve(entry.target);
                } else {
                    // Opcional: remover a classe se quiser que a animação ocorra toda vez que entra/sai
                    // Idealmente, não re-animar ao sair para cima para evitar piscar.
                    // Se quiser que a animação aconteça toda vez, pode ser útil remover a classe:
                    // entry.target.classList.remove('is-visible');
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '0px', // Sem margem adicional na viewport
            threshold: 0.1 // Pelo menos 10% do elemento deve estar visível para acionar
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});
