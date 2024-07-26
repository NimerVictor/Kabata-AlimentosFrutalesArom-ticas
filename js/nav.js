
$(document).ready(function () {
    $('#login-tab').click(function () {
        $(this).addClass('active');
        $('#register-tab').removeClass('active');
        $('#login-form').removeClass('d-none');
        $('#register-form').addClass('d-none');
        $('#registrar').css('width', '30%');
       
    });
    $('#register-tab').click(function () {
        $(this).addClass('active');
        $('#login-tab').removeClass('active');
        $('#login-form').addClass('d-none');
        $('#register-form').removeClass('d-none');
        $('#registrar').css('width', '40%');
  
    });
});
