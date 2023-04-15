/* 
    Manipulando Strings e Números

    * Transformar String em Número e Número em String

*/

let string = '99';
let number = 01;

console.log(typeof(Number(string)));

console.log(typeof(String(number)));

/* Contar quantos caracteres tem uma palavra e quantos dígitos tem um número */

let lenghtString = 'Junior';
let lenghtNumber = 999;

console.log(lenghtString.length);
console.log(String(lenghtNumber).length);

/* Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula */

let double = 456848613.6545864;

console.log(double.toFixed(2)); // 2 casas decimais
console.log(double.toFixed(2).replace(".", ",")); // Trocar ponto por vírgula

/* Transformar letras minúsculas em maiúsculas e vice-versa*/

let minuscula = 'junior';
let maiuscula = 'JUNIOR';

console.log(minuscula.toUpperCase());
console.log(maiuscula.toLowerCase());


/* Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array.
    Depois disso, transforme o array em um texto e onde eram espaços, coloque _*/

let phrase = "O meu desafio é andar sozinho, esperar no tempo os nossos destinos!";
let myArray = phrase.split("");
let phraseWithUnderscore = myArray.join("_");

console.log(phrase);
console.log(myArray);
console.log(phraseWithUnderscore);

/* Verificar se o texto contém a palavra desafio */

console.log(phrase.includes("desafio")); //true
console.log(phrase.includes("Desafio")); //false - case sensitive

/* Criar um Array com construtor */

let anArray = new Array('a', 'b', 'c');
console.log(anArray[0]);

/* Contar elementos de um array */

console.log(anArray.length);

/* Transformar uma cadeia de caracteres em elementos de um array */

console.log(Array.from(minuscula));

/* Manipulando Arrays 

    * Adicionar um item no fim 
    * Adicionar um item no começo
    * Remover um item no fim
    * Remover um item no começo
    * Pegar somente alguns elementos do array
    * Remover 1 ou mais itens em qualquer posição do array
    * Encontrar a posição de um elemento no array
        
*/

let techs = ["html", "css", "js"];

techs.push("node.js"); // Adicionar no final
techs.unshift("sql"); // Adicionar no inicio
// techs.pop(); // Remover do final
// techs.shift(); // Remove do começo
// console.log(techs); 

// console.log(techs.slice(2, 3));
console.log(techs);

let index = techs.indexOf("css");
techs.splice(index, 1);

console.log(techs);

