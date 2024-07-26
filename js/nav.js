//Se encarga de hacer que los botones del formulario 
//"Crear Cuenta e Inicio" se muestren
$(document).ready(function () {
    $('#login-tab').click(function () {
        $(this).addClass('active-btn');
        $('#register-tab').removeClass('active-btn');
        $('#login-form').addClass('active-form');
        $('#register-form').removeClass('active-form');
        if ($(window).width() > 800) {
            $('#form-container').css('width', '40%'); // Ajustar el ancho para iniciar sesión
        }
    });
    $('#register-tab').click(function () {
        $(this).addClass('active-btn');
        $('#login-tab').removeClass('active-btn');
        $('#login-form').removeClass('active-form');
        $('#register-form').addClass('active-form');
        if ($(window).width() > 800) {
            $('#form-container').css('width', '70%'); // Ajustar el ancho para crear cuenta
        }
    });
    $(window).resize(function () {
        if ($(window).width() <= 800) {
            $('#form-container').css('width', '70%');
        } else {
            if ($('#login-tab').hasClass('active-btn')) {
                $('#form-container').css('width', '40%');
            } else if ($('#register-tab').hasClass('active-btn')) {
                $('#form-container').css('width', '70%');
            }
        }
    });
});
document.getElementById('login-tab').addEventListener('click', function () {
    document.getElementById('login-form').classList.remove('d-none');
    document.getElementById('register-form').classList.add('d-none');
});

document.getElementById('register-tab').addEventListener('click', function () {
    document.getElementById('login-form').classList.add('d-none');
    document.getElementById('register-form').classList.remove('d-none');
});

document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    //Se convalida que los campos se hayan llenado correctamente 
    const fields = ['first-name', 'last-name', 'register-email', 'register-mobile', 'date', 'address', 'rangoIngreso', 'gradoAcademico', 'gender'];
    let allFieldsFilled = true;

    fields.forEach(field => {
        const element = document.getElementById(field);
        if (element.value.trim() === '') {
            allFieldsFilled = false;
            element.classList.add('is-invalid');
        } else {
            element.classList.remove('is-invalid');
        }
    });

    if (!allFieldsFilled) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    //Se guardan los datos en un LocalStorage
    const userData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('register-email').value,
        mobile: document.getElementById('register-mobile').value,
        birthDate: document.getElementById('date').value,
        address: document.getElementById('address').value,
        incomeRange: document.getElementById('rangoIngreso').value,
        academicDegree: Array.from(document.getElementById('gradoAcademico').selectedOptions).map(option => option.value),
        gender: document.getElementById('gender').value
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Registro exitoso');
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.email === email) {
        sessionStorage.setItem('isLoggedIn', true);
        alert('Inicio de sesión exitoso');
    } else {
        alert('Email o contraseña incorrectos');
    }
});

window.addEventListener('load', function () {
    if (sessionStorage.getItem('isLoggedIn')) {
        alert('Ya has iniciado sesión');
    }
});
