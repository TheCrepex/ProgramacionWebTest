// Array de nombres de alumnos
var nombresAlumnos = ["Juan", "María", "Pedro", "Luisa", "Ana"];

// Inicializar la matriz de asistencia
var asistencia = [];

// Solicitar la asistencia para cada día
for (var dia = 0; dia < 5; dia++) { // Cambia el número de días según sea necesario
    var asistenciaDia = [];
    for (var i = 0; i < nombresAlumnos.length; i++) {
    var estado = prompt("¿Estuvo " + nombresAlumnos[i] + " presente en el día " + (dia + 1) + "? (Sí/No)").toLowerCase();
    if (estado === "si" || estado === "sí") {
      asistenciaDia.push(1); // 1 para presente
    } else {
      asistenciaDia.push(0); // 0 para ausente
        }
    }
    asistencia.push(asistenciaDia);
}

// Mostrar la matriz de asistencia
console.log(asistencia);
