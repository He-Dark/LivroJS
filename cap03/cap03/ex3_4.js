const prompt = require("prompt-sync")()
const pesoRacao = Number(prompt("Peso da Ração (kg): "))
const consumo = Number(prompt("Consumo Diário (gr): "))
const gramas = pesoRacao * 1000
const duracao = Math.floor(gramas / consumo)
const sobra = gramas % consumo

console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra}gr`)