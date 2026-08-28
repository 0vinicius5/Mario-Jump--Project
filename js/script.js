const mario = document.querySelector('.mario');
const goomba = document.querySelector('.goomba');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {

    const goombaPosition = goomba.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace( `px`,  ``);


    
    
    if (goombaPosition <= 105 && goombaPosition > 0 && marioPosition <75) {
                
        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        
        mario.src = `./imagens/mariodead.gif`;
        mario.style.marginLeft = `10px`

        clearInterval(loop);
    }


}, 10);

document.addEventListener('keydown', jump);
