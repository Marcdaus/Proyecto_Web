
document.addEventListener("DOMContentLoaded", () => {
  // Obtener y parsear el objeto desde localStorage
  const tareaJSON = localStorage.getItem("tarea_a_ver");

  if (!tareaJSON) {
    console.warn("No se encontró la tarea en localStorage");
    return;
  }

  const tarea = JSON.parse(tareaJSON);

  // Insertar datos en los elementos del DOM
  const icono = document.querySelector(".icono");
  const descripcionDiv = document.querySelector(".descripción");
  const adjuntosDiv = document.querySelector(".Adjuntos_de_la_tarea");
  const migasPan = document.querySelector(".menu_migas_pan a:last-child");

  //Se encarga de poner el icono grupal o individual
  if(tarea.tipo_tarea==="individual"){
    icono.innerHTML=`
   <img src="img/icono/Icono_individual.png" alt="Icono tarea individual">
    <p>TAREA INDIVIDUAL</p>
    `
    console.log("Soy indiv")
  }else{
    icono.innerHTML=`
    <img src="img/icono/icono_grupal.png" alt="Icono tarea grupal">
    <p>TAREA GRUPAL</p>
    `
        console.log("Soy grupal")
  }


  // Rellenar la descripción
  if (descripcionDiv) {
    descripcionDiv.innerHTML = `
      <h2>${tarea.nombre}</h2>
            <p><strong>Descripción:</strong> ${tarea.descripción}</p>

    `;
  }

  if (tarea.adjunto==="null") {
    adjuntosDiv.innerHTML = "<p>No hay archivos adjuntos disponibles.</p>";
  }

//Nombre página para menú migas de pan
  if (migasPan) {
    migasPan.textContent = tarea.nombre.toUpperCase();
    migasPan.href = "#"; // o puedes enlazar a una página real si hace falta
  }
});
