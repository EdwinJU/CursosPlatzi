'use strict'

/*tabla de multiplicar de un numero introducido*/

var numero = parseInt(prompt("Ingrese un numero"));

for(var i=0; i<=9 ;i++){
    var tabla= numero*i;
    console.log(numero + " * " + i + " = " + tabla)
}
