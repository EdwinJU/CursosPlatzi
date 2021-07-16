const http = require("http"); //require("http") es una libreria interna de node js que permite crear servidores que solo se usa cuando se ejecuta js desde node

function sitioweb(req, res){

    res.writeHead(200, {"Content-type" : "text/html"} ); //respuesta de la consulta cuando es ok y carga el html
    res.end("Mi primer <strong>servidor</strong>");// el text que se muestra en la pag

}

let servidor = http.createServer(sitioweb);

servidor.listen(6969, "192.168.1.2"); // especifica el puerto y la url que corre el servidor
console.log("Servidor corriendo")