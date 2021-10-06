'use strict'

/*1 programa de que nos pida 2 numeros y que nos diga cual es mayor, menor o si son iguales*/
//Plus: Si los numeros no son numeros o son menores o iguakes a cero, nos vuelva a pedir

//MAYOR
var numero1= parseInt(prompt("Digite el numero 1"));
var numero2= parseInt(prompt("Digite el numero 2"));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){

    numero1= parseInt(prompt("Porfavor digite el primer numero que sea valido"));
    numero2= parseInt(prompt("Porfavor digite el segundo numero que sea valido"));
}

if(numero1>numero2){
    console.log("El numero " + numero1 + " es el mayor " + "y el " + numero2 + " es el menor");

}else if(numero1==numero2){
    console.log("Los numeros son iguales");
    var suma =numero1 + numero2;
    console.log(suma);
}else{
    console.log("El numero " + numero2 + " es el mayor " + "y el " + numero1 + " es el menor");
}


