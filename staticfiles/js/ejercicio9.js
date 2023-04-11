/*
Programa que almacene n numeros de enteros en un arreglo, ingresarlos desde teclado e imprimirlos mediante ciclos for
*/

document.getElementById('boton').addEventListener('click', () => {
    let nums = [];
    let entrada;

    alert('Ingrese números enteros. Para terminar, ingrese "t"');

    do {
        entrada = prompt('Ingrese un número entero o "t"');

        if (isNaN(parseInt(entrada)) == false) {
            nums.push(entrada);
            alert('Numeros ingresados:\n' + nums);
        } else if (entrada == 't' || entrada == 'T') {
            break;
        } else {
            alert('El dato ingresado no es un número');
        }
    } while (entrada != 't');

    for (let i = 0; i < nums.length; i++) {
        alert(nums[i]);
    }
});