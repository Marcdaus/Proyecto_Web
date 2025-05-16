

// Recupera la información de la tarea seleccionada desde el localStorage y la parsea
const tareaJSON = localStorage.getItem("tarea_ver_profe");
const tarea = JSON.parse(tareaJSON);
console.log(tarea)

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona el cuerpo de la tabla
  const cuerpoTabla = document.getElementById("cuerpo_tabla");

  // Carga el archivo JSON que contiene las tareas
  fetch("json/Tareas.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el archivo JSON");
      return response.json();
    })
    .then((tareas) => {
      // Filtra tareas que coincidan con el nombre y estén enviadas
      tareas
        .filter(
          (homework) =>
            homework.tipo_tarea === tarea.tipo_tarea 
        )
        .forEach((tarea) => {
          // Crea una fila de tabla
          const fila = document.createElement("tr");
          fila.classList.add("fila_tarea");

          // Celda: nombre del alumno
          const tdAlumno = document.createElement("td");
          tdAlumno.textContent = tarea.nickname;

          // Celda: fecha de entrega
          const tdFecha = document.createElement("td");
          tdFecha.textContent = tarea.fecha_entrega;

          // Celda: enlace al archivo
          const tdArchivo = document.createElement("td");
          if (tarea.archivo) {
            const enlace = document.createElement("a");
            enlace.href = tarea.archivo;
            enlace.textContent = "Ver tarea";
            enlace.target = "_blank";
            tdArchivo.appendChild(enlace);
          } else {
            tdArchivo.textContent = "Sin archivo";
          }

          // Agregar celdas a la fila
          fila.appendChild(tdAlumno);
          fila.appendChild(tdFecha);
          fila.appendChild(tdArchivo);

          // Agregar la fila al cuerpo de la tabla
          cuerpoTabla.appendChild(fila);
        });
    })
    .catch((error) => {
      console.error("Error cargando las tareas:", error);
    });

  // Actualiza migas de pan con el nombre de la tarea
  const migasPan = document.querySelector(".menu_migas_pan a:last-child");
  if (migasPan) {
    migasPan.textContent = tarea.nombre.toUpperCase();
    migasPan.href = "#"; // Opcional: ajusta si necesitas redirigir
  }

  // Cálculo y muestra del porcentaje de tareas enviadas
  porcent_aprobados().then((porcentaje) => {
    const porc_aprob = document.querySelector(".porcentaje_aprobados");
    porc_aprob.textContent = `${porcentaje}%`;
    console.log(`Porcentaje entregado: ${porcentaje}%`);
  });
});

// Función para calcular porcentaje de tareas enviadas
function porcent_aprobados() {
  return fetch("json/tareas.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el archivo JSON");
      return response.json();
    })
    .then((tareas) => {
      const total_tipo= tareas.filter((t) => t.nombre === tarea.nombre);
      console.log("totales="+total_tipo)
      const entregadas = total_tipo.filter((t) => t.estado === "enviada");
      console.log("entregadas="+entregadas)
      const porcentaje = (entregadas.length * 100) / total_tipo.length;
      return porcentaje.toFixed(2);
    });
}
