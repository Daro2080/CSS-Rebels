// Asegúrate de que este script se ejecute después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.opciones');

    navToggle.addEventListener('click', () => {
        console.log('Hamburguesa clickeada'); // Agrega esto para depuración
        navMenu.classList.toggle('show-menu');
    });
});
