/*
Tomando en cuenta el programa anterior, realizar la suma de esos elementos del arreglo y obtener su promedio.
*/

document.getElementById('boton').addEventListener('click', () => {
    let nums = [];
    let entrada;
    let suma = 0;

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
        suma += parseInt(nums[i]);
    }

    alert('Los números ingresados fueron:\n' + nums + '\nNúmero total de elementos: ' + nums.length + '\nPromedio: ' + suma / nums.length);
});