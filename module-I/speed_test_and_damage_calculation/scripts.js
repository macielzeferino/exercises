const speedTwo = parseFloat(prompt("Qual é a velocidade do segundo veículo ?"))
const speedOne = parseFloat(prompt("Qual é a velocidade do primeiro veículo ?"))

if(speedOne > speedTwo){
  alert("O veículo um está mais rápido !")
} else if ( speedOne < speedTwo){
  alert("O veículo dois está mais rápido !")
} else if (speedOne == speedTwo) {
  alert("Os dois veículos estão com a mesma velocidade")
}

const nameCharacterOne = prompt("Qual o nome do personagem um ?")
const attackPower = parseFloat(prompt("Qual o poder de ataque desse personagem ?"))
const nameCharacterTwo = prompt("Qual o nome do personagem dois ?")
const quantityOfLife = parseFloat(prompt("Qual a quantidade de vida desse personagem ?"))
const defensePower = parseFloat(prompt("Qual o poder de defesa desse personagem ?"))
const shieldCharacterTwo = confirm("Ele possui escudo ?")

let damageCaused = 0 
if (attackPower > defensePower && shieldCharacterTwo == false) {
  damageCaused = attackPower - defensePower
} else if ( attackPower > defensePower && shieldCharacterTwo == true) {
  damageCaused = (attackPower - defensePower)/2
} else if (attackPower <= defensePower) {
  damageCaused = 0
}

window.alert(`O personagem um se chama, ${nameCharacterOne} e tem um poder de ataque de ${attackPower}
              o persongem dois se chama, ${nameCharacterTwo} e tem um poder de defesa de ${defensePower}
              a quantidade de dano sofrida foi de ${damageCaused} após esse ataque o personagem dois ficou com ${(damageCaused - quantityOfLife)*1} pontos de vida`)

