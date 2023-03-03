/*
Programa que haga conteo (y muestre en pantalla los valores) desde cero hasta 50 de dos en dos (ciclo for)
*/

document.getElementById('boton').addEventListener('click', () => {
    let nums = [];
    for (let i = 0; i <= 50; i+=2) {
        nums.push(i);
    }
    alert(nums);
});