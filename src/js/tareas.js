// Variables
let vista_Profesor = true;

const cuerpo_tabla = document.getElementById('cuerpo_tabla');
const encabezado_tabla = document.getElementById('encabezado_tabla');
const vista = document.getElementById('profesor_alumno');
const buscador = document.getElementById('buscador');

let tareas = [];

// Función para obtener las tareas desde un archivo JSON
async function fetchTareas() {
  try {
    const contenido = await fetch('json/Tareas.json'); //sacamos la informacion
    tareas = await contenido.json(); // la guadramos en una variable y le cambiamos el formato

    // Filtrar tareas únicas por ID (evita duplicados, ya que hay tareas con la misma id por hecha por diferentes alumnos)
    const idsUnicos = new Set();//Creamos un set vacío que almacenará los IDs que ya hemos visto | set: solo permite campos unicos
    tareas = tareas.filter(tarea => {
      if (idsUnicos.has(tarea.id)) {
        return false; // Si el ID ya estaba, esta tarea es duplicada → no la incluimos
      } else {// Añadimos el ID al set
        idsUnicos.add(tarea.id);// Es la primera vez que vemos este ID → la dejamos
        return true;
      }
    });

    tabla_tareas(buscador.value);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Este método nos permite recoger lo que se está escribiendo en el input a tiempo real
buscador.addEventListener('input', (e) => {
  tabla_tareas(e.target.value);
});

// Esta función genera la tabla con toda la información necesaria
function tabla_tareas(texto = '') {
  cuerpo_tabla.innerHTML = '';
  encabezado_tabla.innerHTML = '';

  const botonCrear = document.getElementById("crear_tarea");

  if (vista_Profesor) {
    encabezado_tabla.innerHTML = `
      <div><strong>Nombre</strong></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Acciones</strong></div>
    `;
    botonCrear.classList.remove("oculto"); // Mostrar botón
  } else {
    encabezado_tabla.innerHTML = `
      <div><strong>Nombre</strong></div>
      <div><strong>Fecha Apertura</strong></div>
      <div><strong>Fecha Cierre</strong></div>
      <div><strong>Fecha Entrega</strong></div>
      <div><strong>Estado</strong></div>
    `;
    botonCrear.classList.add("oculto"); // Ocultar botón
  }

  tareas
    .filter(tarea =>
      tarea.fecha_apertura.includes(texto) ||
      tarea.nombre.toLowerCase().includes(texto.toLowerCase())
    )
    .forEach(tarea => {
      const fila = document.createElement('div');
      fila.classList.add('fila_tarea');

      if (vista_Profesor) {
        fila.innerHTML = `
          <div><a href="#" onclick="guardarTarea_profe(${tarea.id})">${tarea.nombre}</a></div>
          <div>${tarea.fecha_apertura}</div>
          <div>${tarea.fecha_cierre}</div>
          <div>
            <button type="button" onclick="editarTarea(${tarea.id})"><img src="./img/icono/lapiz.png" alt="Editar" /></button>
            <button type="button" onclick="eliminarTarea(${tarea.id})"><img src="./img/icono/basura.png" alt="Eliminar" /></button>
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


//guardamos la tarea en el local storache para utilizarla en las siguientes paginas
function guardarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  localStorage.setItem("tarea_ver", JSON.stringify(tarea));
  if (!tarea) {
    console.error("va mal");
  }
  window.location.href = "info_tarea.php";
}

//guardamos la tarea del apartado de profesor en el local storache para utilizarla en las siguientes paginas
function guardarTarea_profe(id) {
  const tarea = tareas.find(t => t.id === id);
  localStorage.setItem("tarea_ver_profe", JSON.stringify(tarea));
  if (!tarea) {
    console.error("va mal");
  }
  window.location.href = "info_tarea_profesor.php";
}

// Función principal para eliminar una tarea
async function eliminarTarea(id) {
  // Mostramos el popup y esperamos la decisión del usuario
  const resultado = await confirmarEliminacionTarea(); 

  // Si el usuario confirmó, eliminamos la tarea del array y recargamos la tabla
  if (resultado) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
      tareas.splice(index, 1); // Eliminamos del array
      tabla_tareas(buscador.value); // Recargamos la vista de tareas
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

// Manejar cambio de vista entre profesor y alumno
const cambiarVista = document.getElementById('cambiar-vista');

if (cambiarVista) {
  cambiarVista.addEventListener('click', (e) => {
    e.preventDefault();
    vista_Profesor = !vista_Profesor;
    cambiarVista.textContent = vista_Profesor ? 'Cambiar a Alumno' : 'Cambiar a Profesor';
    if (vista) vista.textContent = cambiarVista.textContent;
    tabla_tareas(buscador.value);
  });
}

// Cargar tareas al iniciar
fetchTareas();
//=====================
//        popup
//======================
// Función que muestra un popup de confirmación y espera la respuesta del usuario.
// Devuelve una Promesa que se resuelve con true (confirmado) o false (cancelado).
function confirmarEliminacionTarea() {
  return new Promise((resolve) => {
    // Creamos el elemento <dialog> principal
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `<p>¿ESTÁS SEGURO DE QUE QUIERES ELIMINAR LA TAREA?</p>`;

    // Creamos los botones de aceptar y cancelar
    const boton_aceptar = document.createElement("button");
    boton_aceptar.textContent = "ELIMINAR";

    const boton_cancelar = document.createElement("button");
    boton_cancelar.textContent = "CANCELAR";

    // Añadimos los botones al dialog y lo insertamos en el body
    dialog.appendChild(boton_aceptar);
    dialog.appendChild(boton_cancelar);
    document.body.appendChild(dialog);
    dialog.showModal(); // Mostramos el diálogo modal

    // Evento al hacer clic en "ELIMINAR"
    boton_aceptar.addEventListener("click", () => {
      // Cerramos y eliminamos el popup de confirmación
      dialog.close();
      document.body.removeChild(dialog);

      // Creamos un nuevo popup indicando que se ha eliminado
      const confirmDialog = document.createElement("dialog");
      confirmDialog.innerHTML = '<p>LA TAREA HA SIDO ELIMINADA</p>';
      document.body.appendChild(confirmDialog);
      confirmDialog.showModal();

      // Cerramos automáticamente el mensaje tras 1 segundo y resolvemos la promesa
      setTimeout(() => {
        confirmDialog.close();
        document.body.removeChild(confirmDialog);
        resolve(true); // Se confirmó la eliminación
      }, 1000);
    });

    // Evento al hacer clic en "CANCELAR"
    boton_cancelar.addEventListener("click", () => {
      dialog.close(); // Cerramos el popup
      document.body.removeChild(dialog); // Eliminamos del DOM
      resolve(false); // Se canceló la acción
    });
  });
}
