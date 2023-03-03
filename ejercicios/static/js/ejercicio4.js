/*
Programa que determine el mayor de tres números con if-else"
*/

function mayor(n1, n2, n3) {
    if (n1 > n2) {
        if (n1 > n3) {
            return alert("El número mayor es " + n1);
        } else {
            return alert ("El número mayor es " + n3);
        }
    }
    if (n2 > n3) {
        return alert("El número mayor es " + n2);
    } else {
        return alert("El número mayor es " + n3);
    }
}

document.getElementById('boton').addEventListener('click', () => {
    let n1 = parseInt(prompt("Ingrese el primer número."));
    let n2 = parseInt(prompt("Ingrese el segundo número."));
    let n3 = parseInt(prompt("Ingrese el tercer número."));

    mayor(n1, n2, n3);
});