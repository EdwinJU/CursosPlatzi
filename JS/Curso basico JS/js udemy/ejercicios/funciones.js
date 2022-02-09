"use strict";

// es una agrupacion reutilizable de un conjunto de instriccionbes para hacer algo
/*
function calculadora() {
  return "Hola soy la calculadora";
}

console.log(calculadora());

//Parametros

function calParametros(numer1, numero2) {
  console.log("Suma: " + (numer1 + numero2));
  console.log("Resta: " + (numer1 - numero2));
  console.log("Multiplicacion: " + numer1 * numero2);
  console.log("Divicion: " + numer1 / numero2);
}

calParametros(1, 2);
*/
//Funcion dentro de otra funcion

function porConsola(numer1, numero2) {
  console.log("Suma: " + (numer1 + numero2));
  console.log("Resta: " + (numer1 - numero2));
  console.log("Multiplicacion: " + numer1 * numero2);
  console.log("Divicion: " + numer1 / numero2);
}
function porHtml(numer1, numero2) {
    document.write("Suma: "+ (numer1 + numero2) + "<br/>");
    document.write("Resta: "+ (numer1 - numero2) + "<br/>");
    document.write("Multiplicacion: "+ (numer1 * numero2) + "<br/>");
    document.write("Divicion: "+ (numer1 / numero2) + "<br/>");
}

function opcion(numer1 , numero2, mostrar= true){
    if(mostrar==false){
        porConsola(numer1, numero2);
    }else{
        porHtml(numer1, numero2);
    }
}

opcion(1,2);


//Parametros REST y SPREAD

function listadOFrutas(fruta1, fruta2, ...resto_de_frutas){ //Crea un array con el resto de valores introducidos y se le conoce como REST
  console.log("fruta 1:", fruta1);
  console.log("fruta 2:", fruta2);
}

listadOFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
listadOFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");// Esto se le denomina spread es lo mismo que el Rest solo que aplicandolo a la asiganacion de valores


/*Funciones anonimas*/
// Es una funcion que no tiene nombre

var pelicula = function(nombre){

  return "La pelicula es: " + nombre;

}

//Funcion CallBack
function sumame(numeroUno, numeroDos, sumaYmuestra, sumaPorDos){

  var sumar= numeroUno + numeroDos;
  return sumar;
}

sumame(7 , 3, function(dato){
  console.log("La suma es: " + dato);
},function(dato){
  console.log("La suma por dos es: " + (dato*2));
});

//Funciones de flecha
// es la forma de definir funciones de callback de una manera las simple
sumame(7 , 3, dato=>{
  console.log("La suma es: " + dato);
},dato=>{
  console.log("La suma por dos es: " + (dato*2));
});


