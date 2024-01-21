const number = parseFloat(prompt("Qual número deseja calcular a tabuada ?"))
let tableResult = ""

for(index = 1 ; index <= 20 ; index++) {
  tableResult += `\n -${number * index}`
}

alert(`${tableResult}`)