    /*// variables
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
      tabla_tareas(buscador.value); // Volver a generar las tareas pero en modo alumno/profesor
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
      para ello utilizamos toLowerCase que convierte los dos textos en minuscula par poder comprarlos mejor *//*
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
      window.location.href = 'crear_tareas.php';
    }
    // Función para redirigir al archivo editar_tarea.html y pasarle todos los datos mediante el localstorage
    function editarTarea(id) {
        const tarea = tareas.find(tarea => tarea.id === id);//buscamos la tarea oobejeto que queremos editar y la guardamos en una variable
          localStorage.setItem("tarea_a_editar", JSON.stringify(tarea));// guardamos la tarea en localstorage
          window.location.href = "editar_tareas.php";
      }
      

    // generar las tareas al cargar la página
    tabla_tareas();*/
    // variables
/*let vista_Profesor = true;

const cuerpo_tabla = document.getElementById('cuerpo_tabla');
const encabezado_tabla = document.getElementById('encabezado_tabla');
const btn_crearTarea = document.createElement('button');
btn_crearTarea.textContent = 'Crear tarea';

const vista = document.getElementById('profesor_alumno');
const buscador = document.getElementById('buscador');

let tareas = []; // ahora se cargará desde fetch

// Función para obtener las tareas desde un archivo JSON
async function fetchTareas() {
  try {
    const response = await fetch('json/Tareas.json');
    if (!response.ok) throw new Error('Error al cargar las tareas');
    tareas = await response.json();
    tabla_tareas(buscador.value);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Cambiar entre vista de Profesor y Alumno
vista.addEventListener('click', () => {
  vista_Profesor = !vista_Profesor;
  vista.textContent = vista_Profesor ? 'Cambiar a Alumno' : 'Cambiar a Profesor';
  tabla_tareas(buscador.value);
});

// Actualizar la tabla al escribir en el buscador
buscador.addEventListener('input', (texto) => {
  tabla_tareas(texto.target.value);
});

// Función para mostrar las tareas en el formulario
function tabla_tareas(texto = '') {
  cuerpo_tabla.innerHTML = '';
  encabezado_tabla.innerHTML = '';

  if (vista_Profesor) {
    encabezado_tabla.innerHTML = `
      <div><button class="crear_tarea" onclick="crear_tarea()">Crear tarea</button></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Acciones</strong></div>
    `;
  } else {
    encabezado_tabla.innerHTML = `
      <div><strong>Nombre</strong></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Fecha Entrega</strong></div>
      <div><strong>Estado</strong></div>
    `;
  }

  tareas
    .filter(tarea =>
      tarea.fecha_apertura.includes(texto) ||
      tarea.nombre.toLowerCase().includes(texto.toLowerCase())
    )
    .forEach(tarea => {
      const fila = document.createElement('div');
      fila.classList.add('fila_tarea'); // puedes darle estilos si deseas

      if (vista_Profesor) {
        fila.innerHTML = `
          <label>Nombre: <input type="text" value="${tarea.nombre}" readonly></label>
          <label>Fecha apertura: <input type="text" value="${tarea.fecha_apertura}" readonly></label>
          <label>Fecha cierre: <input type="text" value="${tarea.fecha_cierre}" readonly></label>
          <div>
            <a href="#" onclick="editarTarea(${tarea.id})"><img src="" alt="icono_editar"></a>
            <button type="button" onclick="eliminarTarea(${tarea.id})"><img src="" alt="icono_eliminar"></button>
          </div>
        `;
      } else {
        fila.innerHTML = `
          <label>Nombre: <input type="text" value="${tarea.nombre}" readonly></label>
          <label>Fecha apertura: <input type="text" value="${tarea.fecha_apertura}" readonly></label>
          <label>Fecha cierre: <input type="text" value="${tarea.fecha_cierre}" readonly></label>
          <label>Fecha entrega: <input type="text" value="${tarea.fecha_entrega}" readonly></label>
          <label>Estado: <input type="text" value="${tarea.estado}" readonly></label>
        `;
      }

      cuerpo_tabla.appendChild(fila);
    });
}

// Función para eliminar una tarea
async function eliminarTarea(id) {
  const resultado = await Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quiere eliminar la tarea?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No"
  });

  if (resultado.isConfirmed) {
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      tabla_tareas(buscador.value);
    }
  }
}

// Redirección a crear tarea
function crear_tarea() {
  window.location.href = 'crear_tareas.php';
}

// Redirección a editar tarea
function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  localStorage.setItem("tarea_a_editar", JSON.stringify(tarea));
  window.location.href = "editar_tareas.php";
}

// Cargar tareas al iniciar
fetchTareas();
*/
let vista_Profesor = true;

const cuerpo_tabla = document.getElementById('cuerpo_tabla');
const encabezado_tabla = document.getElementById('encabezado_tabla');
const vista = document.getElementById('profesor_alumno');
const buscador = document.getElementById('buscador');

let tareas = []; // Se cargará desde fetch

// Función para obtener las tareas desde un archivo JSON
async function fetchTareas() {
  try {
    const response = await fetch('json/Tareas.json');
    if (!response.ok) throw new Error('Error al cargar las tareas');
    tareas = await response.json();
    tabla_tareas(buscador.value);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Cambiar entre vista de Profesor y Alumno
vista.addEventListener('click', () => {
  vista_Profesor = !vista_Profesor;
  vista.textContent = vista_Profesor ? 'Cambiar a Alumno' : 'Cambiar a Profesor';
  tabla_tareas(buscador.value);
});

// Actualizar la tabla al escribir en el buscador
buscador.addEventListener('input', (e) => {
  tabla_tareas(e.target.value);
});

// Función para mostrar las tareas en la tabla
function tabla_tareas(texto = '') {
  cuerpo_tabla.innerHTML = '';
  encabezado_tabla.innerHTML = '';

  if (vista_Profesor) {
    encabezado_tabla.innerHTML = `
      <div><button class="crear_tarea" onclick="crear_tarea()">Crear tarea</button></div>
      <div><strong>Nombre</strong></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Acciones</strong></div>
    `;
  } else {
    encabezado_tabla.innerHTML = `
      <div><strong>Nombre</strong></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Fecha Entrega</strong></div>
      <div><strong>Estado</strong></div>
    `;
  }

  tareas
    .filter(tarea =>
      tarea.fecha_apertura.includes(texto) ||
      tarea.nombre.toLowerCase().includes(texto.toLowerCase())
    )
    .forEach(tarea => {
      const fila = document.createElement('div');
      fila.classList.add('fila_tarea'); // Puedes aplicar estilos tipo grid/flex en CSS

      if (vista_Profesor) {
        fila.innerHTML = `
          <div><a href="info_tarea_profesor.php" id="tarea_seleccionada">${tarea.nombre}</a></div>
          <div>${tarea.fecha_apertura}</div>
          <div>${tarea.fecha_cierre}</div>
          <div>
            <button type="button" onclick="editarTarea(${tarea.id})"><img src="" alt="Editar" /></button>
            <button type="button" onclick="eliminarTarea(${tarea.id})"><img src="" alt="Eliminar" /></button>
          </div>
        `;
      } else {
        fila.innerHTML = `
          <div><a href="#" onclick="guardarTarea(${tarea.id})">${tarea.nombre}</a></div>
          <div>${tarea.fecha_apertura}</div>
          <div>${tarea.fecha_cierre}</div>
          <div>${tarea.fecha_entrega}</div>
          <div>${tarea.estado}</div>
        `;
      }

      cuerpo_tabla.appendChild(fila);
    });
}

function guardarTarea(id){
  //Se guarda la tarea seleccionada
  const tarea = tareas.find(t => t.id === id);
  localStorage.setItem("tarea_a_ver", JSON.stringify(tarea));
  console.log(tarea);
  if(!tarea){
    //href="info_tarea.php"
    console.error("va mal");
  }
  window.location.href="info_tarea.php"
}

// Función para eliminar una tarea
async function eliminarTarea(id) {
  const resultado = await Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quiere eliminar la tarea?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No"
  });

  if (resultado.isConfirmed) {
    const index = tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      tabla_tareas(buscador.value);
    }
  }
}

// Redirección a crear tarea
function crear_tarea() {
  window.location.href = 'crear_tareas.php';
}

// Redirección a editar tarea
function editarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  localStorage.setItem("tarea_a_editar", JSON.stringify(tarea));
  window.location.href = "editar_tareas.php";
}



// Cargar tareas al iniciar
fetchTareas();
