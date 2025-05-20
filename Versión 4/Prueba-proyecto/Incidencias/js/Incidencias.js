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

    // Guarda la incidencia en un array (puedes almacenarlo en localStorage o IndexedDB si quieres persistencia)
    const incidencia = { email, lugar, descripcion, archivo };

    // Aquí podrías guardarlo en memoria o mostrarlo
    console.log("Incidencia guardada:", incidencia);
    
     //Notificación de pregunta de guardado
    Swal.fire({
      title: '¿Deseas guardar los cambios?',
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      // Si sale bien, se ejecuta la notificación siguiente
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('FORMULARIO ENVIADO CORRECTAMENTE.', '', 'success');

          // Resetea los inputs
          formcincidencias.reset()
        } 
      //Si sale mal, se activa esta notificación de error
      }).catch((error)=>{
        if(error){
          Swal.fire('HA HABIDO UN ERROR.POR FAVOR VUELVA A INTENTARLO.', '', 'error');
        }
      });

    
});


