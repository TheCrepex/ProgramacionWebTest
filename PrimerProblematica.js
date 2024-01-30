

for (var i=0; i < 3; i++){
    var dinero = prompt("clente N°:"+ i + " Ingrese su dinero: ");
    var vuelto=0;
    if (dinero >= 2.9){
        alert("puede comprar potecito y 1/4");
        vuelto=dinero-2.9;
        alert("su vuelto es: "+ vuelto);
    }
    else if (dinero >= 1.8){
        alert("puede comprar helardo");
        vuelto=dinero-1.8;
        alert("su vuelto es: "+ vuelto);
    }
    else if (dinero >= 1.7){
        alert("puede comprar helardovich");
        vuelto=dinero-1.7;
        alert("su vuelto es: "+ vuelto);
    }
    else if (dinero >= 1.6){
        alert("puede comprar heladix");
        vuelto=dinero-1.6;
        alert("su vuelto es: "+ vuelto);
    }
    else if (dinero >= 1){
        alert("puede comprar crema");
        vuelto=dinero-1;
        alert("su vuelto es: "+ vuelto);
    }
    else if (dinero >= 0.6){
        alert("puede comprar agua");
        vuelto=dinero-0.6;
        alert("su vuelto es: "+ vuelto);
    }

}
