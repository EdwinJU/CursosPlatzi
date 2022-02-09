'use strict'

/*Hacer una calculadora que pida 2 numeros por pantalla
Si metemos mal numeros que vuelva a pedir
Y mostrar en el body, alerta y consola el resultado de sumar, restar, multiplicar y dividir*/

var numero1 = parseInt(prompt("Dijite el numero 1"));
var numero2 = parseInt(prompt("Dijite el numero 2"));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){

    numero1= parseInt(prompt("Porfavor digite el primer numero que sea valido"));
    numero2= parseInt(prompt("Porfavor digite el segundo numero que sea valido"));
}

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var division = numero1 / numero2;
var multiplicacion = numero1 * numero2;

document.write("<h1>"+ "Resultados" +"</h1>" +"\n" +
 "<p>"+"Suma: " + suma +"</p>" + "\n" +
 "<p>"+"Resta: " + resta + "</p>" + "\n" +
 "<p>"+"Division: " + division +"</p>" + "\n" +
 "<p>"+"Multiplicacion: " + multiplicacion +"</p>");