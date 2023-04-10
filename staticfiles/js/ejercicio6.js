/*
Programa que cuente cuantos números enteros han sido ingresados, mientras sean diferente de cero (con while)
*/

document.getElementById('boton').addEventListener('click', () => {
    let total = 0;
    let entrada;

    alert('Ingrese un número entero diferente de cero');

    while (parseInt(entrada) != 0) {
        entrada = parseInt(prompt('Total de números ingresados: ' + total + '.\n Número:'));
        total += 1;
    }
    alert('Total de números ingresados: ' + total);
});