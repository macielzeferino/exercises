const word = prompt("Qual palavra deseja verificar ?")
let invertedWord = ""

for(let index = word.length-1 ; index >= 0; index--) {
  invertedWord += word[index]
}

if( word === invertedWord) {
  alert("Essa palavra é um palindromo")
} else {
  alert("Essa palavra não é um palindromo")
}