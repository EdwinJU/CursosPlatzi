var miNombre="Edwin" //Scope Global

function nombre(){
    var miApellido ="Jimenez";// Scope local
    console.log(miNombre + "" + miApellido);
}

nombre();//retorna Edwin Jimenez

//Si retornamos solo miNombre retirna edwin pero si solo retornamos miApellido muestra un error porque es una variable scope local

