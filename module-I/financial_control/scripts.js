let initialAmountMoney = parseFloat(prompt("Qual a quantidade inicial de dinheiro ?"))
let options = ""
do {
 options = prompt (`Você tem R$${initialAmountMoney}
                        Deseja adicionar,remover dinheiro ou sair?`)
 switch (options) {
  case "adicionar" :
    let amountOfMoneyToAdd = parseFloat(prompt("Qual quantidade deseja adicionar ?"))
    initialAmountMoney += amountOfMoneyToAdd
    break
  case "remover":
    let amountOfMoneyToRemove = parseFloat(prompt("Qual quantidade deseja remover ?"))
    initialAmountMoney -= amountOfMoneyToRemove
    break
  case "sair":
    alert(`Encerrando`)
    break
  default:
    alert("Por favor, selecione uma opção!")

 }
} while ( options !== "sair")

alert(`Sua quantidade de dinheiro ficou em R$${initialAmountMoney}`)