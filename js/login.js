
$(document).ready(function () {
    $('#fechaNacimiento').on('change', function () {
        const fechaNacimiento = new Date($(this).val());
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        $('#edad').val(edad);
    });

    $('#registroForm').on('submit', function (event) {
        event.preventDefault();
        alert('Formulario enviado. Edad calculada: ' + $('#edad').val());
    });
});

