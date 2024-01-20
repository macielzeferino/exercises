let valueInMeters = parseFloat(prompt("Digite um valor em metros para ser convertido"))
const acronymConversation = prompt(`Escolha a medida para qual deseja fazer a conversão :
                                    mm | cm | dm | dam | hm | km`)
let convertedValue = 0

switch(acronymConversation) {
  case "mm" :
    convertedValue = valueInMeters * 1000
  break
  case "cm" : 
   convertedValue = valueInMeters * 100
  break
  case "dm" : 
   convertedValue = valueInMeters * 10
  break
  case "dam" : 
   convertedValue = valueInMeters / 10
  break
  case "hm" :
    convertedValue = valueInMeters / 100
  break
  case "km" :
    convertedValue = valueInMeters / 1000
  break
  default :
  alert("Por favor, insira um valor válido")
}

alert(`o valor da conversão é ${convertedValue} ${acronymConversation}`)