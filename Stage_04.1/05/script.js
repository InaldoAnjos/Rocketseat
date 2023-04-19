/*
    ** Jogo da advinhação **

    Apresente a mensagem ao usuário:
    "Advinhe o número que estou pensando? Está entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e 
    verificar se o número digitado é o mesmo que o aleatório
    gerado pelo sistema.

    Enquanto o usuário não advinhar o número, mostrar a mensagem:
    "Erro, tente novamente!"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você advinhou o número em x tentativas"

    Substitua o "x" da mensagem, pelo número de tantantivas.

*/

const randomNumber = Math.round(Math.random() * 10);

let numberUser = Number(prompt("Advinhe o número que estou pensando. Está entre 0 e 10."));
let increment = 0;
let condition = true;

while(condition){
    increment ++;
    if(numberUser == randomNumber){
        alert(`Isso. ${randomNumber} é o número que estava pensando! Você acertou em ${increment} tentativa(s)!`);
        condition = false;
    }else{
        alert(`Erro, tente novamente!`);
        numberUser = Number(prompt("Advinhe o número que estou pensando. Está entre 0 e 10."));
    }
}