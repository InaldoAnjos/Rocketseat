/*
    Function() constructor

    * Expressão new
    * Criar um novo objeto
    * This keyword
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + ' está andando!';
    }
}

const junior = new Person('Junior');
console.log(junior.walk());