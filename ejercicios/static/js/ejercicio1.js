/*Programa que realice multiplicacion enviando 
los numeros a multiplicar a una función y que 
el resultado ésta lo regrese al programa principal 
creación y llamado de funcion) usando prototipos de funciones */

function producto(num1, num2) {
    var n1 = prompt("Ingrese el primer número");
    var n2 = prompt("Ingrese el segundo número");
    var producto = n1 * n2;
    alert("El producto de los números es " + producto);
}

document.getElementById('boton').addEventListener('click', producto);
