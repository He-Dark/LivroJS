const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inMin.value)
    const tempo = Number(frm.inTempoUso.value)
    const pagar = Math.round(tempo / 15) * valor

    resp.innerText = `Valor a Pagar R$: ${pagar.toFixed(2)}`
    e.preventDefault()
})