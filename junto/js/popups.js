//==================================================================================================
//
//                               POPUPS DE TODO EL PROYECTO
//
//                                 F()->TEXTO/ERROR
//
//==================================================================================================
//                                         INCIDENCIAS
//==================================================================================================
export function comprobacion_enviar() {

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

//===================================================================================
//                            GUARDAR GRUPOS PARTE AÑADIR
//===================================================================================
 function comprobacion_grupos_hechos() {

    //Crea el dialog y le inserta el texto y los botones
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <p>¿ESTÁS SEGURO DE REALIZAR LOS CAMBIOS?</p>
    `;
    //Botones
    const boton_aceptar = document.createElement("button");
    boton_aceptar.textContent = "GUARDAR";

    const boton_cancelar = document.createElement("button");
    boton_cancelar.textContent = "CANCELAR";

    //Se crea el dialog con su texto correspondiente
    dialog.appendChild(boton_aceptar);
    dialog.appendChild(boton_cancelar);
    document.body.appendChild(dialog);
    dialog.showModal();

    //  Si se pulsa el botón de aceptar
    boton_aceptar.addEventListener("click", () => {
        try {
            //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const confirmDialog = document.createElement("dialog");
            confirmDialog.innerHTML = '<p>CAMBIOS REALIZADOS CORRECTAMENTE</p>';
            document.body.appendChild(confirmDialog);
            confirmDialog.showModal();

            //Se automatiza la desaparición del popup
            setTimeout(() => {
              confirmDialog.close();
            }, 1000);
            
        } catch (error) {
            //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const errorDialog = document.createElement("dialog");
            errorDialog.innerHTML = '<p>HA HABIDO UN ERROR. <br> VUELVE A INTENTARLO O ESCRIBE UNA INCIDENCIA</p>';
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
//===================================================================================
//                               EDITAR GRUPOS
//===================================================================================
//                                GUARDARGRUPOS()
//===================================================================================
export function guardarGrupo() {
  //Selecciona el elemento
  const guardar = document.getElementById('guardar');
  
  //Si no existe salta error
  if (!guardar) {
      console.error("El botón 'guardar' no existe en el DOM.");
      return;
  }
  //Crea el elemento
  const dialog=document.createElement("dialog")

  //Si lo introducido es "error" que salte el error
  if (document.getElementById('nombre_grupo').value.toLowerCase() === "error") {
      console.error("El grupo introducido no es correcto o repetido");

      //Crea el elemento
      dialog.innerHTML='<p> El grupo introducido no es correcto o repetido</p>'
      document.body.appendChild(dialog);

      //Lo enseña
      dialog.showModal()

      //Auutomátiza el error
      setTimeout(()=>{
        dialog.close()
        console.error("Ha habido un error")
      },2000)
      return;
 }

      // Redirigir a otra página
  window.location.href = "añadirgrupos.html";
}
//===================================================================================
//                                 TAREAS ALUMNO
//===================================================================================
export function comprobacion_enviar_tarea() {
    //Crea el dialog y le inserta el texto y los botones
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
        <p>¿ESTÁS SEGURO DE QUE QUIERES ENVIARLO?</p>
    `;

    //Botones
    const boton_aceptar = document.createElement("button");
    boton_aceptar.textContent = "ENVIAR";

    const boton_cancelar = document.createElement("button");
    boton_cancelar.textContent = "CANCELAR";
    //Se crea el dialog con su texto correspondiente
    dialog.appendChild(boton_aceptar);
    dialog.appendChild(boton_cancelar);
    document.body.appendChild(dialog);
    dialog.showModal();
    //Si se pulsa el de enviar
    boton_aceptar.addEventListener("click", () => {
        try {
            //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const confirmDialog = document.createElement("dialog");
            confirmDialog.innerHTML = '<p>SE HA ENVIADO CORRECTAMENTE</p>';
            document.body.appendChild(confirmDialog);
            confirmDialog.showModal();

            //Se automatiza el cierre del popup
            setTimeout(() => {
              confirmDialog.close();
            }, 1000);
  
        } catch (error) {
          //Se cierra el popup anterior
            dialog.close();

            //Se crea el dialog con su texto correspondiente
            const errorDialog = document.createElement("dialog");
            errorDialog.innerHTML = '<p>HA HABIDO UN ERROR.<br>VUELVE A INTENTARLO O ESCRIBE UNA INCIDENCIA.</p>';
            document.body.appendChild(errorDialog);
            errorDialog.showModal();

          //Se automatiza el cierre del popup
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
//===================================================================================
//                            CAMBIAR CONTRASEÑA
//===================================================================================
export function comprobacion_cambiar_contraseña() {
        try {
            //Se crea el dialog con su texto correspondiente
            const confirmDialog = document.createElement("dialog");
            confirmDialog.innerHTML = '<p>SE HA ENVIADO CORRECTAMENTE</p>';
            document.body.appendChild(confirmDialog);
            confirmDialog.showModal();

            //Se automatiza el cierre
            setTimeout(() => {
              confirmDialog.close();
            }, 1000);
            
        } catch (error) {            
          //Se crea el dialog con su texto correspondiente
            const errorDialog = document.createElement("dialog");
            errorDialog.innerHTML = '<p>HA HABIDO UN ERROR.<br>VUELVE A INTENTARLO O ESCRIBE UNA INCIDENCIA.</p>';
            document.body.appendChild(errorDialog);
            errorDialog.showModal();

            //Se automatiza el cierre
            setTimeout(() => {
              errorDialog.close();
              console.error("Ha habido un error")
            }, 1000);
        }
    }
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================