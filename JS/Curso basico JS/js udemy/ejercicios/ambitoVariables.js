'use strict'

var texto = "Hola mundo soy una variable global";// Al ser una variable global se puede usar en todo lugar

function holaMundo(texto){
    var texto2="Variable local" // Al ser una variable local solo se puede utilizar dentro de la funcion
    console.log(texto);
    console.log(numero);
}

var numero=12;

holaMundo(texto);