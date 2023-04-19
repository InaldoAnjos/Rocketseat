/*
    Capture 10 itens para comprar a lista de um supermercado.
    
    Após capturar os 10 itens, imprima-os, separando por vírgula.

*/

let listaCompras = [];

for (let i = 0; i < 10; i++){
    if(i == 0){
        listaCompras.push(prompt("Insira aqui um item para acrescentar na lista: "));
    }else{
        listaCompras.push(prompt("Insira aqui o próximo item para acrescentar na lista: "));
    }
}

alert(`Sua lista de compras é: ${listaCompras}`);