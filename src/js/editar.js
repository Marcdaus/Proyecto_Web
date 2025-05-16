
//=======================================================================================================
//                                          EDITAR GRUPOS
//=======================================================================================================


//=======================================================================================================
//                                          SELECCIONAR()
//=======================================================================================================
function seleccionar(){

  //Almaceno los datos del grupo
  const grupoData = localStorage.getItem('grupoAEditar');
  const grupo = JSON.parse(grupoData);
  console.log(grupo)
  //Cada miembro tendrá su propio id y el checkbocs se seleccionará
  grupo.miembros.forEach(miembro => {
    const checkbox=document.getElementById(miembro)
    console.log(checkbox)
    if(checkbox){
      checkbox.checked=true;
    }
    //Si no esta notifica de un error
    console.error()
    
  })
}

// Al cargar la página
  window.onload = () => {

    //Selecciona el div con la id mostrada
    document.getElementById("miembros_grupo");

    // Recupera el grupo desde localStorage
    const grupoData = localStorage.getItem('grupoAEditar');
    //Si no hay grupo da error
    if (!grupoData) {
      console.error("No hay grupo para editar.");
      return;
    }
    //Convierte el JSON a objeto
    const grupo = JSON.parse(grupoData);

    // Rellena el nombre en el input
    document.getElementById('nombre_grupo').value = grupo.nombre;

    //Selecciona a los alumnos
    seleccionar()
  };

//===================================================================================
//                                GUARDARGRUPOS()
//===================================================================================
function guardarGrupo() {
  const guardar = document.getElementById('guardar');

  if (!guardar) {
      console.error("El botón 'guardar' no existe en el DOM.");
      return;
  }
  const dialog=document.createElement("dialog")

  if (document.getElementById('nombre_grupo').value.toLowerCase() === "error") {
      console.error("El grupo introducido no es correcto o repetido");
      dialog.innerHTML='<p> El grupo introducido no es correcto o repetido</p>'
      document.body.appendChild(dialog);
      dialog.showModal()
      setTimeout(()=>{
        dialog.close()
      },2000)
      return;
 }

  const miembrosSeleccionados = document.querySelectorAll('input[name="miembros[]"]:checked');
  if (miembrosSeleccionados.length === 0) {
      console.error("Debes seleccionar al menos un miembro del grupo.");
      dialog.innerHTML = '<p>Debes seleccionar al menos un miembro del grupo.</p>';
      document.body.appendChild(dialog);
      dialog.showModal();
      setTimeout(() => {
        dialog.close();
      }, 2000);
      return;
  }

  dialog.innerHTML='<p> LOS CAMBIOS SE HAN GUARDADO</p>'
  document.body.appendChild(dialog);
  dialog.showModal()
  setTimeout(()=>{
    dialog.close()
    // Redirigir a otra página
    window.location.href = "añadir_grupo.php";
  },2000)
  

}

 
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================
//===================================================================================

