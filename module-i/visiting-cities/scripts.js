const touristName = prompt("Qual seu nome turista ?")
let question = prompt(`Você visitou alguma cidade,
                       sim ou não ?`)

let citiesVisited = ""
let citiesCount = 0

if(question == "nao") {
  alert("Vejo que ainda não visitou nenhuma cidade, quando visitar venha compartilhar")
}
while (question === "sim") {
  let cityVisited = prompt("Qual o nome da cidade ?")
  citiesVisited += `\n${cityVisited}`
  citiesCount++
  question = prompt("Visitou mais alguma cidade ?")
}
alert(`Show !, ${touristName}, você visitou ${citiesCount}, nas quais foram
       ${citiesVisited}`)