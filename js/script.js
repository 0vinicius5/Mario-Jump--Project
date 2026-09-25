const mario = document.querySelector('.mario');
const goomba = document.querySelector('.goomba');
const arvore = document.querySelector('.arvore');

const gameOverScreen = document.getElementById('gameOverScreen');
const restartBtn = document.getElementById('restartBtn');




const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

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

restartBtn.addEventListener('click', () => {
 window.location.reload(); });// Reinicia o jogo ao clicar 
 //no botão "Jogar Novamente"
 
document.addEventListener('keydown', jump);
document.addEventListener('pointerdown', jump);
document.addEventListener('touchstart', jump);