let resposta = document.getElementById('resposta')

function calcularMedia(){

    let numUm = Number (document.getElementById('numUm').value)
    let numDois = Number (document.getElementById('numDois').value)
    let numTres = Number (document.getElementById('numTres').value)

    let resultado = (numUm + numDois + numTres) / 3

    resposta.innerHTML = "A média aritmética dos 3 números digitados é igual a: " + resultado.toFixed(2)

}