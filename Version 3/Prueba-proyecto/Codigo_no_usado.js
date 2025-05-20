//                  LOGIN                           //

//const loginform=document.querySelector("#login")

// Añade una función asíncrona para que en cuanto se pulse el botón se ejecute
loginform.addEventListener("submit", (event)=>{

    // Evita que la página se recargue
    event.preventDefault() 

    //Guarda en una lista(en el navegador)los objetos seleccionados
    localStorage.setItem("usuarios", JSON.stringify(userjson))

    //Guarda en las variables lo que se ha introducido en los inputs
    const email=document.querySelector("#email").value
    const password=document.querySelector("#password").value

    //Convierte a objeto los elementos almacenados en el espacio local llamado usuarios
    const users=JSON.parse(localStorage.getItem("usuarios")) 

    //Se emplea find para buscar el elemento que coincida
    const validacion=users.find(user=> user.email===email&&user.password=== password)
    //Si la validación no se cumple muestra una alerta
    if(!validacion){
         return Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Revisa los datos porfavor',
                confirmButtonText: 'Ok'
                });  
    }

    window.location.href="home.html"
})



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
        const usuario = JSON.parse(localStorage.getItem("cambios"))||[];
          //Se emplea find para buscar el elemento que coincida
          const validacion = users.find(user => user.email === email && user.password === password)  
          if(!validacion){
           const validar= usuario.find(user => user.email === email && user.password === password)
           if(!validar){
            //Si la validación no se cumple muestra una alerta
          if(!validacion){
            return Swal.fire({
                icon: 'error',
                title: 'error!',
                text: 'Revisa los datos por favor',
                confirmButtonText: 'Ok'
            })
           }
          }
          
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


//                  OBJETO JSON                     //
const userjson=[{"dni":"01-9218611","nombre":"Lief","apellido1":"Simants","apellido2":"Dredge","email":"l.simdre@epsg.upv.es","password":"9218611","rol":"alumno"},
    {"dni":"04-1320191","nombre":"Merline","apellido1":"Kirdsch","apellido2":"Kampshell","email":"m.kirkam@epsg.upv.es","password":"1320191","rol":"alumno"},
    {"dni":"05-9971924","nombre":"Debora","apellido1":"Rawstorne","apellido2":"","email":"d.rawabc@epsg.upv.es","password":"9971924","rol":"alumno"},
    {"dni":"60-4525956","nombre":"Kevan","apellido1":"Pounds","apellido2":"Mainston","email":"k.poumai@upv.es","password":"4525956","rol":"profesor"},
    {"dni":"64-6055365","nombre":"Luelle","apellido1":"Pridmore","apellido2":"Starsmeare","email":"l.prista@upv.es","password":"6055365","rol":"profesor"},
    {"dni":"64-6738133","nombre":"Eolande","apellido1":"Merriton","apellido2":"Mizzi","email":"e.mermiz@upv.es","password":"6738133","rol":"profesor"},
    {"dni":"88-1316390","nombre":"Ondrea","apellido1":"Brezlaw","apellido2":"Sherwill","email":"o.breshe@upv.es","password":"1316390","rol":"pas"},
    {"dni":"91-1970980","nombre":"Brooke","apellido1":"Malimoe","apellido2":"Thomerson","email":"b.maltho@upv.es","password":"1970980","rol":"pas"},
    {"dni":"","nombre":"Daniel","apellido1":"Palacio","apellido2":"","email":"dapasa@har.upv.es","password":"1234","rol":""},
    {"dni":"","nombre":"José Luis","apellido1":"Gimenez","apellido2":"","email":"jogilo@upvnet.upv.es","password":"4567","rol":""}]


    //                  Cambio contraseña                           //
// Obtener del localStorage la lista de cambios, o inicializar como un arreglo vacío si no hay nada
const cambios = JSON.parse(localStorage.getItem("cambios")) || [];

// Obtener el formulario con id "Inputs_password"
const contenedor = document.querySelector("#Inputs_password");

// Agregar un listener para el evento submit del formulario
contenedor.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe de forma tradicional

  // Obtener los valores de las contraseñas introducidas por el usuario
  const pass_vieja = document.querySelector("#password_vieja").value;
  const pass_nueva = document.querySelector("#password_nueva").value;
  const pass_rep = document.querySelector("#password_repetida").value;

  // Validar si la nueva contraseña y su confirmación coinciden
  if (pass_nueva !== pass_rep) {
    return Swal.fire({
      icon: 'error',
      title: 'error!',
      text: 'Las contraseñas nuevas no coinciden',
      confirmButtonText: 'Ok'
    });
  }

  // Obtener el usuario actualmente activo desde localStorage
  const usuarioActual = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay usuario activo, mostrar error
  if (!usuarioActual) {
    return Swal.fire({
      icon: 'error',
      title: 'error!',
      text: 'No hay usuario activo',
      confirmButtonText: 'Ok'
    });
  }

  // Buscar si el usuario ya tiene un cambio registrado
  const usuarioModificado = cambios.find(u => u.email === usuarioActual.email);

  // Usar la versión modificada si existe, o la original si no
  const usuarioParaValidar = usuarioModificado || usuarioActual;

  // Validar si la contraseña actual ingresada es correcta
  if (usuarioParaValidar.password !== pass_vieja) {
    return Swal.fire({
      icon: 'error',
      title: 'error!',
      text: 'La contraseña actual no es correcta',
      confirmButtonText: 'Ok'
    });
  }

  // Actualizar la contraseña del usuario
  usuarioParaValidar.password = pass_nueva;

  // Buscar el índice del usuario en la lista de cambios
  const index = cambios.findIndex(u => u.email === usuarioActual.email);

  // Si ya existe, actualizarlo en la lista de cambios
  if (index !== -1) {
    cambios[index] = usuarioParaValidar;
  } else {
    // Si no existe, agregarlo
    cambios.push(usuarioParaValidar);
  }

  // Guardar los datos actualizados en localStorage
  localStorage.setItem("usuario", JSON.stringify(usuarioParaValidar));
  localStorage.setItem("cambios", JSON.stringify(cambios));

  // Redirigir al usuario a la página "home.html"
  window.location.href = "home.html";
});
const cambios = JSON.parse(localStorage.getItem("cambios")) || [];
//Selecciona el formulario con la id login y lo almacena en la variable
const contenedor=document.querySelector("#Inputs_password")
contenedor.addEventListener("submit", (event)=>{

    //Evita que la página se recargue
    event.preventDefault()

    //Guarda en las variables lo que se ha introducido en los inputs
    const pass_vieja=document.querySelector("#password_vieja").value
    const pass_nueva=document.querySelector("#password_nueva").value
    const pass_rep=document.querySelector("#password_repetida").value
    if(pass_nueva!=pass_rep){
        return Swal.fire({
            icon: 'error',
            title: 'error!',
            text: 'Las contraseñas nuevas no coinciden',
            confirmButtonText: 'Ok'
        })
    }

    // Usa fetch para cargar los datos desde un archivo externo
    fetch('./usuarios.json')
      .then(response => response.json())
      .then(users => {
          //Se emplea find para buscar el elemento que coincida
          const validacion = users.find(user => user.password === pass_vieja)

          //Si la validación no se cumple muestra una alerta
          if(!validacion){
              return Swal.fire({
                  icon: 'error',
                  title: 'error!',
                  text: 'Revisa los datos por favor',
                  confirmButtonText: 'Ok'
              })
          }
          validacion.password=pass_nueva
          cambios.push(validacion)
          // Guarda el que coincide en el almacenamiento local para usarlo en la información básica
          localStorage.setItem("usuario", JSON.stringify(validacion))
          localStorage.setItem("cambios", JSON.stringify(cambios) )

          // Si todo está bien, redirige
          window.location.href = "home.html"
      })
      //Si hay algo que no va bien, indica el error en la página cuando se le da a inspeccionar
      .catch(error => {
          console.error('Error al cargar el JSON:', error)
      })})
