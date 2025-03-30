const prompt = require("prompt-sync")()
const salario = Number(prompt("Digite o seu salário em R$: "))
const tempo = Number(prompt("Digite quantos anos trabalha na empresa: "))
const quadrienio = Math.floor(tempo / 4)
const acrescimo = salario * quadrienio / 100
console.log(`Quadriênios que tem direito: ${quadrienio}`)
console.log(`Salário final R$: ${(salario+acrescimo).toFixed(2)}`)