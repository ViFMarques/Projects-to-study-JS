var vermelho = document.getElementById('red');
var amarelo = document.getElementById('yellow');
var verde = document.getElementById('green');
var automatico = document.getElementById('automatic');
var imagem = document.getElementById('img');

vermelho.addEventListener('click', deixarvermelho);

function deixarvermelho() {
    imagem.src = "img/vermelho.png";

}
amarelo.addEventListener('click', deixaramarelo);

function deixaramarelo() {
    imagem.src = "img/amarelo.png";
}

verde.addEventListener('click', deixarverde);

function deixarverde() {
    imagem.src = "img/verde.png";
}

// Começa aqui a luta para fazer o botão automático funcionar: 

function sleep(ms) {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

async function botaoautomatico() {
    
    var i = 0;
    do {
        i += 1;
        deixarautomatico();
        await sleep(3000);
    } while (i < 10);
    imagem.src = "img/desligado.png";
}

async function deixarautomatico() {
    deixarvermelho();
    await sleep(1000);
    deixaramarelo();
    await sleep(1000);
    deixarverde();
    await sleep(1000);
}

automatico.addEventListener('click', botaoautomatico);


automatico.addEventListener('dbclick', tirarautomatico);

function tirarautomatico() {
    automatico1 == false
}