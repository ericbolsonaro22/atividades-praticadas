let resposta = document.getElementById('resposta')

function calculaConversao(){

    let kgf = Number(document.getElementById('kgf').value)

    let psi = kgf * 14.2233

    resposta.innerHTML = "O valor convertido de kgf/cm2 para PSI é igual a: " + psi.toFixed(2)
}