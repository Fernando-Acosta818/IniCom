/*
Programa que dentro de una función, a partir de una edad ingresada, 
indique si la persona es mayor o menor de edad, el valor de edad, 
debe ser enviada a esa función por medio de puntero o apuntador (paso por referencia)
*/

document.getElementById('boton').addEventListener('click', () => {
    function mayorDeEdad(edad) { 
        if(edad >= 18) { 
            return alert('Usted es mayor de edad'); 
        } else {
            return alert('Usted es menor de edad');
        }
    } 
    
    let entrada = parseInt(prompt('Ingrese su edad')); 
    let edad = { 'valor' : entrada } 
    
    mayorDeEdad(edad['valor']);
});