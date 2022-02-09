'use strict'


// Transformacion de textos
var numero = 44;
var texto1 = "Texto de prueba";
var texto2 =  "Otro texto de prueba";

var dato=numero.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();
console.log(dato + dato2 + dato3);


//Calcular longitud
var nombre = "Hola";
console.log(nombre.length);

//Concatenar
//Opcion 1
var textoTotal= texto1 + texto2;
console.log(textoTotal);

//Opcion2
var textoTotal2 = texto1.concat(" " + texto2);
console.log(textoTotal2);

//Busqueda dentro de strings
 var busqueda = texto1.indexOf("curso");
 console.log(busqueda);

 var busqueda2 = texto1.search("curso");
 console.log(busqueda2);

 var busqueda3 = texto1.match("curso");
 console.log(busqueda3);

 var busqueda4 = texto1.substr(14,5);
 console.log(busqueda4);

 var busqueda5 = texto1.charAt(14);
 console.log(busqueda5);

 var busqueda6 = texto1.startsWith("curso");
 console.log(busqueda6);

 var busqueda7 = texto1.endsWith("curso");
 console.log(busqueda7);

 var busqueda8 = texto1.includes("curso");
 console.log(busqueda8);

 //Sustituir texto por otro
 var sustitucion = texto1.replace("prueba" , "java");
 console.log(sustitucion);

 var sustitucion2 = texto1.slice(14);
 console.log(sustitucion2);

 var sustitucion3 = texto1.split(" ");
 console.log(sustitucion3);

 var sustitucion4 = texto1.trim();
 console.log(sustitucion4);


 //Plantillas en JS

 var name = "Edwin";
 var apellido = "Jimenez"

var texto = `

    <h1>hola mi nombre es: ${name}<h1/>

`;