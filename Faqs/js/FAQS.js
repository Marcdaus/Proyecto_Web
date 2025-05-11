//==================================================================================================================================
//                                  FUNCIÓN QUE DESPLIEGA LOS BOTONES DE LAS FAQS
//==================================================================================================================================

function desplegar(boton) {
    // Recopila en variables la información
    const preguntaDiv = boton.closest('.Pregunta');
    const infoDiv = preguntaDiv.querySelector('.info');
  
    //Compruebo si la infromación esta visible o no
    if (infoDiv.style.display === "none" || infoDiv.style.display === "") {
      infoDiv.style.display = "block";
      boton.textContent = "−";  // Cambia el símbolo a "−"
    } else {
      infoDiv.style.display = "none";
      boton.textContent = "+";  // Cambia el símbolo a "+"
    }
  }