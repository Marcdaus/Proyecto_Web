 // esta funcion es la que utilizaremos para guardar el formulario

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
    Swal.fire("Formulario válido", "creando tarea tarea...", "success")
    window.location.href = "tareas.html"
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