
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

