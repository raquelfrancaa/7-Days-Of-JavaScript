let opcao = prompt("Digite o número:\n1 - Para seguir a área de Front-end\n2 - Para seguir a área de Back-end");

if (opcao == 1){
    alert("Parabéns, você escolheu Front-end!");
    opcao = prompt("Digite o número:\n1 - Para aprender React\n2 - Para aprender Vue");

    if (opcao == 1){
        alert("Parabéns, você escolheu aprender React!");
    } else if (opcao == 2){
        alert("Parabéns, você escolheu aprender Vue!");
    }

    opcao = prompt("Digite o número:\n1 - Para se especializar em Front-end\n2 - Para seguir se desenvolvendo para se tornar FullStack");
    if (opcao == 1){
        alert("Parabéns, você escolheu se especializar em Front-end!");
    } else if (opcao == 2){
        alert("Parabéns, você escolheu se tornar FullStack!");
    }


} else if (opcao == 2){
    alert("Parabéns, você escolheu Back-end!");
    opcao = prompt("Digite o número:\n1 - Para aprender C#\n2 - Para aprender Java");

    if (opcao == 1){
        alert("Parabéns, você escolheu aprender C#!");
    } else if (opcao == 2){
        alert("Parabéns, você escolheu aprender Java!");
    }

    opcao = prompt("Digite o número:\n1 - Para se especializar em Back-end\n2 - Para seguir se desenvolvendo para se tornar FullStack");
    if (opcao == 1){
        alert("Parabéns, você escolheu se especializar em Back-end!");
    } else if (opcao == 2){
        alert("Parabéns, você escolheu se tornar FullStack!");
    }
}

do {
    let tecnologia = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou conhecer? ");
    alert(`Que bacana! ${tecnologia} é muito legal`);
    opcao = prompt("Tem mais alguma tecnologia que você gostaria de aprender? ");
} while (opcao == "ok")