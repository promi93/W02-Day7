// Esercizio 1
var nome1 = 'Aldo';
let nome2 = 'cliente';
const number = 3.14;

document.getElementById('concatena').innerHTML = nome1 + ', ' + nome2 + ', ' + number;


// Esercizio 2
var unico = nome1 + ', ' + nome2 + ', ' + number;
document.getElementById('concatena2').innerHTML = unico


// Esercizio 3
var name1 = 'Mario';
let name2 = 'Carla';
document.getElementById('var').innerHTML = name1
document.getElementById('let').innerHTML = name2
document.getElementById('final').innerHTML = name1

// Esercizio 3 part2
document.getElementById('let2').innerHTML = name1
document.getElementById('let3').innerHTML = name2
document.getElementById('final2').innerHTML = name1

// Esercizio 4
var numero = 15;
document.getElementById('iniziale').innerHTML += numero;
document.getElementById('valore1').innerHTML += (numero + numero) + ', ' + (numero + numero +1);
document.getElementById('valore2').innerHTML += (numero - 10) + ', ' + (numero - 10 -1);
document.getElementById('valore3').innerHTML += numero * 3;
document.getElementById('valore4').innerHTML += numero / 3;
document.getElementById('valore5').innerHTML += numero + ' è un numero'

