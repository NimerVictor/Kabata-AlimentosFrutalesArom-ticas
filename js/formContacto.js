document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');

    // Recuperar datos de localStorage y sessionStorage
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('phone').value = localStorage.getItem('phone') || '';
    document.getElementById('email').value = sessionStorage.getItem('email') || '';
    document.getElementById('message').value = sessionStorage.getItem('message') || '';

    // Guardar datos en localStorage y sessionStorage cuando se escriben
    document.getElementById('name').addEventListener('input', function () {
        localStorage.setItem('name', this.value);
    });

    document.getElementById('phone').addEventListener('input', function () {
        localStorage.setItem('phone', this.value);
    });

    document.getElementById('email').addEventListener('input', function () {
        localStorage.setItem('email', this.value);
    });

    document.getElementById('message').addEventListener('input', function () {
        localStorage.setItem('message', this.value);
    });

    document.getElementById('name').addEventListener('input', function () {
        sessionStorage.setItem('name', this.value);
    });

    document.getElementById('phone').addEventListener('input', function () {
        sessionStorage.setItem('phone', this.value);
    });
    
    document.getElementById('email').addEventListener('input', function () {
        sessionStorage.setItem('email', this.value);
    });

    document.getElementById('message').addEventListener('input', function () {
        sessionStorage.setItem('message', this.value);
    });

    // Limpiar almacenamiento al enviar el formulario
    form.addEventListener('submit', function (event) {
        localStorage.removeItem('name');
        localStorage.removeItem('phone');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('message');
    });
});
