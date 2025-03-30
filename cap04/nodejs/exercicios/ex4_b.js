const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const permitida = Number(frm.inPermitida.value)
    const condutor = Number(frm.inCondutor.value)
    const multaLeve = permitida + (permitida * 0.20) 
    if(condutor <= permitida){
        resp.innerText = `Situação: Sem Multa`
        
    }else if(condutor <= multaLeve){
        resp.innerText = `Situação: Multa Leve`
        resp.style.color = "yellow"
        resp.style.backgroundColor = "black"
    }else{
        resp.innerText = `Situação: Multa Grave`
        resp.style.color = "red"
        resp.style.backgroundColor = "black"
    }
})
