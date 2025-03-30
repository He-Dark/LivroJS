const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`
    e.preventDefault() // Após clicar em submit esse parâmetro evita que as informações sejam recarregadas(zerando os campos preenchidos)
})