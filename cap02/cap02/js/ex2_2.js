const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) //Math.floor arredonda para baixo e retorna o valor inteiro.
    const minutos = duracao % 60 // % Obtém o resto da divisão.

    resp1.innerText = titulo // exibe as respostas
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`
    e.preventDefault() // evita o envio do formulário
})