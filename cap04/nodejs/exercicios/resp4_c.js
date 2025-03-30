const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const valorUm = 1.00
    const valorDois = 1.75
    const valorTres = 3.00
    let troco 
    const tempoUm = "30 min"
    const tempoDois = "60 min"
    const tempoTres = "120 min"

    if(valor >= valorUm && valor < valorDois){
        troco = valor - valorUm
        resp1.innerText = `Tempo: ${tempoUm}`
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }else if(valor >= valorDois && valor < valorTres){
        troco = valor - valorDois
        resp1.innerText = `Tempo: ${tempoDois}`
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }else if(valor >= valorTres){
        troco = valor - valorTres
        resp1.innerText = `Tempo: ${tempoTres}`
        resp2.innerText = `Troco R$: ${troco.toFixed(2)}`
    }else{
        resp1.innerText = `Valor insuficiente`
    }
})