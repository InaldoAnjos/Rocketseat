/*
    Solicitar o nome do aluno e as 3 notas
    do bimestre calcular a média daquele aluno.

    Se o aluno passou no bimestre, das os 
    parabéns.

    Se o aluno não passou no bimestre, motivar
    o aluno a dar seu melhor na prova de 
    recuperação.

    Em ambos os casos, mostre uma mensagem com o 
    nome do aluno e a nota.

*/
let name = prompt("Olá, qual o seu nome?");

let nota01 = Number(prompt(`${name}, insira aqui sua primeira nota:`));
let nota02 = Number(prompt(`${name}, insira agora sua segunda nota:`));
let nota03 = Number(prompt(`${name}, agora sua terceira nota:`));

let media = (nota01 + nota02 + nota03) / 3;

alert(media >= 7.0 ? 
                    `${name}, parabéns. Você foi aprovado com a média ${media.toFixed(2)}!` 
                   : 
                    `${name}, infelizmente você foi reprovado com a média ${media.toFixed(2)}! Continue estudando que sua aprovação virá!`
     );