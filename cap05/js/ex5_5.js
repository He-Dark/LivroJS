const frm = document.querySelector("form"); // obtém elementos da página
const resp1 = document.querySelector("#outResp1"); // Linkando a variavel resp1 com o ID outResp1 do HTML
const resp2 = document.querySelector("#outResp2");

let resposta = ""; // String com a resposta a ser exibida
let numContas = 0; // Inicializa contador...
let valTotal = 0; // e aculumador (variaveis globais)

frm.addEventListener("submit", (e) => {
  // "escuta" evento submit do form
  e.preventDefault(); // evita o envio do form

  const descricao = frm.inDescricao.value; // obtém dados da conta (no caso o valor do input com ID inDescricao)
  const valor = Number(frm.inValor.value); // Convertendo para número o valor do input com o ID inValor

  numContas++; // Adiciona valores ao contador e acumulador
  valTotal = valTotal + valor; // ou: valTotal += valor
  resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
  resp1.innerText = `${resposta}---------------------------------`;
  resp2.innerText = `${numContas} Contas(s) - Total R$: ${valTotal.toFixed(2)}`;

  frm.inDescricao.value = ""; // limpa campos do form
  frm.inValor.value = "";
  frm.inDescricao.focus(); // Posiciona no campo inDescricao do form
});
