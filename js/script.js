const mario = document.querySelector('.mario');
const goomba = document.querySelector('.goomba');
const arvore = document.querySelector('.arvore');

const gameOverScreen = document.getElementById('gameOverScreen');
const restartBtn = document.getElementById('restartBtn');

// Variáveis para controlar a velocidade do Goomba e da árvore
let goombaSpeed = 3.0;
let arvoreSpeed = 4;

// Função para acelerar o Goomba
function accelerateGoomba() {
if (goombaSpeed > 0.5) {
    goombaSpeed -= 0.08;

    goomba.style.animation = `none`;
    goomba.offsetHeight; // Força o reflow para reiniciar a animação
    goomba.style.animation = `goomba-animation ${goombaSpeed}s infinite linear`;
}
}

// Adiciona os eventos de iteração de animação para acelerar o Goomba e a árvore
goomba.addEventListener('animationiteration', accelerateGoomba);
arvore.addEventListener('animationiteration', accelerateArvore);

// Função para acelerar a árvore
function accelerateArvore() {
if (arvoreSpeed > 1.2) {
    arvoreSpeed -= 0.02;

    arvore.style.animation = `none`;
    arvore.offsetHeight; // Força o reflow para reiniciar a animação
    arvore.style.animation = `arvore-animation ${arvoreSpeed}s infinite linear`;
}
}


// Função para fazer o Mario pular

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

// Loop principal do jogo para verificar colisões e atualizar o estado do jogo
const loop = setInterval(() => {

    const goombaPosition = goomba.offsetLeft;
    const arvorePosition = arvore.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace( `px`,  ``);

  
    
    if (goombaPosition <= 105 && goombaPosition > 0 && marioPosition <75) {
                
        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        arvore.style.animation = 'none';
        arvore.style.left = `${arvorePosition}px`;
        
        mario.src = `./imagens/mariodead.gif`;
        mario.style.marginLeft = `10px`

        clearInterval(loop);

        gameOverScreen.style.display = 'flex'; // Exibe a tela de 
        // Game Over

        

    }


}, 10);


// Adiciona um evento de clique ao botão "Jogar Novamente" para reiniciar o jogo

restartBtn.addEventListener('click', () => {
 window.location.reload(); });// Reinicia o jogo ao clicar 
 //no botão "Jogar Novamente"
 
document.addEventListener('keydown', jump);
document.addEventListener('pointerdown', jump);
document.addEventListener('touchstart', jump);