document.addEventListener('DOMContentLoaded', function () {
  // Este script serve para remover a classe "loaded" do body quando o JS estiver carregado.
  setTimeout(function () {
  document.body.classList.add('loaded');

  // Esconde o loader após o carregamento do JavaScript
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
  }, 5000);
});