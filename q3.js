let resposta = document.getElementById('resposta')

function calcularRes(){

    let numUm = Number (document.getElementById('numUm').value)
    let numDois = Number (document.getElementById('numDois').value)
    let numTres = Number (document.getElementById('numTres').value)


    if((numUm % 3 == 0) && (numUm % 5 == 0)){
        resposta.innerHTML = "O " + numUm + " é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }else{
        resposta.innerHTML = "O " + numUm + " NÃO é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }

    if((numDois % 3 == 0) && (numDois % 5 == 0)){
        resposta.innerHTML += "O " + numDois + " é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }else{
        resposta.innerHTML += "O " + numDois + " NÃO é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }

    if((numTres % 3 == 0) && (numTres % 5 == 0)){
        resposta.innerHTML += "O " + numTres + " é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }else{
        resposta.innerHTML += "O " + numTres + " NÃO é divisível por 3 e 5 ao mesmo tempo " + "<br>" + "<br>"
    }
}