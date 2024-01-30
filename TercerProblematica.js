function ingresarA(){
    let nombre = prompt("ingrese el nombre del alumno");
    return nombre;
}

var alumnos = [];
var asistencia = []
var cantAlum=0
while (true){

    let des1 = prompt("Desea Ingresar un Alumno? 1 para si 2 para no");
    if (des1==1){
        let alumIngr = ingresarA()
        alumnos.push(alumIngr);
    }
    else{
        cantAlum=alumnos.length;
        alert(cantAlum + " Alumnos Ingresados");
        alert("Ahora vamos a contar las asistencias de los alumnos en la semana")

        for (let alumno of alumnos){
            var aux=[];
            for (let dias = 1; dias<6; dias++ ){
                let asis = prompt("El alumno: " +alumno+ " esta presente el dia "+dias+" ? 1 para presente 0 para ausente");
                aux.push(asis);
                }
            asistencia.push(aux);
            }

        /*alert(asistencia);
        for(j of asistencia){
            alert(j);
        }*/
        
        var presentes=[];
        for (let alumno of alumnos){
            var dia=1;
            for(let presencia of asistencia){
                for (let aux2 of presencia){    
                    if (aux2 == 1){
                        presentes.push("El alumno: "+alumno+" Estuvo presente el dia: "+dia+ " ");
                        dia=dia+1;    
                    }
                    else{
                        presentes.push("El alumno: "+alumno+" Estuvo ausente el dia: "+dia+ " ");
                    }
                }
            }
        }



        


    }}
