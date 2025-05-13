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