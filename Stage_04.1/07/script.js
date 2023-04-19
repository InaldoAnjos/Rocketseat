/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista deverá conter:
     > nome;
     > idade;
     > peso:
     > altura.

    Escreva uma lista contendo o nome dos pacientes

*/

let patientsList = [
    {
    name:   null,
    idade:  null,
    peso:   null,
    altura: null 
    }
]

function calculaIMC(altura, peso){
    const imc = peso/(altura**2);
    return (imc);
}

let condition = 1;
let patients = [];
let increment = 1;

alert("Seja bem-vindo ao cadastro de pacientes!");

while(condition !=0){

condition = Number(prompt(
        `Digite a opção desejada:
        1 - Para cadastrar um novo paciente;
        2 - Para visualizar os pacientes cadastrados;
        3 - Para calcular o IMC;
        0 - Para sair!`));
    switch(condition){
        case 1:
            let newName   = (prompt(`Insira o nome do(a) paciente: `));
            let newAge    = (prompt(`Insira a idade do(a) paciente: `));
            let newWeight = (prompt(`Insira o peso do(a) paciente: `));
            let newHeight = (prompt(`Insira a altura do(a) paciente: `));
            
            patientsList.push(newName, newAge, newWeight, newHeight);
            patients.push(`Paciente ${increment}
                    Nome:   ${newName}, 
                    Idade:  ${newAge}, 
                    Peso:   ${newWeight}, 
                    Altura: ${newHeight}`);
            increment++;

            break;
        case 2:
            if(patientsList.length > 1){
                alert(patients);
            }else{
                alert("A lista de pacientes está vazia! Tente inserir novos pacientes!");
            }
            break;
        case 3:
            alert(`Aqui estão os pacientes da clínica:`);
            alert(`Icremente = ${increment}`);
            alert(`patientsList${patientsList}`);

            for( patient of patientsList){
                alert(patients.name);
            }
            let imcPatient = prompt(`Qual o nome do paciente que deseja calcular o IMC?`);
            let indexPatient = patientsList.findIndex(imcPatient);
            let imc = calculaIMC(patientsList[indexPatient].altura, patientsList[indexPatient].peso);
            alert(`O IMC do paciente solcitado é: ${imc}`);
            break;
        case 0:
                alert(`Saindo...`);
            break;
        default:
            alert("Opção inválida! Tente novamente!");
            break;
    }
}