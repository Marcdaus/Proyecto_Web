//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DE LAS INCIDENCIAS
//==================================================================================================================================

// Selecciona el formulario con la ID "Inputs_form"
const formcincidencias = document.querySelector("#Inputs_form");

// Añade la función al evento submit
formcincidencias.addEventListener("submit", (event) => {
    event.preventDefault(); // Evita recargar la página

    // Captura los valores del formulario
    const email = document.querySelector("#email").value;
    const lugar = document.querySelector("#lugarinc").value;
    const descripcion = document.querySelector("#descripción").value;

    //console.log(opcion)//Verificación

    // Captura el archivo (si hay uno)
    const archivoInput = document.getElementById("archivo");
    const archivo = archivoInput.files[0] || null;

    // Guarda la incidencia en un array
    const incidencia = { email, lugar, descripcion, archivo };

    // Aquí podrías guardarlo en memoria o mostrarlo
    console.log("Incidencia guardada:", incidencia);
    
     //Notificación de pregunta de guardado
      comprobacion_enviar()

    
});

function comprobacion_enviar() {

  //Crea el dialog y le inserta el texto y los botones
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <p>¿ESTÁS SEGURO DE ENVIAR EL FORMULARIO?</p>
    `;
    //Botones
    const boton_aceptar = document.createElement("button");
    boton_aceptar.textContent = "ENVIAR";

    const boton_cancelar = document.createElement("button");
    boton_cancelar.textContent = "CANCELAR";

    //Inserta en el dialog los botones, y el dialog en el body
    dialog.appendChild(boton_aceptar);
    dialog.appendChild(boton_cancelar);
    document.body.appendChild(dialog);
    dialog.showModal();

    //  Si se pulsa el botón de aceptar
    boton_aceptar.addEventListener("click", () => {

      //Se prueba
        try {
            //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const confirmDialog = document.createElement("dialog");
            confirmDialog.innerHTML = '<p>FORMULARIO ENVIADO CORRECTAMENTE.</p>';
            document.body.appendChild(confirmDialog);
            confirmDialog.showModal();
            //Se automatiza la desaparición del popup
            setTimeout(() => {
              confirmDialog.close();
                window.location.href="./calendario.php";
            }, 1000);
  


        //Si hay error
        } catch (error) {
            //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const errorDialog = document.createElement("dialog");
            errorDialog.innerHTML = '<p>HA HABIDO UN ERROR.<br>POR FAVOR VUELVA A INTENTARLO.</p>';
            document.body.appendChild(errorDialog);
            errorDialog.showModal();

            //Se automatiza la desaparición del popup
                setTimeout(() => {
                    errorDialog.close();
                    console.error("Ha habido un error")
                }, 1000);
        }
    });
    //Si se pulsa el de cancelar se cierra el popup
    boton_cancelar.addEventListener("click", () => {
        dialog.close();
    });
}

