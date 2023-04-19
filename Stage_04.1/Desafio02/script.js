/* 
    Nesse desafio você irá criar uma lista de **estudantes** e, 
    cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** 
        cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let students = [
    {
        name   : "João",
        nota01 : 5.0,
        nota02 : 8
    },
    {
        name   : "Guilherme",
        nota01 : 8.9,
        nota02 : 8
    },
    {
        name   : "Julia",
        nota01 : 9.0,
        nota02 : 6.8
    },
    {
        name   : "Diego",
        nota01 : 3.0,
        nota02 : 6.4
    },
    {
        name   : "Gabriela",
        nota01 : 8.6,
        nota02 : 5.9
    }
]

const average = (nota01, nota02) => {
    return (((nota01 + nota02) / 2).toFixed(2));
}

function printStudentAverage(student) {
    
    let media = average(student.nota01, student.nota02);

    if(media >= 7){
        return `
            A média do(a) aluno(a) ${student.name} é: ${media}
            Parabéns, ${student.name}! Você foi aprovado(a) no concurso!
        `
    }else{
        return `
            A média do(a) aluno(a) ${student.name} é: ${media}
            Não foi dessa vez, ${student.name}! Tente novamente!
        `
    }
}

for (let student of students) {
    let averageMessage = printStudentAverage(student);
    alert(averageMessage);
}