/*
    Faça um programa que tenha um menu e apresente a seguinte mensagem:

    Olá [usuário]! Digite a opção desejada

        1. Cadastrar um item na listaa
        2. Mostrar itens cadastrados
        3. Sair do programa

    ___

    O programa deverá capturar o número digitado pelo usuário e mostrar os
    seguintes cenários:

        * Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
        * Caso o usuário digite 2, ele poderá ver os itens cadastrados
            Se não houver nenhum item cadastrado, mostrar a mensagem:
                "Não exitem itens cadastrados"
        * Caso o usuário digite 3, a aplicação deverá ser encerrada.

*/

let name = prompt("Olá, seja bem-vindo! Qual o seu nome?");
let item;
let itemList = [];
let conditionLoop = true;

while(conditionLoop){
    let option = Number(prompt(
        `Olá, ${name}! Digite a opção desejada: 
            1. Cadastrar um item na lista  
            2. Mostrar itens cadastrados 
            3. Sair do programa`));
    
    switch(option) {
        case 1: item = (prompt(`Digite o item que deseja acrescentar à sua lista: `));
                itemList.push(item);
                break;
        case 2: if(itemList.length > 0){
                    alert(`Sua lista tem os seguintes itens: ${itemList}`);
                    conditionLoop = false;
                break;
                } else {
                    alert(`Sua lista de itens está vazia!
                           Tente cadastrar um item antes!`);
                break;
                }
        case 3: alert(`Saindo da aplicação. Volte sempre!
                       ...`);
                conditionLoop = false;
                break;
        default: alert(`Opção inválida! Tente novamente!`);
                break;
    }
}
