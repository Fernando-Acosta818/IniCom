/*Programa que realice operaciones básicas 
(suma resta multiplicación division) con dos 
valores numéricos ingresados desde teclado (sin menú)" */

document.getElementById('boton').addEventListener('click', () => {
    let op = prompt("Ingrese la operación con dos números a realizar");
    const elementos = op.split(" ");

    switch (elementos[1]) {
        case '+':
            alert(pareseInt(elementos[0]) + pareseInt(elementos[2]));
            break;
    }
});


