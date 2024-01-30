let ingreso=1
let contadordosam = 0;
while (ingreso == 1){

    let edadingreso = prompt ("Ingrese Su Edad: ");
    let horaingreso = prompt ("Ingrese la hora actual");


    if (edadingreso <=17){
        alert("Eres menor de edad, no puedes entrar");
    }
    else{
        if (contadordosam == 0 && horaingreso>= 2){
            contadordosam=1;
            alert("Tu entrada es gratis");
            
        }
        else {
            alert("Puedes Pasar")
        }
    }
    ingreso= prompt("Alguien desea ingresar a la fiesta? 1 para si 0 para cerrar la entrada")
}