/* ANIMAÇÃO DOS ICONES DE REDES E EMPRESAS (Fernando) V */

let icones = document.querySelectorAll('.redes li img, .empresas li img');

icones.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.transition = 'transform 0.3s ease';
    img.style.transform = 'scale(1.1)';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

document.querySelector('form'). addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Obrigado pela mensagem! Te responderemos em breve.')
});
