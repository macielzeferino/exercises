const name = prompt("Qual é o seu nome ?")
const yearOfBirth = parseFloat(prompt("Em qual ano você nasceu ?"))

window.alert(`${name}, você tem ${2023 - yearOfBirth} anos de idade`)

const numberOne = parseFloat(prompt("Agora digite um número real"))
const numberTwo = parseFloat(prompt("Agora digite um outro número real"))
window.alert(`O resultado da soma, subtração, multiplicação e divisão, desses números, são respectivamente :
              ${numberOne + numberTwo} ;
              ${numberOne - numberTwo} ; 
              ${numberOne * numberTwo} ;
              ${numberOne / numberTwo}`)
window.alert("Obrigado pela participação !")
