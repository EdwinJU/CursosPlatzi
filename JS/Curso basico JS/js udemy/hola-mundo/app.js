
        'use strict'
        //Hola mundo con JS*****
        /*alert("hola mundo");
        document.write("Este texto viene desde el JS");*/


        //  Comenrtarios, Variables y concatenacion******
        var pais= "Costa Rica";
        var continente= "America";
        var antiguedad="1512";
        var pais_y_continente = pais + " " + continente;

        console.log(pais_y_continente);


        //Use Strict*****
        /*Para evitar errores durante el desarrollo de una app es recomendable usar 'use strict' al inicio de cada archivo JS
        ya que si no es agregada se podrian podrian presentar errores y malas practicas como el hoisting*/


        //Let y Var*****
        //Var
        var numero = 5;
        console.log(numero);

        if(true){
            var numero = 6;
            console.log(numero);
        }
        console.log(numero);

        //Let
        var texto = "Hola mundo"
        console.log(texto);//Imprime Hola mundo

        if(true){
            let texto = "Hola mundo con let";
            console.log(texto);//Imprime Hola mundo con let p
        }
        console.log(texto);//Imprime Hola mundo porque la variable let solo se usa a nivel local osea si es declarada en un if solo ahi existe


        //Constantes*****
        //una vez declarada y asignada una variable constante su valor nunca va a cambiar
        var nombre = "Edwin";
        const ip = "192.168.1.1";

        nombre = "Julio";
        //ip = "654654654";
        console.log(nombre, ip); //Muestra error porque la variable const fue cambiada y no se puede hacer


        //Tipos de datos y operadores******
        //Operadores: *, +, -, / son los que suman, restan multiplican y dividen
        var numero1 = 7;
        var numero2 =12;
        var resultado = numero1 + numero2;
        console.log("El resultado es: " + resultado);

        //Tipos de datos
        //Entero, decimal, numero, string, array, null, undefined, boolean
        var entero = 44;
        var texto = "Hola";
        var boleano= true;
        var numero_texto= "33";

        console.log(Number(numero_texto) + 2);// la funcion Number sirve para transformar un numero string en un int;
        console.log(parseInt(numero_texto) + 2);// hace lo mismo que ael de arriba
        console.log(String(entero) + 2);// combierte una variable tipo int a un string

        //Typeof*****
        console.log(typeof(numero_texto));//devuelve el tipo de dato de la variable

        //Condicionales*****
        //If

        //Operadores relacionales
        /*
        =
        ==
        ===
        !=
        >
        <
        >=
        <=
        */
        var edad1= 25;
        var edad2= 30
        if(edad1<edad2){
            console.log("Edad uno es menor que edad dos");

        }else{
            console.log("Edad dos es menor que edad uno");
        }

        //otro ejemplo

        var nombreEdad= "Edwin";
        var years=24;

        if(years>=18){
            console.log(nombreEdad + " tiene " + years + ", es mayor de edad");

            if(years<33){
                console.log(nombreEdad + " todavia es milenial");
            }else if(years>=70){
                console.log(nombreEdad + " eres un anciano");
            }else{
                console.log("Ya no eres un milenial");
            }
        }else{
            console.log(nombreEdad + " tiene " + years + ", es menor de edad");
        }

        /*Operadores logicos
        ||
        &&
        */

        //&&
        var year=2018;
        if(year>=2000 && year<=2021){
            console.log("Estamos en la edad actual");

        }else{
            console.log("Estamos en la edad post moderna");
        }
        //||
        if(year==2008 || year==2018){

            console.log("Agarrame el biscocho");
        }

        //Switch*****
        var edad= 18;
        var imprime= "";

        switch(edad){
            case 18:
                imprime= "Acabas de cumplir eres mayor edad";
            break;
            case 25:
                imprime= "Ya eres un adulto";
            break;
            case 40:
                imprime= "Crisis de los 40";
            break;
            case 75:
                imprime="Ya eres un anciano";
            break;
            default:
                imprime= "Tu edad es neutra";
            break
        }
        console.log(imprime);


        /*Loops o bucles*/
        //For
        for(var i= 0; i <= 100; i++){

            console.log(i);

        }

        //while

        var ee = 0
        while(ee <= 100){
            console.log(ee);
            ee++

        }

        //Do While
        var al=5;
        do{
            console.log("Esto solo aparece cuando el numero es diferente de 20");
            al++;

        }while(al <= 20)


        /*Alertas*/

        alert("Puto el que lo lea ");

        /*Confirmacion*/
        var mi_respuesta = confirm("Estas seguro de que quieres continuar");
        console.log(mi_respuesta);

        /*Ingreso de datos*/
        var mi_respuesta2=prompt("Que edad tienes", 18);//lo que el usuaria siempre dijita es un string entonces si se necesita un numero se tiene que parsear
        console.log(mi_respuesta2);