/*Programa que realice multiplicacion enviando 
los numeros a multiplicar a una función y que 
el resultado ésta lo regrese al programa principal 
creación y llamado de funcion) usando prototipos de funciones */

function producto(num1, num2) {
    return num1 * num2;
}

document.getElementById('boton').addEventListener('click', () => {
    var n1 = prompt("Ingrese el primer número");
    var n2 = prompt("Ingrese el segundo número");

    alert('El producto de los números es ' + producto(n1, n2));
});
