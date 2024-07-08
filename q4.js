let resposta = document.getElementById('resposta')

function calcularResp(){

    let numUm = Number (document.getElementById('numUm').value)
    let numDois = Number (document.getElementById('numDois').value)
    let numTres = Number (document.getElementById('numTres').value)

    let somaTotal = 0, somaPar = 0, somaImpar = 0

    if(numUm % 2 == 0){
        somaPar += numUm
        resposta.innerHTML = "O " + numUm + " é par" + "<br>" + "<br>"
    }else{
        somaImpar += numUm
        resposta.innerHTML = "O " + numUm + " é ímpar" + "<br>" + "<br>"    
    }

    if(numDois % 2 == 0){
        somaPar += numDois
        resposta.innerHTML += "O " + numDois + " é par" + "<br>" + "<br>"
    }else{
        somaImpar += numDois
        resposta.innerHTML += "O " + numDois + " é ímpar" + "<br>" + "<br>" 
    }

    if(numTres % 2 == 0){
        somaPar += numTres
        resposta.innerHTML += "O " + numTres + " é par" + "<br>" + "<br>"
    }else{
        somaImpar += numTres
        resposta.innerHTML += "O " + numTres + " é ímpar" + "<br>" + "<br>" 
    }

    somaTotal = numUm + numDois + numTres

    resposta.innerHTML += "A soma dos números pares é igual: " + somaPar + "<br>" + "<br>"
    resposta.innerHTML += "A soma dos números ímpares é igual: " + somaImpar + "<br>" + "<br>"
    resposta.innerHTML += "A soma total dos números é igual: " + somaTotal
}