/*
lista de cadastro de alunos
percorrer a lista
percorrer do zero até o numero de alunos
se o numero for par, escreva par e o numero correspondente
se o numero for impar, escreva impar e o numero correspondente
se o numero for 0, escreva zero
*/

/*
= atribuição de valores
== comparar se dois valores são iguais (0 == "0") verdade
=== comparar se os dois valores são identicos (0 === "0") falso
if (valorA == valorB)*/



let numeroDeAlunos = 10;

let contador = 0

while(contador < numeroDeAlunos)
{
    if (contador == 0) {
        console.log("o numero atual zero")
    }
    else if (contador %2 == 0) {
        console.log ("o numero "+contador+" é par");
    }
    else {
        console.log (`o numero ${contador} é impar`)
    }
    contador++
}

   




for (let contador = 0; contador < numeroDeAlunos; contador++) {
   //console.log(contador)
    if (contador == 0) {
        console.log("o numero atual zero")
    }
    else if (contador %2 == 0) {
        console.log ("o numero "+contador+" é par");
    }
    else {
        console.log (`o numero ${contador} é impar`)
    }
}


/*
let nomeDeAlunos = ["Alexandre","Andre","Carla","Marcelo"];

  for (let nome of nomeDeAlunos) {
      console.log(nome)
      
  }
  */