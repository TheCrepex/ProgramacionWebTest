function calcularOperacion() {
    const operacion = prompt("Ingresa la operación que deseas realizar:\n" +
        "s para suma\n" +
        "r para resta\n" +
        "m para multiplicación\n" +
        "d para división\n" +
        "p para potencia\n" +
        "r2 para raíz cuadrada\n" +
        "r3 para raíz cúbica"
    );

    switch (operacion) {
        case 's':
            sumar();
            break;
        case 'r':
            restar();
            break;
        case 'm':
            multiplicar();
            break;
        case 'd':
            dividir();
            break;
        case 'p':
            potencia();
            break;
        case 'r2':
            raizCuadrada();
            break;
        case 'r3':
            raizCubica();
            break;
        default:
            alert("Operación no válida. Ingresa una operación válida.");
    }
}

function sumar() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 + numero2;
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa números válidos.");
    }
}

function restar() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 - numero2;
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa números válidos.");
    }
}

function multiplicar() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = numero1 * numero2;
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa números válidos.");
    }
}

function dividir() {
    const numero1 = parseFloat(prompt("Ingresa el primer número:"));
    const numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        if (numero2 !== 0) {
            const resultado = numero1 / numero2;
            alert("Resultado: " + resultado);
        } else {
            alert("No se puede dividir por cero.");
        }
    } else {
        alert("Ingresa números válidos.");
    }
}

function raizCuadrada() {
    const numero1 = parseFloat(prompt("Ingresa un número:"));
    if (!isNaN(numero1) && numero1 >= 0) {
        const resultado = Math.sqrt(numero1);
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa un número válido y no negativo.");
    }
}

function raizCubica() {
    const numero1 = parseFloat(prompt("Ingresa un número:"));
    if (!isNaN(numero1)) {
        const resultado = Math.cbrt(numero1);
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa un número válido.");
    }
}

function potencia() {
    const numero1 = parseFloat(prompt("Ingresa la base:"));
    const numero2 = parseFloat(prompt("Ingresa el exponente:"));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        const resultado = Math.pow(numero1, numero2);
        alert("Resultado: " + resultado);
    } else {
        alert("Ingresa números válidos.");
    }
}

calcularOperacion();
