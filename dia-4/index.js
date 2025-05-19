function getInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

x = getInt(0, 10);

for (i = 0; i <= 2; i++){

    chute = prompt("Adivinhe um número inteiro entre 0 e 10: ");

    if (chute == x) {
        console.log(`Parabéns, você acertou! o valor de x era ${x}`);
        break;
    } else if (chute !== x && i == 2) {
        console.log(`Você perdeu! O valor de era ${x}`);
    } else {
        console.log("Errado, tente novamente!");
    }

}