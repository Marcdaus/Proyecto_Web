//==================================================================================================================================
//                                  FUNCIÓN QUE DESPLIEGA LOS BOTONES DE LAS FAQS
//==================================================================================================================================

function desplegar(boton) {
  const preguntaDiv = boton.closest('.Pregunta');
  const infoDiv = preguntaDiv.querySelector('.info');

  if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
    infoDiv.style.display = "block";
    boton.textContent = "−"; // cambia a menos
  } else {
    infoDiv.style.display = "none";
    boton.textContent = "+"; // vuelve a más
  }
}
