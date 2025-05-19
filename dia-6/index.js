    let frutas = [], laticinios = [], congelados = [], doces = [], outros = []

    while (1 == 1){
        let opcao = prompt("1 - Adicionar uma comida na lista de compras\n2 - Remover comida da lista de compras\n3 - Imprimir lista\n4 - Sair\n");

        if (opcao == 1){

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

        } else if (opcao == 2){

            comida = prompt("Qual comida você deseja remover? ");

            categoria = prompt("Qual categoria essa comida se encaixa?\n1 - Frutas\n2 - Laticínios\n3 - Congelados\n4 - Doces\n5 - Outros\n");

            if (categoria == 1){
                frutas.splice(comida);
            } else if (categoria == 2){
                laticinios.splice(comida);
            } else if (categoria == 3){
                congelados.splice(comida);
            } else if (categoria == 4){
                doces.splice(comida);
            } else if (categoria == 5){
                outros.splice(comida);
            }

        } else if (opcao == 3){

            console.log(`Lista de Compras:\nFrutas: ${frutas}\nLaticínios: ${laticinios}\nCongelados: ${congelados}\nDoces: ${doces}\nOutros: ${outros}`);

        } else if (opcao == 4){

            break;

        } else {
            
            console.log("Opção inválida! Tente novamente");

        }

    }