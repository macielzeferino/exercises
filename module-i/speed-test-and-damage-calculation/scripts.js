const speedOne = Number(prompt("Qual é a velocidade do primeiro veículo ?"))
const speedTwo = Number(prompt("Qual é a velocidade do segundo veículo ?"))

if(speedOne > speedTwo){
  alert("O veículo um está mais rápido !")
} else if ( speedOne < speedTwo){
  alert("O veículo dois está mais rápido !")
} else if (speedOne == speedTwo) {
  alert("Os dois veículos estão com a mesma velocidade")
}


