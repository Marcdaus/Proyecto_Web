//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL LOGIN
//==================================================================================================================================


//Selecciona el formulario con la id login y lo almacena en la variable
const loginform=document.querySelector("#login")

//Añade una función asíncrona para que en cuanto se pulse el botón se ejecute
loginform.addEventListener("submit", (event)=>{

    //Evita que la página se recargue
    event.preventDefault()

    //Guarda en las variables lo que se ha introducido en los inputs
    const email=document.querySelector("#email").value
    const password=document.querySelector("#password").value

    // Usa fetch para cargar los datos desde un archivo externo
    fetch('./usuarios.json')
      .then(response => response.json())
      .then(users => {
          //Se emplea find para buscar el elemento que coincida
          const validacion = users.find(user => user.email === email && user.password === password)

          //Si la validación no se cumple muestra una alerta
          if(!validacion){
              return Swal.fire({
                  icon: 'error',
                  title: 'error!',
                  text: 'Revisa los datos por favor',
                  confirmButtonText: 'Ok'
              })
          }
          // Guarda el que coincide en el almacenamiento local para usarlo en la información básica
          localStorage.setItem("usuario", JSON.stringify(validacion))


          // Si todo está bien, redirige
          window.location.href = "home.html"
      })
      //Si hay algo que no va bien, indica el error en la página cuando se le da a inspeccionar
      .catch(error => {
          console.error('Error al cargar el JSON:', error)
      })

})

