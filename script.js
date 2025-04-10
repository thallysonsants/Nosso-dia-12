const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Mostra o primeiro slide inicialmente
showSlide(currentSlide);

setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos

// Contador de tempo juntos
const dataInicio = new Date('2023-06-12T00:00:00'); // Data de início do relacionamento: 12/06/2023
const contadorElement = document.getElementById('contador');

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora.getTime() - dataInicio.getTime();

    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    contadorElement.innerHTML = `
        <div class="contador-item">
            <span class="contador-numero">${anos.toString().padStart(2, '0')}</span>
            <span class="contador-label">anos</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${meses.toString().padStart(2, '0')}</span>
            <span class="contador-label">meses</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${dias.toString().padStart(2, '0')}</span>
            <span class="contador-label">dias</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${horas.toString().padStart(2, '0')}</span>
            <span class="contador-label">horas</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${minutos.toString().padStart(2, '0')}</span>
            <span class="contador-label">minutos</span>
        </div>
        <div class="contador-item">
            <span class="contador-numero">${segundos.toString().padStart(2, '0')}</span>
            <span class="contador-label">segundos</span>
        </div>
    `;
}

atualizarContador();
setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo

// Reprodutor de música
const player = document.getElementById('player');
const musicas = [
    './Musc/Pra sempre.mp3',
    './Musc/O que.mp3',
    './Music/Natiruts - Você É Linda (Acústico TV Natiruts).mp3'
    // Adicione mais músicas aqui
];
let musicaIndex = 0;

function carregarMusica(index) {
    player.src = musicas[index];
}

function proximaMusica() {
    musicaIndex = (musicaIndex + 1) % musicas.length;
    carregarMusica(musicaIndex);
    player.play();
}

function musicaAnterior() {
    musicaIndex = (musicaIndex - 1 + musicas.length) % musicas.length;
    carregarMusica(musicaIndex);
    player.play();
}

carregarMusica(musicaIndex); // Carrega a primeira música ao iniciar

// Adiciona um event listener para quando a música terminar
player.addEventListener('ended', proximaMusica);