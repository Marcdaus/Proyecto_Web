 // esta funcion es la que utilizaremos para guardar el formulario
/*
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
  
    // Si todo es esta bien muestra el siguiente mennsaje y redirige
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
        window.location.href = "tareas.html"
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
//===============
// datos enviados
//===============
    const tareaJSON = localStorage.getItem("tarea_a_editar"); //Recogemos los datos mandados

      const tarea = JSON.parse(tareaJSON);
  
      // Rellenamos los campos con los daots enviados
      document.getElementById("nombre").value = tarea.nombre;
      document.getElementById("descripcion").value = tarea.descripción;
      document.getElementById("fecha_apertura").value = formatearFecha(tarea.fecha_apertura);
      document.getElementById("fecha_cierre").value = formatearFecha(tarea.fecha_cierre);
  
      // este if se encarga de comprobar si es grupal o no y de ocultar el boton de grupal en caso de que no lo sea
      if (tarea.tipo_tarea === "grupal") {
        document.getElementById("desplegable_tipo").value = "GRUPAL";
        ver_grupal();
      } else {
        document.getElementById("desplegable_tipo").value = "INDIVIDUAL";
        ocultar_grupal();
      }
  
      // eliminar los datos despues decargarlos para no sobre saturar
      localStorage.removeItem("tarea_a_editar");

  
  // le damos formato a la fechapara que se adpate al html
  function formatearFecha(fecha) {
    const [dia, mes, año] = fecha.split("/");
    return `${año}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
  }
  */
 //==============================
// FUNCIONES PRINCIPALES
//==============================

function guardarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const fecha_apertura = document.getElementById("fecha_apertura").value;
  const fecha_cierre = document.getElementById("fecha_cierre").value;

  if (!nombre || !fecha_apertura || !fecha_cierre) {
    Swal.fire("Campos incompletos", "Faltan campos por rellenar.", "warning");
    return;
  }

  const hoy = new Date();
  const apertura = new Date(fecha_apertura);
  const cierre = new Date(fecha_cierre);

  hoy.setHours(0, 0, 0, 0);

  if (apertura < hoy || cierre < hoy) {
    Swal.fire("Fecha inválida", "Las fechas no pueden ser anteriores a hoy.", "error");
    return;
  }

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
    if (result.isConfirmed) {
      // Aquí puedes hacer un POST, guardar localStorage o enviar a PHP
      window.location.href = "tareas.php";
    }
  });
}

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

//==============================
// EVENTOS EN TIEMPO REAL
//==============================

document.getElementById("desplegable_tipo").addEventListener("change", function () {
  const tipo = this.value;
  if (tipo === "INDIVIDUAL") {
    ocultar_grupal();
  } else {
    ver_grupal();
  }
});

document.getElementById("adjunto").addEventListener("change", function () {
  const labelTexto = this.closest("label").querySelector("span:nth-child(2)");
  if (this.files.length === 1) {
    labelTexto.textContent = this.files[0].name;
  } else if (this.files.length > 1) {
    labelTexto.textContent = `${this.files.length} archivos seleccionados`;
  } else {
    labelTexto.textContent = "Archivos PDF, DOC, JPG";
  }
});

//==============================
// MOSTRAR/OCULTAR GRUPAL
//==============================

function ver_grupal() {
  document.getElementById("grupal").classList.remove("active");
}

function ocultar_grupal() {
  document.getElementById("grupal").classList.add("active");
}

//==============================
// CARGAR DATOS DESDE localStorage
//==============================

const tareaJSON = localStorage.getItem("tarea_a_editar");

if (tareaJSON) {
  const tarea = JSON.parse(tareaJSON);

  document.getElementById("nombre").value = tarea.nombre || "";
  document.getElementById("descripcion").value = tarea.descripción || "";
  document.getElementById("fecha_apertura").value = formatearFecha(tarea.fecha_apertura);
  document.getElementById("fecha_cierre").value = formatearFecha(tarea.fecha_cierre);

  if (tarea.tipo_tarea === "grupal") {
    document.getElementById("desplegable_tipo").value = "GRUPAL";
    ver_grupal();
  } else {
    document.getElementById("desplegable_tipo").value = "INDIVIDUAL";
    ocultar_grupal();
  }

  localStorage.removeItem("tarea_a_editar");
}

//==============================
// FUNCIONES AUXILIARES
//==============================

function formatearFecha(fecha) {
  if (!fecha.includes("/")) return fecha;
  const [dia, mes, año] = fecha.split("/");
  return `${año}-${mes.padStart(2, "0")}-${dia.padStart(2, "0")}`;
}
