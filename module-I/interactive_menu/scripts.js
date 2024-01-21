let options = ""
do {
  options = prompt(`Selecione uma opção :
                    1-Primeira
                    2-Segunda 
                    3-Terceira
                    4-Encerrar`)
  switch(options) {
    case "1":
      alert("Escolheu a primeira opção")
      break
    case "2": 
      alert("Escolheu a segunda opção")
      break
    case "3":
      alert("Escolheu a terceira opção ")
      break
    case "4" :
      alert("Encerrando programa")
    break
    default : 
    alert("Por favor, selecione uma opção")
  }
} while (options !== "4")