
//FOR
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}

for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);


//Otra opcion es asi:
}
for(var alumno of estudiantes) {
    saludarEstudiantes(alumno);
}





// While

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}


var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)


