class celular{

    constructor(modelo,memoria,pantalla){
        this.modelo = modelo;
        this.memoria = memoria;
        this.pantalla = pantalla;
        this.info = `El Modelo es: ${this.modelo}, Tiene: ${this.memoria} de memoria y la pantalla es: ${this.pantalla}`


        }
        verInfo(){
            alert(this.info);



    }

}

let g70 = new celular("Motorola G70","20GB","Amoled");
let s20 = new celular("Samgsung S20","900GB","QLED");
let lumia = new celular("Nokia Lumia 620","1GB","LCD");


g70.verInfo();
s20.verInfo();
lumia.verInfo();