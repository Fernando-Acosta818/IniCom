/*
Programa que dado cierto numero indique a que mes corresponde (de 1 a 12 - enero a diciembre) [switch]
*/

document.getElementById('boton').addEventListener('click', () => {
    let opcion = prompt('Ingrese un número del 1 al 12');

    switch (opcion) {
        case '1':
            alert('El número 1 corresponde a enero');
            break;
        case '2':
            alert('El número 2 corresponde a febrero');
            break;
        case '3':
            alert('El número 3 corresponde a marzo');
            break;
        case '4':
            alert('El número 4 corresponde a abril');
            break;
        case '5':
            alert('El número 5 corresponde a mayo');
            break;
        case '6':
            alert('El número 6 corresponde a junio');
            break;
        case '7':
            alert('El número 7 corresponde a julio');
            break;
        case '8':
            alert('El número 8 corresponde a agosto');
            break;
        case '9':
            alert('El número 9 corresponde a septiembre');
            break;
        case '10':
            alert('El número 10 corresponde a octubre');
            break;
        case '11':
            alert('El número 11 corresponde a noviembre');
            break;
        case '12':
            alert('El número 12 corresponde a diciembre');
            break;
    }
});