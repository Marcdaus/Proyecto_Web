
 //==============================
// FUNCIONES PRINCIPALES
//==============================

function guardarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const fecha_apertura = document.getElementById("fecha_apertura").value;
  const fecha_cierre = document.getElementById("fecha_cierre").value;





const errores2 = []; // Array de errores

// Validar campos vacíos
if (!nombre || !fecha_apertura || !fecha_cierre) {
    errores2.push("Todos los campos (nombre, fecha de apertura y cierre) son obligatorios.");
    console.error("Error: Hay campos vacíos.");
}


  const hoy = new Date();
  const apertura = new Date(fecha_apertura);
  
  const cierre = new Date(fecha_cierre);

  hoy.setHours(0, 0, 0, 0);



// Validar fechas no anteriores a hoy
if (apertura < hoy || cierre < hoy) {
    errores2.push("Las fechas no pueden ser anteriores a hoy.");
    console.error("Error: Las fechas son anteriores a hoy.");
}

// Validar que apertura no sea posterior a cierre
if (apertura > cierre) {
    errores2.push("La fecha de apertura no puede ser posterior a la de cierre.");
    console.error("Error: Fecha de apertura posterior a la de cierre.");
}

// Mostrar errores si existen
const erroresDiv = document.getElementById("erroresFecha"); // Asegúrate de tener este <div> en el HTML

if (errores2.length > 0) {
    erroresDiv.style.display = "block";
    erroresDiv.innerHTML = "<ul><li>" + errores2.join("</li><li>") + "</li></ul>";
    return false;
}

  const ConfirmDialog = document.createElement("dialog");
  ConfirmDialog.innerHTML = '<p>"SE HAN GUARDADO LOS CAMBIOS CORRECTAMENTE"</p>';
  document.body.appendChild(ConfirmDialog);
  ConfirmDialog.showModal();

  //Se automatiza el cierre del popup
  setTimeout(() => {
    ConfirmDialog.close();
    window.location.href="tareas.php"
  }, 1000);

        
    ;
    erroresDiv.style.display = "none";
    return true;
}

function cancelar() {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = `<p>¿ESTÁS SEGURO DE QUE QUIERES SALIR?</p>`;

  // Crear botones
  const boton_cancelar = document.createElement("button");
  boton_cancelar.textContent = "SALIR";

  const boton_aceptar = document.createElement("button");
  boton_aceptar.textContent = "CONTINUAR";

  // Añadir botones al dialog
  dialog.appendChild(boton_cancelar);
  dialog.appendChild(boton_aceptar);
  document.body.appendChild(dialog);

  dialog.showModal();

  // Botón CONTINUAR
  boton_aceptar.addEventListener("click", () => {
    dialog.close();
  });

  // Botón CANCELAR
  boton_cancelar.addEventListener("click", () => {
    dialog.close();
    window.location.href = "tareas.php";
  });
}

//==============================
// EVENTOS EN TIEMPO REAL
//==============================

document.getElementById("desplegable_tipo").addEventListener("change", function () {
 tipoSelect.addEventListener("change", () => {
    if (tipoSelect.value === "INDIVIDUAL") {
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
