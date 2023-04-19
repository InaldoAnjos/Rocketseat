/* 
    Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

*/

let numberOne = Number(prompt(`Digite o primeiro número: `));
let numberTwo = Number(prompt(`Digite o segundo número: `));

const checkEven = (number) => {
    return (number % 2 === 0 ? `O número ${number} é par!` : `O número ${number} é ímpar!`);
}

const areSame = (numberOne, numberTwo) => {
    return (numberOne === numberTwo ? `Os números ${numberOne} e ${numberTwo} são iguais!` : `Os números ${numberOne} e ${numberTwo} são diferentes!`);
}

alert(checkEven(numberOne));
alert(checkEven(numberTwo));
alert(areSame(numberOne, numberTwo));

const add = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

const subtract = (numberOne, numberTwo) => {
    return numberOne - numberTwo;
}

const multiply = (numberOne, numberTwo) => {
    return numberOne * numberTwo;
}

const toDivide = (numberOne, numberTwo) => {
    return numberOne / numberTwo;
}

const restToDivision = (numberOne, numberTwo) => {
    return numberOne % numberTwo;
}

alert(`A soma dos dois números é: ${add(numberOne, numberTwo)}`);
alert(`A subtração dos dois números é: ${subtract(numberOne, numberTwo)}`);
alert(`A multiplicação dos dois números é: ${multiply(numberOne, numberTwo)}`);
alert(`A divisão dos dois números é: ${toDivide(numberOne, numberTwo)}`);
alert(`O resto da divisão dos dois números é: ${restToDivision(numberOne, numberTwo)}`);

