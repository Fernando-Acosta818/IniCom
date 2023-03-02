/*Programa que realice operaciones básicas 
(suma resta multiplicación division) con dos 
valores numéricos ingresados desde teclado (sin menú)" */

document.getElementById('boton').addEventListener('click', () => {
    let op = prompt("Ingrese una operación (ej. '2 + 2').");
    let elementos = op.split(" ");
    let n1 = parseInt(elementos[0]);
    let n2 = parseInt(elementos[2]);
    let res = 0;

    switch (elementos[1]) {
        case '+':
            res = n1 + n2;
            alert('El resultado es ' + res);
            break;

        case '-':
            res = n1 - n2;
            alert('El resultado es ' + res);
            break;
        
        case '*':
            res = n1 * n2;
            alert('El resultado es ' + res);
            break;

        case '/':
            res = n1 / n2;
            alert('El resultado es ' + res);
            break;
    }
});


