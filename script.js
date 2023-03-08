
const button = document.getElementById('button')
const nome = document.getElementById('nome')
const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')

const getText = (imc) => {
    if(imc>40) return 'Você esta com obesidade grau III!'
    if(imc>35) return 'Você esta com obesidade grau II!'
    if(imc>30) return 'Você esta com obesidade grau I!'
    if(imc>25) return 'Você se encontra levemente acima do peso.'
    if(imc>18.5) return 'Você esta no peso ideal. Parabéns!'
    return 'Você esta abaixo do peso!'
}


const imcCalc = () => {
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1)
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`
}

button.addEventListener('click', imcCalc)























// const button = document.getElementById('button');
// const nome = document.getElementById('nome').value;
// const peso = document.getElementById('peso').value;
// const altura = +document.getElementById('altura').value;
// const resultado = document.getElementById('resultado');

// const getText = (imc) => {
//     if(imc > 40) return 'Obesidade grau III'
//     if(imc > 35) return 'Obesidade grau II'
//     if(imc > 30) return 'Obesidade grau I'
//     if(imc > 25) return 'Levemente acima do Peso'
//     if(imc > 18.5) return 'Peso Ideal'
//     return 'Abaixo do Peso'
// }

// const imcCalc = () => {
//     const valorImc = (peso / (altura * altura)).toFixed(1);
//     resultado.textContent = getText(valorImc);
// }

// button.addEventListener('click', imcCalc)