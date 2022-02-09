'use strict'

/*Mostrar todos los numero impares que hay entre 2 numeros introducidos por el usuario*/

var numero1 = parseInt(prompt("Dijite el numero 1"));
var numero2 = parseInt(prompt("Dijite el ultimo numero"));
var numeros=[];
var impares=[];

for(var i=numero1; i<numero2; i++){

    numeros.push(i);
}

for(var i=0; i<numeros.length; i++){
    if(i % 2 ==0){
        impares.push(numeros[i]);
    }
}
console.log("Los numero impares son " + impares);
