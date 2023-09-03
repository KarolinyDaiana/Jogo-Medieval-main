const glossarioBotao = document.getElementById("ver-glossario");
const glossarioLista = document.getElementById("glossario");

glossarioBotao.addEventListener('click', function() {
    glossarioLista.style.display = 'block';
});

const esconder = document.getElementById("esconder");

esconder.addEventListener('click', function() {
    glossarioLista.style.display = 'none';
})