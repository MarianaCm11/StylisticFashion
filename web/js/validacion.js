const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});


var regexUsuario = /^[A-Za-z]+$/; // Solo letras mayúsculas y minúsculas, sin límite de longitud
var regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // Correo electrónico básico
var regexContrasena = /^.{8,}$/; // Mínimo 8 caracteres

document.addEventListener('DOMContentLoaded', function () {
    var formularioRegistro = document.getElementById('formulario-registro');
    var formularioLogin = document.getElementById('formulario-login');
    
    formularioRegistro.addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormularioRegistro();
    });

    formularioLogin.addEventListener('submit', function (event) {
        event.preventDefault();
        validarFormularioLogin();
    });
});

function validarFormularioRegistro() {
    var usuario = document.getElementById('usuario');
    var correo = document.getElementById('correo');
    var contrasena = document.getElementById('contrasena');
    
    var usuarioValido = validarCampo(usuario, regexUsuario, 'usuario-error', 'Nombre de usuario inválido. Solo se permiten letras.');
    var correoValido = validarCampo(correo, regexCorreo, 'correo-error', 'Correo electrónico inválido.');
    var contrasenaValida = validarCampo(contrasena, regexContrasena, 'contrasena-error', 'Contraseña inválida. Debe tener al menos 8 caracteres.');

    if (usuarioValido && correoValido && contrasenaValida) {
        document.getElementById('formulario-registro').submit();
    }
}

function validarFormularioLogin() {
    var correoLogin = document.getElementById('correo-login');
    var contrasenaLogin = document.getElementById('contrasena-login');
    
    var correoLoginValido = validarCampo(correoLogin, regexCorreo, 'correo-login-error', 'Correo electrónico inválido.');
    var contrasenaLoginValida = validarCampo(contrasenaLogin, regexContrasena, 'contrasena-login-error', 'Contraseña inválida. Debe tener al menos 8 caracteres.');

    if (correoLoginValido && contrasenaLoginValida) {
        document.getElementById('formulario-login').submit();
    }
}

function validarCampo(campo, regex, errorId, mensajeError) {
    var errorMensaje = document.getElementById(errorId);
    
    if (campo.value.trim() === '') {
        campo.classList.add('error');
        campo.classList.remove('correcto');
        errorMensaje.textContent = 'Este campo es obligatorio.';
        errorMensaje.classList.add('active');
        return false;
    } else if (!regex.test(campo.value)) {
        campo.classList.add('error');
        campo.classList.remove('correcto');
        errorMensaje.textContent = mensajeError;
        errorMensaje.classList.add('active');
        return false;
    } else {
        campo.classList.remove('error');
        campo.classList.add('correcto');
        errorMensaje.classList.remove('active');
        return true;
    }
}

// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputId) {
  var input = document.getElementById(inputId);
  var eyeIcon = input.previousElementSibling; // El icono del ojo

  if (input.type === 'password') {
      input.type = 'text';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash'); // Cambia el icono
  } else {
      input.type = 'password';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye'); // Cambia el icono
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const regresarBtn = document.getElementById('regresar-btn');

    regresarBtn.addEventListener('click', function() {
        const regresarLink = regresarBtn.getAttribute('data-link');
        if (regresarLink) {
            window.location.href = regresarLink;
        }
    });
});

