document.addEventListener('DOMContentLoaded', function() {    
    //Formulario
    const form = document.querySelector('.formulario form');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const mensajeTextarea = document.getElementById('mensaje');
    const btnEnviar = document.getElementById('btn-enviar');
    //Error
    const errorNombre = document.getElementById('error-nombre');
    const errorApellido = document.getElementById('error-apellido');
    const errorEmail = document.getElementById('error-email');
    const errorMensaje = document.getElementById('error-mensaje');

    

    function mostrarError(element, message, errorSpan) {
            element.classList.add('invalid'); 
            errorSpan.textContent = message;
            errorSpan.classList.add('active'); 
    }

    function ocultarError(element, errorSpan) {
        element.classList.remove('invalid'); 
        errorSpan.textContent = ''; 
        errorSpan.classList.remove('active'); 
    }

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return re.test(String(email).toLowerCase());
    }

    if (nombreInput && errorNombre) { 
        nombreInput.addEventListener('input', () => {
            if (nombreInput.value.trim() === '') {
                mostrarError(nombreInput, 'El nombre es obligatorio.', errorNombre);
            } else {
                ocultarError(nombreInput, errorNombre);
            }
        });
    }

    if (apellidoInput && errorApellido) {
        apellidoInput.addEventListener('input', () => {
            if (apellidoInput.value.trim() === '') {
                mostrarError(apellidoInput, 'El apellido es obligatorio.', errorApellido);
            } else {
                ocultarError(apellidoInput, errorApellido);
            }
        });
    }

    if (emailInput && errorEmail) {
        emailInput.addEventListener('input', () => {
            if (emailInput.value.trim() === '') {
                mostrarError(emailInput, 'El email es obligatorio.', errorEmail);
            } else if (!validarEmail(emailInput.value.trim())) {
                mostrarError(emailInput, 'Por favor, introduce un email válido.', errorEmail);
            } else {
                ocultarError(emailInput, errorEmail);
            }
        });
    }

    if (form) { 
        form.addEventListener('submit', function(event) {
            let formValido = true; 
        
            if (nombreInput && nombreInput.value.trim() === '') {
                mostrarError(nombreInput, 'El nombre es obligatorio.', errorNombre);
                formValido = false;
            } else if (nombreInput) {
                ocultarError(nombreInput, errorNombre);
            }

            if (apellidoInput && apellidoInput.value.trim() === '') {
                mostrarError(apellidoInput, 'El apellido es obligatorio.', errorApellido);
                formValido = false;
            } else if (apellidoInput) {
                ocultarError(apellidoInput, errorApellido);
            }

            if (emailInput && emailInput.value.trim() === '') {
                mostrarError(emailInput, 'El email es obligatorio.', errorEmail);
                formValido = false;
            } else if (emailInput && !validarEmail(emailInput.value.trim())) {
                mostrarError(emailInput, 'Por favor, introduce un email válido.', errorEmail);
                formValido = false;
            } else if (emailInput) {
                ocultarError(emailInput, errorEmail);
            }
        
            if (mensajeTextarea && mensajeTextarea.value.trim() === '') {
                mostrarError(mensajeTextarea, 'El mensaje es obligatorio.', errorMensaje);
                formValido = false;
            } else if (mensajeTextarea) {
                ocultarError(mensajeTextarea, errorMensaje);
            }
        
            if (!formValido) {
                event.preventDefault(); 
                alert('Por favor, corrija los errores antes de enviar.');
            }
        });
    } 
});