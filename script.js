window.onload = function (){

const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        alt = altura / 100
        const valorIMC = (peso / (alt * alt)).toFixed(1)

        let classificacao = "";

        if (valorIMC < 18.5){
            classificacao='abaixo do peso'
        } else if (valorIMC < 25) {
            classificacao = 'com o peso ideal'
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade gray II'
        } else {
            classificacao = 'com obesidade grau III'
        }

        resultado.textContent = `${nome}, seu IMC é ${valorIMC}. Você está ${classificacao}.`

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc) 

}

