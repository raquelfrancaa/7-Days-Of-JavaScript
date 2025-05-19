let nome = prompt("Qual o seu nome? "), 
    idade = Number(prompt("Quantos anos você tem? ")),
    linguagem = prompt("Qual linguagem você está aprendendo no momento? ");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

alert(msg)

let opcao = prompt(`Você gosta de estudar ${linguagem}?\nResponda com o número 1 para SIM ou 2 para NÃO.`);

if (opcao == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (opcao == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
} else {
    alert("Opção Inválida");
}