'use strict'

/*Hacer un programa que nos diga si un numero es par o impar
1. Ventana promp
2. Si el numero no es valido volver a pedir
3.Mostrar resultado*/

var numero = parseInt(prompt("Digite un numero"));


while(numero<=0||isNaN(numero)){
    numero = parseInt(prompt("Digite un numero valido"));
}
if(numero% 2 ==0){
    alert("El numero es par");
}else{
    alert("El numero es impar");
}


