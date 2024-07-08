let resposta = document.getElementById('resposta')

function calcularValor(){

    let bola = Number (document.getElementById('bola').value)
    let tenis = Number (document.getElementById('tenis').value)
    let bermuda = Number (document.getElementById('bermuda').value)

    let vbola = bola * 31.59
    let vtenis = tenis * 89.99
    let vbermuda = bermuda * 59.49

    let vtotal = vbola + vtenis + vbermuda
    let vdesconto = (vtotal * 7/100) 
    let vfinal = (vtotal - vdesconto)

    if (vtotal < 250){
        resposta.innerHTML = "O valor total da sua compra é: R$" + vtotal.toFixed(2)
    } else if(vtotal > 250){
        resposta.innerHTML = "O valor total da sua compra é: R$" + vfinal.toFixed(2)
    }
}