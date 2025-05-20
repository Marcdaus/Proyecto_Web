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
    let userIndex = saved.findIndex(item => item.email === usuario.email);
    let mi_tema = "tema_claro";
    let mi_tamano = "mediano";
    let mi_tipografia = "arial";

    // Si existe el usuario, cargamos sus preferencias
    if (userIndex !== -1) {
        const user = saved[userIndex];
        mi_tema = user.tema;
        mi_tamano = user.tamano;
        mi_tipografia = user.tipografia;
    } else {
        // Si no existe, guardamos las preferencias por defecto
        let preferencias_usuario = {
            email: usuario.email,
            tema: mi_tema,
            tamano: mi_tamano,
            tipografia: mi_tipografia
        };

               //Se sube el elemento a la lista
        saved.push(preferencias_usuario);
        
        //Se guarda en el local storage la selección
        localStorage.setItem("miSeleccion", JSON.stringify(saved));
    }

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

    Swal.fire({
        title: '¿Deseas guardar los cambios?',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
    }).then((result) => {
        if (result.isConfirmed) {
            // Buscamos al usuario
            let userIndex = saved.findIndex(item => item.email === usuario.email);

            let preferencias_usuario = {
                email: usuario.email,
                tema: user_tema,
                tamano: user_tamano,
                tipografia: user_tipografia
            };

            if (userIndex !== -1) {
                // Si ya existe, actualizamos
                saved[userIndex] = preferencias_usuario;
            } else {
                // Si no existe, agregamos
                saved.push(preferencias_usuario);
            }

            localStorage.setItem("miSeleccion", JSON.stringify(saved));



            Swal.fire('FORMULARIO ENVIADO CORRECTAMENTE.', '', 'success');
        }
    }).catch((error) => {
        if (error) {
            Swal.fire('HA HABIDO UN ERROR. POR FAVOR VUELVA A INTENTARLO.', '', 'error');
        }
    });
});

//==================================================================================================================================
//                                              CANCELARO()
//==================================================================================================================================

function cancelar(){
    //Vuelvo a obtenerlos datos del localstorage
    const saved = JSON.parse(localStorage.getItem('miSeleccion')) || [];

    //Se guardan en variables el index y los ajustes predeterminados
    let userIndex = saved.findIndex(item => item.email === usuario.email);

    //Ajustes predeterminados
    let mi_tema = "tema_claro";
    let mi_tamano = "mediano";
    let mi_tipografia = "arial";

    // Si existe el usuario, cargamos sus preferencias
    if (userIndex !== -1) {
        const user = saved[userIndex];
        mi_tema = user.tema;
        mi_tamano = user.tamano;
        mi_tipografia = user.tipografia;
    } else {
        // Si no existe, guardamos las preferencias por defecto
        let preferencias_usuario = {
            email: usuario.email,
            tema: mi_tema,
            tamano: mi_tamano,
            tipografia: mi_tipografia
        };

        //Se sube el elemento a la lista
        saved.push(preferencias_usuario);
        
        //Se guarda en el local storage la selección
        localStorage.setItem("miSeleccion", JSON.stringify(saved));
    }

    // Asignamos los valores al formulario
    document.getElementById('tema').value = mi_tema;
    document.getElementById('tamaño').value = mi_tamano;
    document.getElementById('tipografia').value = mi_tipografia;

}