//=======================================================================================================
//                                        CARGAR GRUPOS
//=======================================================================================================
//Carga los grupos al entrar en la página
      window.onload = cargarGrupos;
      

      async function cargarGrupos() {

        //Recopila los datos del json
        const response = await fetch('json/grupos.json');
        const data = await response.json();
      
        const container = document.getElementById('Grupos');
        if (!container) {
          console.error("No se encontró el contenedor con id 'Grupos'");
          return;
        }
      
        container.innerHTML = '';
      //Para cada grupo se crea un div 
        data.grupos.forEach((grupo) => {
          const div = document.createElement('div');
          div.className = 'grupo';
      
          // Creamos el botón de editar por separado
          const editButton = document.createElement('a');
          editButton.href = 'editar.php';
          editButton.title = 'Editar grupo';
          editButton.innerHTML = '<img src="img/icono/Lapiz.png" alt="Editar">';
      
          // Guardamos el grupo al hacer clic
          editButton.addEventListener('click', () => {
            if(grupo==="Grupo 1"){
              guardarGrupo(grupo);
              CSSConditionRule.log("Guardado el grupo 1")
            }
            guardarGrupo(grupo);
            console.log("Guardado el 2")
          });
      
          // Estructura del div
          const encabezado = document.createElement('h3');
          encabezado.textContent = grupo.nombre + ' ';
          encabezado.appendChild(editButton);

          //Se introducen los miembros de los grupos
          const listaMiembros = document.createElement('ul');
          grupo.miembros.forEach(nombre => {
            const li = document.createElement('li');
            li.textContent = nombre;
            listaMiembros.appendChild(li);
          });
      
          div.appendChild(encabezado);
          div.appendChild(listaMiembros);
          container.appendChild(div);
        });
      }
      //Almacena los grupos en el localstorage
      function guardarGrupo(grupo) {
        localStorage.setItem('grupoAEditar', JSON.stringify(grupo));
        localStorage.setItem(`miembros_${grupo.nombre}`, JSON.stringify(grupo.miembros));
        }      



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
              window.location.href='tareas.php';
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
    })
  }