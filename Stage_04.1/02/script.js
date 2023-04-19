/*
    Solicite 2 números, faça a soma deles
    e apresente o resultado final ao usuário
*/

let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o segundo número: "));

const sum = function(num01, num02){

    alert(`A soma dos números ${num01} e ${num02} é: ` + (num01 + num02));
    
}

sum(numberOne, numberTwo);





