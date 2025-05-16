//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DE LOS AJUSTES
//==================================================================================================================================



//Se obtienen los datos del localStorage que almacena los usuarios
const usuario = JSON.parse(localStorage.getItem("usuario"));

//Cuando la página se cargue 
window.onload = function () {

    //Se obtienen los datos del localStorage que almacena las selecciones
    const saved = JSON.parse(localStorage.getItem('miSeleccion')) || [];

    console.log(saved);
    //Se añade un evento en cuanto se cargue la página
    document.addEventListener("DOMContentLoaded", function () {
        const tamañoSelect = document.getElementById("tamaño");
        
        if (tamañoSelect) {
            tamañoSelect.value = "mediano";
        }
    });
    
    //Guarda los valores del indice donde esta el usuario y los valores predeterminados
    let mi_tema = "tema_claro";
    let mi_tamano = "mediano";
    let mi_tipografia = "arial";

        // Si no existe, guardamos las preferencias por defecto
        let preferencias_usuario = {
            tema: mi_tema,
            tamano: mi_tamano,
            tipografia: mi_tipografia
        };

               //Se sube el elemento a la lista
        saved.push(preferencias_usuario);
        
        //Se guarda en el local storage la selección
        localStorage.setItem("miSeleccion", JSON.stringify(saved));
    

    // Asignamos los valores al formulario
    document.getElementById('tema').value = mi_tema;
    document.getElementById('tamaño').value = mi_tamano;
    document.getElementById('tipografia').value = mi_tipografia;
}

//==================================================================================================================================
//==================================================================================================================================
document.querySelector("#form_ajustes").addEventListener("submit", (event) => {
    event.preventDefault();

    const saved = JSON.parse(localStorage.getItem('miSeleccion')) || [];

    let user_tema = document.getElementById("tema").value;
    let user_tamano = document.getElementById("tamaño").value;
    let user_tipografia = document.getElementById("tipografia").value;

try {
    // Mostramos un <dialog> de confirmación antes de guardar
    const confirmacion = document.createElement("dialog");
    confirmacion.innerHTML = `
        <p>¿Deseas guardar los cambios?</p>
        <button id="confirmarGuardar">Guardar</button>
        <button id="cancelarGuardar">Cancelar</button>
    `;
    document.body.appendChild(confirmacion);
    confirmacion.showModal();

    // Botón Confirmar
    document.getElementById("confirmarGuardar").addEventListener("click", () => {
        try {
            // Buscamos al usuario

            let preferencias_usuario = {
                tema: user_tema,
                tamano: user_tamano,
                tipografia: user_tipografia
            };
            // Si no existe, agregamos
            saved.push(preferencias_usuario);

            localStorage.setItem("miSeleccion", JSON.stringify(saved));

            confirmacion.close(); // Cerramos el modal de confirmación

            // Mostrar mensaje de éxito
            const confirmDialog = document.createElement("dialog");
            confirmDialog.innerHTML = '<p>SE HA ENVIADO CORRECTAMENTE</p>';
            document.body.appendChild(confirmDialog);
            confirmDialog.showModal();

            setTimeout(() => {
                confirmDialog.close();
                window.location.href="cuenta.php";
            }, 1000);
        } catch (error) {
            confirmacion.close(); // Cerramos el modal de confirmación si hay error

            // Mostrar mensaje de error
            const errorDialog = document.createElement("dialog");
            errorDialog.innerHTML = '<p>HA HABIDO UN ERROR.<br>VUELVE A INTENTARLO O ESCRIBE UNA INCIDENCIA.</p>';
            document.body.appendChild(errorDialog);
            errorDialog.showModal();

            setTimeout(() => {
                errorDialog.close();
                console.error("Ha habido un error");
            }, 1000);
        }
    });

    // Botón Cancelar
    document.getElementById("cancelarGuardar").addEventListener("click", () => {
        confirmacion.close();
    });

} catch (error) {
    const errorDialog = document.createElement("dialog");
    errorDialog.innerHTML = '<p>HA HABIDO UN ERROR.<br>VUELVE A INTENTARLO O ESCRIBE UNA INCIDENCIA.</p>';
    document.body.appendChild(errorDialog);
    errorDialog.showModal();

    setTimeout(() => {
        errorDialog.close();
        console.error("Ha habido un error");
    }, 1000);
}

});

//==================================================================================================================================
//                                              CANCELARO()
//==================================================================================================================================

function cancelar(){
    //Vuelvo a obtenerlos datos del localstorage
    const saved = JSON.parse(localStorage.getItem('miSeleccion')) || [];

    //Se guardan en variables el index y los ajustes predeterminados

    //Ajustes predeterminados
    let mi_tema = "tema_claro";
    let mi_tamano = "mediano";
    let mi_tipografia = "arial";

    // Si existe el usuario, cargamos sus preferencias
    
        // Si no existe, guardamos las preferencias por defecto
        let preferencias_usuario = {
            tema: mi_tema,
            tamano: mi_tamano,
            tipografia: mi_tipografia
        };

        //Se sube el elemento a la lista
        saved.push(preferencias_usuario);
        
        //Se guarda en el local storage la selección
        localStorage.setItem("miSeleccion", JSON.stringify(saved));
    

    // Asignamos los valores al formulario
    document.getElementById('tema').value = mi_tema;
    document.getElementById('tamaño').value = mi_tamano;
    document.getElementById('tipografia').value = mi_tipografia;

    window.location.href="cuenta.php";

}