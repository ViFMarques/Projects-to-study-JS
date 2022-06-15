var calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc() {

    var nome = document.getElementById('nome').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && altura !== '') {

        var valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorImc < 18.5) {
            classificacao = 'abaixo do peso';
        } else if (valorImc <= 24.9) {
            classificacao = 'com o peso normal';
        } else if (valorImc <= 29.9) {
            classificacao = 'com Sobrepeso';
        } else if (valorImc <= 34.9) {
            classificacao = 'com Obsesidade grau 1'
        } else if (valorImc <= 39.9) {
            classificacao = 'com Obsesidade grau 2'
        } else if (valorImc >= 40) {
            classificacao = 'com Obsesidade Mórbida'
        }

         resultado.textContent = `${nome}, seu IMC é ${valorImc} e você está ${classificacao}.`;

        } else {
            resultado.textContent = 'Preencha todos os campos, por favor!';
        }    
 }