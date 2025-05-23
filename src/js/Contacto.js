//Tengo las consultas aquí
let consultas=[];


//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL CONTACTO
//==================================================================================================================================

//Selecciona el formulario con la id Contacto y lo almacena en la variable
const formcontact= document.querySelector("#Contacto")

// Añade una función asíncrona para que en cuanto se pulse el botón se ejecute
formcontact.addEventListener("submit", (event)=>{

    // Evita que la página se recargue
    event.preventDefault() 

    //Guarda en las variables lo que se ha introducido en los inputs
    const nombre=document.querySelector("#nombre").value
    const institucion=document.querySelector("#institucion").value
    const email=document.querySelector("#email").value
    const consulta=document.querySelector("#contenido").value
    
    //Sube las variables que contienen la info de los inputs en forma de objeto a la lista
    consultas.push({nombre:nombre, institucion:institucion, email:email, consulta:consulta})

    //Guarda en una lista(en el navegador)los objetos seleccionados
    localStorage.setItem("consultas", JSON.stringify(consultas))

    //Notificación que indica que se ha enviado correctamente
    const confirmDialog = document.createElement("dialog");
    confirmDialog.innerHTML = '<p>FORMULARIO ENVIADO CORRECTAMENTE.</p>';
    document.body.appendChild(confirmDialog);
    confirmDialog.showModal();

    //Se automatiza la desaparición del popup
    setTimeout(() => {
        confirmDialog.close();
        window.location.href="index.php"
    }, 1000);
      //Vacia los inputs del formulario
    formcontact.reset()
})

