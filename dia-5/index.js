let frutas = [], laticinios = [], congelados = [], doces = [], outros = [];

while (1 == 1){
    let opcao = prompt("Você deseja adicionar uma comida na sua lista de compras? (s/n)\n");

    if (opcao == "s"){
        comida = prompt("Qual comida você deseja inserir? ");

        categoria = prompt("Qual categoria essa comida se encaixa?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n5 - Outros\n");

        if (categoria == 1){
            frutas.push(comida);
        } else if (categoria == 2){
            laticinios.push(comida);
        } else if (categoria == 3){
            congelados.push(comida);
        } else if (categoria == 4){
            doces.push(comida);
        } else if (categoria == 5){
            outros.push(comida);
        }

    } else if (opcao == "n"){
        console.log(`Lista de Compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`);
        break;
    } else {
        console.log("Opção inválida! Tente novamente");
    }

}