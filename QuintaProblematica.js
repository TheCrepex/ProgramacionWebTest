// Definición de la clase Calculadora
class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    sumar(numero1, numero2) {
        this.resultado = numero1 + numero2;
    }

    restar(numero1, numero2) {
        this.resultado = numero1 - numero2;
    }

    multiplicar(numero1, numero2) {
        this.resultado = numero1 * numero2;
    }

    dividir(numero1, numero2) {
        if (numero2 === 0) {
            alert("Error: No puedes dividir por cero.");
        } else {
            this.resultado = numero1 / numero2;
        }
    }

    potencia(numero1, numero2){
        var aux = 1;
        for (let i = 0; i < numero2; i++){
            aux = aux * numero1;
        }
        this.resultado = aux;
    }

    raiz2(numero1,numero2){
        
    }

    obtenerResultado() {
        return this.resultado;
    }
}

// Función para realizar operaciones
function realizarOperacion(calculadora) {
    const numero1 = parseFloat(prompt("Ingrese el primer número:"));
    const numero2 = parseFloat(prompt("Ingrese el segundo número:"));
    const operacion = prompt(
        "Ingrese la operación (S para suma, R para resta, M para multiplicación, D para división, P para potencia):"
    ).toUpperCase();

    switch (operacion) {
        case "S":
            calculadora.sumar(numero1, numero2);
            break;
        case "R":
            calculadora.restar(numero1, numero2);
            break;
        case "M":
            calculadora.multiplicar(numero1, numero2);
            break;
        case "D":
            calculadora.dividir(numero1, numero2);
            break;
        case "P":
            calculadora.potencia(numero1, numero2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert("Resultado: " + calculadora.obtenerResultado());
}

// Crear una instancia de la calculadora
const miCalculadora = new Calculadora();

while (true) {
    realizarOperacion(miCalculadora);
}
