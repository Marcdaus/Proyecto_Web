 /*// esta funcion es la que utilizaremos para guardar el formulario

function guardarFormulario() {
    //variables 
    const nombre = document.getElementById("nombre").value.trim();
    const fecha_apertura = document.getElementById("fecha_apertura").value;
    const fecha_cierre = document.getElementById("fecha_cierre").value;


  
    // este if es el que comprueba que las variables no esten vacias es decir que no alla campos por rellenar
    if (!nombre || !fecha_apertura || !fecha_cierre ) {
      Swal.fire("Campos incompletos", "Faltan campos por rellenar.", "warning");
      return;
    }
  
    // generamos las fechas para realizar las comprobaciones
    const hoy = new Date();
    const apertura = new Date(fecha_apertura);
    const cierre = new Date(fecha_cierre);
    

    // Este if se encarga de que la tarea no se cree antes de hoy 
    if (cierre < hoy.setHours(0, 0, 0, 0) || apertura < hoy.setHours(0, 0, 0, 0) ) {
      Swal.fire("Fecha inválida", "La fechas no pueden ser anteriores a hoy.", "error");
      return;
    }

    // Este if se encarga que la fecha de apertura no se realize despues de la de cierre
  
    if (apertura > cierre) {
      Swal.fire("Fecha inválida", "La fecha de apertura no puede ser posterior a la de cierre.", "error");
      return;
    }
  
    Swal.fire({
      title: "¿Estás seguro de que quieres guardar los cambios?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, guardar",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {window.location.href = "tareas.php"}});
  }
  
  // esta funcion es la que utilizaremos para cancelar el formulario
  function cancelar() {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se perderán los datos no guardados.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cancelar",
      cancelButtonText: "No"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "tareas.php"
      }
    });
  }
//el siguiente metodo nos ayudara a detectarlos cambios en tiempo real
  document.getElementById("desplegable_tipo").addEventListener("change", function () {
    const tipo = this.value;
    //este if define si el elemto debe estar oculto o no 
    if (tipo === "INDIVIDUAL") {
      ocultar_grupal();
    } else {
      ver_grupal();
    }
  });

// con estas funciones añadimos o eliminamos el active a la clase para hacerlo visible
function ver_grupal(){
    document.getElementById("grupal").classList.remove("active");
}
function ocultar_grupal(){
    document.getElementById("grupal").classList.add("active");
}

//el siguiente metodo nos ayudara a detectarlos cambios en tiempo real y saber si se a sellecionado un archivo
document.getElementById("adjunto").addEventListener("change", function () {
    const nombre_archivo = this.closest("label").querySelector("span:nth-child(2)"); //selecciona el segundo span en la label que es el que contiene el texto
    
    // este if comprueba cuanto archivos se an seleccionado y dependiendo de cuantos se agrega un texto
    if (this.files.length === 1) {
        nombre_archivo.textContent = this.files[0].name;
    } else if (this.files.length > 1) {
        nombre_archivo.textContent = `${this.files.length} archivos seleccionados`;
    } 
  });

  //Despliega el botón para crear grupos si se activa
document.getElementById("desplegable_tipo").addEventListener("change", function () {
  const tipo = this.value;
  if (tipo === "INDIVIDUAL") {
    ocultar_grupal();
  } else {
    ver_grupal();
  }
});




  function ver_grupal() {
  document.getElementById("grupal").classList.remove("active");
}

function ocultar_grupal() {
  document.getElementById("grupal").classList.add("active");
}*/

// Esperar a que todo el DOM esté cargado antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", () => {
  ocultar_grupal()
  const nombreInput = document.getElementById("nombre");
  const tipoSelect = document.getElementById("desplegable_tipo");
  const descripcionInput = document.getElementById("descripcion");
  const fechaAperturaInput = document.getElementById("fecha_apertura");
  const fechaCierreInput = document.getElementById("fecha_cierre");
  const adjuntoInput = document.getElementById("adjunto");
  const grupalDiv = document.getElementById("grupal");

  // Detectar tipo de tarea
  tipoSelect.addEventListener("change", () => {
    if (tipoSelect.value === "GRUPAL") {
      ver_grupal()
    } else {
      ocultar_grupal()
    }
  });


  function ver_grupal() {
  document.getElementById("grupal").classList.remove("active");
}

function ocultar_grupal() {
  document.getElementById("grupal").classList.add("active");
}




  // Detectar archivos adjuntos
  adjuntoInput.addEventListener("change", function () {
    const textoArchivo = this.closest("label").querySelector("span:nth-child(2)");
    if (this.files.length === 1) {
      textoArchivo.textContent = this.files[0].name;
    } else if (this.files.length > 1) {
      textoArchivo.textContent = `${this.files.length} archivos seleccionados`;
    } else {
      textoArchivo.textContent = "Archivos PDF, DOC, JPG";
    }
  });

  // Verificar si estamos en modo edición
  const tareaJSON = localStorage.getItem("tarea_a_editar");
  if (tareaJSON) {
    const tarea = JSON.parse(tareaJSON);
    nombreInput.value = tarea.nombre;
    descripcionInput.value = tarea.descripción;
    fechaAperturaInput.value = formatearFecha(tarea.fecha_apertura);
    fechaCierreInput.value = formatearFecha(tarea.fecha_cierre);
    tipoSelect.value = tarea.tipo_tarea.toUpperCase();

    if (tarea.tipo_tarea.toLowerCase() === "grupal") {
      grupalDiv.classList.remove("active");
    } else {
      grupalDiv.classList.add("active");
    }

    localStorage.removeItem("tarea_a_editar");
  }
});

// Guardar formulario
function guardarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const fecha_apertura = document.getElementById("fecha_apertura").value;
  const fecha_cierre = document.getElementById("fecha_cierre").value;

  if (!nombre || !descripcion || !fecha_apertura || !fecha_cierre) {
    Swal.fire("Campos incompletos", "Faltan campos por rellenar.", "warning");
    return;
  }

  const hoy = new Date();
  const apertura = new Date(fecha_apertura);
  const cierre = new Date(fecha_cierre);

  // Verificar que las fechas no sean anteriores a hoy
  if (apertura < hoy.setHours(0, 0, 0, 0) || cierre < hoy.setHours(0, 0, 0, 0)) {
    Swal.fire("Fecha inválida", "Las fechas no pueden ser anteriores a hoy.", "error");
    return;
  }

  // Verificar que apertura no sea posterior a cierre
  if (apertura > cierre) {
    Swal.fire("Fecha inválida", "La fecha de apertura no puede ser posterior a la de cierre.", "error");
    return;
  }

  // Confirmación
  Swal.fire({
    title: "¿Estás seguro de que quieres guardar los cambios?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, guardar",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "tareas.php";
    }
  });
}

// Cancelar formulario
function cancelar() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "Se perderán los datos no guardados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, cancelar",
    cancelButtonText: "No"
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "tareas.html";
    }
  });
}

// Función para convertir "dd/mm/yyyy" a "yyyy-mm-dd"
function formatearFecha(fecha) {
  if (!fecha.includes("/")) return fecha;
  const [dia, mes, anio] = fecha.split("/");
  return `${anio}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
}
