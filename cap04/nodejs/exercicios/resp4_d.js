const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()


    // converte dados de entrada
  const ladoA = Number(frm.inA.value)
  const ladoB = Number(frm.inB.value)
  const ladoC = Number(frm.inC.value)

  // cria as condições para exibir a resposta
  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    resp1.innerText = "Lados não podem formar um triângulo"
  } else {
    resp1.innerText = "Lados podem formar um triângulo"
    if (ladoA == ladoB && ladoA == ladoC) {
      resp2.innerText = "Tipo: Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      resp2.innerText = "Tipo: Isósceles"
    } else {
      resp2.innerText = "Tipo: Escaleno"
    }
  }
})