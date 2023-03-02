/* Programa que realice operación básica 
(suma resta multiplicación division), 
dada una opción de menú (quizá menú numérico: 
1-para hacer la suma 
2-para hacer la resta 
3-para hacer la multiplicacion 
4-para la division), 
con estructuras if separadas o con un switch case */

document.getElementById('boton').addEventListener('click', () => {
    let selec = prompt("Seleccione la operación que desea realizar.\n 1. Suma\n 2.Resta\n 3. Multiplicación\n 4. División");
    let n1;
    let n2;

    switch (selec) {
        case '1':
            n1 = parseInt(prompt("Ingrese el primer número."));
            n2 = parseInt(prompt("Ingrese el segundo número."));
            alert("El resultado es " + (n1 + n2));
            break;

        case '2':
            n1 = parseInt(prompt("Ingrese el primer número."));
            n2 = parseInt(prompt("Ingrese el segundo número."));
            alert("El resultado es " + (n1 - n2));
            break;

        case '3':
            n1 = parseInt(prompt("Ingrese el primer número."));
            n2 = parseInt(prompt("Ingrese el segundo número."));
            alert("El resultado es " + (n1 * n2));
            break;

        case '4':
            n1 = parseInt(prompt("Ingrese el primer número."));
            n2 = parseInt(prompt("Ingrese el segundo número."));
            alert("El resultado es " + (n1 / n2));
            break;
    }
});