//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL LOGIN
//==================================================================================================================================

//Selecciona el formulario con la id login y lo almacena en la variable
const loginform = document.querySelector("#login");

//Añade una función asíncrona para que en cuanto se pulse el botón se ejecute
loginform.addEventListener("submit", (event) => {

  //Evita que la página se recargue
  event.preventDefault();

  //Guarda en las variables lo que se ha introducido en los inputs
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Emplea el archivo json con los objetos creados.
  fetch('./usuarios.json')
  // Si la respuesta está se obtiene el json
    .then(response => response.json())

    .then(users => {
      const cambios = JSON.parse(localStorage.getItem("cambios")) || [];

      // Buscar primero si el usuario está en cambios con la contraseña actualizada
      const actualizado = cambios.find(user => user.email === email && user.password === password);
      //Si esta actualizado se introduce que se ha cambiado y se abre el home
      if (actualizado) {
        localStorage.setItem("usuario", JSON.stringify(actualizado));
        return window.location.href = "home.html";
      }

      // Si el usuario existe en cambios pero con otra contraseña, no dejar entrar
      if (cambios.some(user => user.email === email)) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Revisa los datos por favor',
          confirmButtonText: 'Ok'
        });
      }

      // Verificar usuario en usuarios.json
      const original = users.find(user => user.email === email && user.password === password);
      //Si no esta salta una notificación de error
      if (!original) {
        //Notificación de error
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Revisa los datos por favor',
          confirmButtonText: 'Ok'
        });
      }

      // Login exitoso desde usuarios originales
      localStorage.setItem("usuario", JSON.stringify(original));
      return window.location.href = "home.html";
    })
    // Recoge el error, si no funciona bien
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
});


