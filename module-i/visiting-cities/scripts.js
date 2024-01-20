const touristName = prompt("Qual seu nome turista ?")
let question = prompt(`Você visitou alguma cidade,
                       sim ou não ?`)

let citiesVisited = ""
let citiesCount = 0

if(question == "nao") {
  alert("Vejo que ainda não visitou nenhuma cidade, quando visitar venha compartilhar")
}
while (question === "sim") {
  citiesVisited = prompt("Qual o nome da cidade ?")
  citiesCount++
  question = prompt("Visitou mais alguma cidade ?")
  alert(`Show !, ${touristName}`)
}