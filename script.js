body {// script.js

// Selecione todos os links do menu
const links = document.querySelectorAll('.menu a');

// Adicione um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de navegação

        // Obtenha o ID do elemento de destino
        const targetId = link.getAttribute('href').substring(1);

        // Encontre o elemento de destino
        const targetElement = document.getElementById(targetId);

        // Faça a rolagem suave até o elemento
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});