
        // Variables globales para guardar temporalmente los datos del primer formulario
        let nombre = '';
        let institucion = '';
        let email = '';

        function validarCredenciales() {
            nombre = document.querySelector('#nombre').value.trim();
            institucion = document.querySelector('#institucion').value.trim();
            email = document.querySelector('input[name="email"]').value.trim();

            // Validación simple
            if (nombre === '' || institucion === '' || email === '') {
                Swal.fire("Error", "Por favor, completa todos los campos.", "error");
                return;
            }

            // Pasamos datos al segundo formulario
            document.querySelector('#registro_contraseña [name="nombre"]').value = nombre;
            document.querySelector('#registro_contraseña [name="institucion"]').value = institucion;
            document.querySelector('#registro_contraseña [name="email"]').value = email;

            // Cambiamos de formulario
            document.getElementById("registro_credenciales").classList.remove("active");
            document.getElementById("registro_contraseña").classList.add("active");
        }

        function volver() {
            document.getElementById("registro_contraseña").classList.remove("active");
            document.getElementById("registro_credenciales").classList.add("active");
        }

        function validarContraseñasAntesDeEnviar() {
            const pass1 = document.getElementById("contraseña").value;
            const pass2 = document.getElementById("contraseña2").value;

            if (pass1 !== pass2 || pass1 === '') {
                Swal.fire("Error", "Las contraseñas no coinciden o están vacías.", "error");
                return false;
            }

            return true;
        }
