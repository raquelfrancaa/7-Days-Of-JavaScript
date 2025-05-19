let numeroUm = 1, stringUm = '1';
let numeroTrinta = 30, stringTrinta = '30';
let numeroDez = 10, stringDez = '10';
let numeroDois = 2, stringDois = '2';

// O operador "==" é o simbolo de "igual a", sendo assim, ele retorna verdadeiro se ambos os valores comparados forem iguais independente do tipo (numérico, string, booleano, etc)
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

// O operador "===" é o simbolo de "idêntico a", sendo assim, ele retorna verdadeiro somente de ambos os valores sendo comparados forem do mesmo tipo e valor
if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

// O operador "!=" é o simbolo de "diferente de", sendo assim, ele retorna verdadeiro se ambos os valores comparados forem diferentes um do outro independente do tipo (numércio, string, booleano, etc)
if (numeroDez != stringDez) {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
} else {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
}

// O operador "!==" é o simbolo de "não idêntico a", sendo assim, ele retorna verdadeiro se ambos os valores sendo comparados forem diferentes em tipo (numércio, string, booleano, etc) e valor
if (numeroDois !== stringDois) {
  console.log('As variáveis numeroDois e stringDois não tem o mesmo tipo')
} else {
  console.log('As variáveis numeroDois e stringDois tem o mesmo valor e o mesmo tipo')
}