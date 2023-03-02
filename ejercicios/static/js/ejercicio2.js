/*
Programa que realice división, y mediante 
estructura condicional if-else revise el divisor, 
si es cero , mandar mensaje de error, de lo contrario 
realizar operación y mostrar resultado"
*/

document.getElementById('boton').addEventListener('click', () => {
    let op = prompt("Ingrese una división");
    let elementos = op.split(" ");
    let n1 = parseInt(elementos[0]);
    let n2 = parseInt(elementos[2]);
    
    if (elementos[2] == 0) {
        alert("Error: División entre cero. Intente de nuevo");
    } else {
        alert("El resultado de la división es " + n1 / n2);
    }
});