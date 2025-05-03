    // variables
    let vista_Profesor = true;

    const cuerpo_tabla = document.getElementById('cuerpo_tabla');
    const encabezado_tabla = document.getElementById('encabezado_tabla');
    const btn_crearTarea = document.createElement('button');  
    btn_crearTarea.textContent = 'Crear tarea'; 

    const vista = document.getElementById('profesor_alumno');
    const buscador = document.getElementById('buscador');

    const tareas = [ 
      {id: 1, estado: "enviada", fecha_apertura: "29/05/2025", fecha_cierre: "01/06/2025", fecha_entrega: "30/05/2025", nickname: "marc", descripción: "hay que realizar lo aprendido en clase", tipo_tarea: "test", ID_asignatura: "fisica", nombre: "tarea_1"},
      {id: 2, estado: "enviada", fecha_apertura: "10/05/2025", fecha_cierre: "20/05/2025", fecha_entrega: "13/05/2025", nickname: "marc", descripción: "tienes que hacer los programas 1 y 2", tipo_tarea: "practico", ID_asignatura: "programacion", nombre: "tarea_2"}
    ];

    // Cambiar entre vista de Profesor y Alumno 
    vista.addEventListener('click', () => {
      vista_Profesor = !vista_Profesor; // cambiamos el valor de la variable de true a false o de false a true
      //este if se encargará de cambiar el nombre del botón
      if (vista_Profesor){
        vista.textContent = 'Cambiar a Alumno';
      }else{
        vista.textContent = 'Cambiar a Profesor';
      }
      tabla_tareas(buscador.value); // Volver a genrar las tareas pero en modo alumno/profesor
    });

    // este metodo nos permite recoger lo que se esta escriviendo en el input a tiempo real
    buscador.addEventListener('input', (texto) => {
      tabla_tareas(texto.target.value);
    });

    // esta funcion es la que genera la tabla con toda la informacion necesaria
    function tabla_tareas(texto = '') {
      //limpiamos el contenido anterior
      cuerpo_tabla.innerHTML = '';
      encabezado_tabla.innerHTML = '';

      // este se encargara de cambiar la cabecera de la tabla segun en que usario estes
      if (vista_Profesor) {
        encabezado_tabla.innerHTML = `
          <!-- Este botón se generará en el encabezado de la tabla cuando sea vista de Profesor -->
          <th>    <button class="crear_tarea" onclick="crear_tarea()">Crear tarea</button></th> 
          <th>FECHA APERTURA</th>
          <th>FECHA CIERRE</th>
          <th>ACCIONES</th>
        `;
      } else {
        encabezado_tabla.innerHTML = `
          <th>NOMBRE</th>
          <th>FECHA APERTURA</th>
          <th>FECHA CIERRE</th>
          <th>FECHA ENTREGA</th>
          <th>ESTADO</th>
        `;
      }

      /* Comprobamos si la fecha de apertura de la tarea incluye la cadena que el usuario escribió y si eltexto conicide con alguna tarea, 
      para ello utilizamos toLowerCase que convierte los dos textos en minuscula par poder comprarlos mejor */
      tareas.filter(tarea => {return tarea.fecha_apertura.includes(texto) || tarea.nombre.toLowerCase().includes(texto.toLowerCase());})
        // con el forEach vamos comprobando cada tarea
        .forEach(tarea => {
          const fila = document.createElement('tr');

          // este se encargara de cambiar el contenido de la tabla segun en que usario estes
          if (vista_Profesor) {
            fila.innerHTML = `
              <td>${tarea.nombre}</td>
              <td>${tarea.fecha_apertura}</td>
              <td>${tarea.fecha_cierre}</td>
              <td>
                <a href="#" onclick="editarTarea(${tarea.id})"><img src="" alt="icono_editar"></a>
                <button onclick="eliminarTarea(${tarea.id})"><img src="" alt="icono_eliminar"></button>
              </td>
            `;
          } else {
            fila.innerHTML = `
              <td>${tarea.nombre}</td>
              <td>${tarea.fecha_apertura}</td>
              <td>${tarea.fecha_cierre}</td>
              <td>${tarea.fecha_entrega}</td>
              <td>${tarea.estado}</td>
            `;
          }

          cuerpo_tabla.appendChild(fila); // añadimos la fila 
        });
    }

    // Función para eliminar una tarea la funcion debe de ser asincrona para que la tarea no se elimine hasta que no se confirme
    async function eliminarTarea(id) {

        const resultado = await Swal.fire({
          title: "¿Estás seguro?",
          text: "¿Quiere Eliminar la tarea?.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí,eliminar",
          cancelButtonText: "No"
        });
      
        // sacamos la posicion de la tarea que queremos eliminar
        if (resultado.isConfirmed) {
          const index = tareas.findIndex(tarea => tarea.id === id);
          //con este if eliminamos la tarea
          if (index !== -1) {
            tareas.splice(index, 1); //elimanar tarea
            tabla_tareas(buscador.value); // cargamos las tareas
          }
        }
      }

    // Función para redirigir al archivo crear_tarea.html
    function crear_tarea() {
      window.location.href = 'crear_tareas.html';
    }
    // Función para redirigir al archivo editar_tarea.html y pasarle todos los datos mediante el localstorage
    function editarTarea(id) {
        const tarea = tareas.find(tarea => tarea.id === id);//buscamos la tarea oobejeto que queremos editar y la guardamos en una variable
          localStorage.setItem("tarea_a_editar", JSON.stringify(tarea));// guardamos la tarea en localstorage
          window.location.href = "editar_tareas.html";
      }
      

    // generar las tareas al cargar la página
    tabla_tareas();