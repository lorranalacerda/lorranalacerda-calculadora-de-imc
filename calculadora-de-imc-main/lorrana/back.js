const resultado = document.querySelector('#resultado');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');

const calcIMC = () => {

    if (altura.value  !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classificacao = ''

        if (imc < 18.5){
            classificacao = 'abaixo do peso'
        }   else if (imc < 25) {
            classificacao = 'peso normal'    
        }   else if (imc < 30) {
            classificacao = 'acima do peso'
        }   else if (imc < 35) {
            classificacao = 'obesidade grau I'
        }   else if (imc < 41) {
            classificacao = 'obesidade grau II'
        }   else {
            classificacao = 'obesidade grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
    } else {
        resultado.innerHTML = "preencha os campos"
    }
}