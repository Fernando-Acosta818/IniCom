/*
Programa que haga conteo regresivo (y muestre en pantalla los valores) desde 100 hasta cero, con decremento de 5 (ciclo for)
*/

document.getElementById('boton').addEventListener('click', () => {
    let nums = [];
    for (let i = 100; i >= 0; i-=5) {
        nums.push(i);
    }
    alert(nums);
});