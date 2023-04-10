/*
Programa que realice operaciones básicas con funciones (una función por operación)
*/

function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}

function multiplicacion(n1, n2) {
    return n1 * n2;
}

function division(n1, n2) {
    return n1 / n2;
}

document.getElementById('boton').addEventListener('click', () => {
    let n1 = parseInt(prompt("Ingrese el primer número"));
    let n2 = parseInt(prompt("Ingrese el segundo número"));

    let op = prompt('Operación a realizar (+, -, *, /):');

    switch(op) {
        case '+':
            alert('El resultado es ' + suma(n1, n2));
            break;

        case '-':
            alert('El resultado es ' + resta(n1, n2));
            break;
        
        case '*':
            alert('El resultado es ' + multiplicacion(n1, n2));
            break;

        case '/':
            alert('El resultado es ' + division(n1, n2));
            break;
    }
});