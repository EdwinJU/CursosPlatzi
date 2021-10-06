'use strict'

/*Hacer un programa que muestre todos los numeros entre 2 numero introducidos por el usuario*/

var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el ultimo numero"));3
var numeros = [];

for(var i=numero1; i< numero2; i++){
    numeros.push(i);
}
console.log("Los numeros son " + numeros);
document.write("<h1>"+numeros+"</h1>")
