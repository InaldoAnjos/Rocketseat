# Scope

* Escopo determina a visibilidade de alguma variável no JS

# Block statement

```js
    //vamo iniciar um bloco
    {
        //aqui dentro é um bloco e posso colocar qualquer código
    }
    //Aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var

```js
    // var é global e poderá funcionar fora de um escopo de bloco
    // hoisting (elevação no JS)
    console.log('> existe x antes do bloco? ', x);

    {
        var x = 0;
    }

    console.log('> existe x depois do bloco? ', x);
```

## let e const

```js
    // let e const são variáveis locais e só funcionam no escopo onde foram criadas
    // hoisting
    console.log('> existe y antes do bloco? ', y); // Erro

    {
        let y = 0;
        console.log('> existe y? ', y);
    }

    console.log('> existe x depois do bloco? ', y); // Só funciona no mesmo escopo
```

> hoisting (elevação no JS) - [Link:] (https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting)