var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
    }

    miAuto.marca;


    //con funcion

    var miAuto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2020,
        detallesDelAuto: function () {
            console.log(`Auto ${this.modelo} ${this.año}`);
        }
    }


    //Funcion constructora de objetos

    function auto(MARCA, MODELO, ANNIO){
        this.MARCA= MARCA;
        this.MODELO= MODELO;
        this.ANNIO= ANNIO;

    }

    var autos= [];

    for(let i=0; i < 5; i++){
        var marca =prompt("Ingrese marca");
        var modelo=prompt("Ingrese modelo");
        var annio=prompt("Ingrese annio");
        autos.push(new auto(marca, modelo, annio));
    }

    for(let i = 0 ; i < autos.length ; i++){
        console.log(autos[i]);
      }