    
// Función para cambiar a formulario de contraseñas
function cambiar_formulario() {
    document.getElementById("registro_credenciales").classList.remove("active");
    document.getElementById("registro_contraseña").classList.add("active");
}

// Función para volver al formulario de credenciales mediante el boton de html
function volver() {
    document.getElementById("registro_contraseña").classList.remove("active");
    document.getElementById("registro_credenciales").classList.add("active");
}

// Validación del primer formulario
async function validarCredenciales() {
    //variables
    const nombre = document.getElementById("nombre").value.trim();
    const institucion = document.getElementById("institucion").value.trim();
    const email = document.getElementById("email").value.trim();
    const errores = [];

    if (!nombre){errores.push("El nombre es obligatorio.");
        console.error("Error: el campo del nombre esta vacio"); }
    
    if (!institucion){ errores.push("La institución es obligatoria.");
        console.error("Error: el campo de institución esta vacio"); }

    if (!email){ errores.push("El email es obligatorio.");
        console.error("Error: el campo del email esta vacio"); }

    // Comprobamos si el email ya está registrado 
    const response = await fetch('json/usuarios.json');
    const usuarios = await response.json();
    const emailExiste = usuarios.some(usuario => usuario.email === email);

    if(emailExiste){ errores.push("El email ya existe.");
        console.error("Error: cuenta ya registrada"); }
     
    const divErrores = document.getElementById("erroresJS");
    
    //este if se encarga de ver si la variable errores esta vacio y si no lo esta genera un lista de errores en html
    if (errores.length > 0) {
        divErrores.style.display = "block";
        divErrores.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
        return;
    }

    // Rellenamos los campos ocultos del formulario de contraseña
    document.querySelector("#registro_contraseña input[name='nombre']").value = nombre;
    document.querySelector("#registro_contraseña input[name='institucion']").value = institucion;
    document.querySelector("#registro_contraseña input[name='email']").value = email;
    
    // para que no se vean
    divErrores.style.display = "none";
    cambiar_formulario();
}

// Validación del segundo formulario
function validarContraseñas() {
    //variables
    const pass1 = document.getElementById("contraseña").value;
    const pass2 = document.getElementById("contraseña2").value;
    const errores2 = [];

    if (!pass1 || !pass2) {
        errores2.push("Ambos campos de contraseña son obligatorios.");
        console.error("Error: Hay campos vacios");
    } 
    if (pass1 !== pass2) {
        errores2.push("Las contraseñas no coinciden.");
        console.error("Error: Las contraseñas no coinciden");
    } 
    if (pass1.length < 9) {
        errores2.push("La contraseña debe tener al menos 9 caracteres.");
        console.error("Error: La contraseña debe tener al menos 9 caracteres ");
    }

    const erroresDiv = document.getElementById("erroresPass");
    if (errores2.length > 0) {
        erroresDiv.style.display = "block";
        erroresDiv.innerHTML = "<ul><li>" + errores2.join("</li><li>") + "</li></ul>";
        return false;
    }

    erroresDiv.style.display = "none";
    return true;
}
