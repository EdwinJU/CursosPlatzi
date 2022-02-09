'use strict'

/*Mostrar todos los numero divisores de un numero introducido
Note: un mumero es divisor cuando se divide por el numero introducido y el resultado es 0*/

var numero = parseInt(prompt("Dijite el numero 1"));

for(var i=1; i<=numero; i++){
    if(numero%i ==0){
        console.log("Divisor " + i);
    }
}


