// Validación del formulario de login
function validarLogin() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errores = "";

    if (!email) {
        console.log("El email es obligatorio.");
    }
    
    if (!password) {
        console.log("La contraseña es obligatoria.");
    }

    const divErrores = document.getElementById("erroresJS");

    if (errores.length > 0) {
        divErrores.style.display = "block";
        divErrores.innerHTML = "<ul><li>" + errores.join("</li><li>") + "</li></ul>";
        return false;
    }

    // Si todo es correcto, el formulario se enviará a PHP
    return true;
}

// Asociar la validación al envío del formulario
document.getElementById("login").addEventListener("submit", function(event) {
    if (!validarLogin()) {
        event.preventDefault(); // Prevenir el envío si hay errores
    }
});
