'use strict'

/*Utilizando un bucle, mostrar la suma  y la media de los numeros introducidos hasta introducir un numero negativo**/


var suma=0;
var contador=0;

do{
    var numero= parseInt(prompt("Digite un numero"));
    if(isNaN(numero)){
        numero=0;

    }else if(numero>=0){
        suma= suma + numero;
        contador++;

    }
}while(numero>=0)
alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));