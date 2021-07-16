//**Declarativas**

function miFuncion(){

    return 3;
}

miFuncion();//Mandar a llamar la funcion con el nombre de la funsion

//--------------------Ejemplo1-----------------------------------

function sumar(a,b){

    var resultado= a+b;
    return resultado;
}
sumar(1,2);//Retorna 3

//--------------------Ejemplo2-----------------------------------
function sumar(a,b){


    return a+b;
}

sumar(1,2);//Retorna 3






//**De expresion**

var miFuncion = function(a,b){

    return a + b;
}

miFuncion(2,3);//Mandar a llamar la funcion con el nombre de la variable que hacer referencia a una funcion

//------------------Ejemplo-------------------------------------

var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre("Diego");




