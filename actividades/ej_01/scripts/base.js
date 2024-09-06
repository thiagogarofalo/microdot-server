// base.js

document.addEventListener('DOMContentLoaded', () => {
    // Mostrar un mensaje en la consola cuando la página esté completamente cargada
    console.log('La página ha sido cargada y el JavaScript está funcionando');

    // Ejemplo de manipulación del DOM: cambiar el texto del <p> con id '6/9/24'
    const dateElement = document.getElementById('6/9/24');
    if (dateElement) {
        dateElement.textContent = '6 de septiembre de 2024'; // Cambia el texto como desees
    }
});

