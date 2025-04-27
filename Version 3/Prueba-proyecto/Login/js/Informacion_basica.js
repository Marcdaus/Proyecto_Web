//==================================================================================================================================
//                                     AQUI EMPIEZA EL CÓDIGO DE INFORMACIÓN BÁSICA
//==================================================================================================================================

// Esta función se ejecuta automáticamente cuando se ha cargado toda la página
window.onload = function () {
    // Intenta obtener el objeto 'usuario' almacenado en localStorage y lo convierte desde texto a un objeto JavaScript
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    // Si no existe un usuario en localStorage, muestra un error en la consola y termina la función
    if (!usuario) {
        console.error("No hay usuario en localStorage");
        return;
    }

    // Extrae datos del objeto usuario, si no existen se colocan valores por defecto
    const Dni = usuario.dni || "No disponible";
    const Nombre = usuario.nombre || "No disponible";
    const apellidos = (usuario.apellido1 || "") + " " + (usuario.apellido2 || "");
    const curso = usuario.curso || "Sin curso";
    const fecha = usuario.fecha || "Sin fecha";

    // Asigna los datos obtenidos a elementos del HTML usando sus IDs
    document.querySelector("#Dni-info").textContent = Dni;
    document.querySelector("#nombre-info").textContent = Nombre;
    document.querySelector("#apellidos-info").textContent = apellidos;
    document.querySelector("#curso-info").textContent = curso;
    document.querySelector("#fecha_alta-info").textContent = fecha;
};
