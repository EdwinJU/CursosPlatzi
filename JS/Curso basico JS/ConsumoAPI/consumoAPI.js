async function traerPais(){//funcion encargade de consumir el api y retornar sus datos con el async espera hasta que que traiga los datos
    const respuesta = await fetch("https://api.nationalize.io?name=edwin"); //fetch es una funcion de js que permite traer datos de otros websites

    if(!respuesta.OK){ // valida que la variable respuesta retorne algo correctamente en caso de error se muestra mensaje
        let oops = "404 no encontre nada";
        alert(oops);
        throw new Error(oops);
    }
    const nombre = respuesta.json();

    return nombre;
}

function mostrarNombre(n){
    document.getElementById("Mensaje").innerHTML = n.country[0].country_id;

}