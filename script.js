// script.js

// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os links do menu
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            
            // Verifica se o link é uma âncora (começa com #)
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                event.preventDefault(); // Previne o pulo brusco apenas se for link interno

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                // Faz a rolagem suave se o elemento existir na página
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // Se for link para outra página (ex: index2.html), ele funciona normalmente!
        });
    });
});
