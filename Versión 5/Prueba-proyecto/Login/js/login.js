//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL LOGIN
//==================================================================================================================================
/*
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

      // Verificar usuario en usuarios.json
      const registrados= JSON.parse(localStorage.getItem("usuarios")) || [];
      const user_registrado = registrados.find(user => user.email === email && user.password === password);
      //Si no esta salta una notificación de error
      if (!user_registrado) {
        //Notificación de error
        return Swal.fire({
          icon: 'error',
          title: 'No hay nadie registrado con esos datos!',
          text: 'Revisa los datos por favor o sino acuda al registro para poder acceder',
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
});*/


const loginform = document.querySelector("#login");

loginform.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch('./usuarios.json')
    .then(response => response.json())
    .then(usersJson => {
      const cambios = JSON.parse(localStorage.getItem("cambios")) || [];
      const registrados = JSON.parse(localStorage.getItem("usuarios")) || [];

      // 1. Buscar si el usuario ha cambiado la contraseña
      const actualizado = cambios.find(user => user.email === email && user.password === password);
      if (actualizado) {
        localStorage.setItem("usuario", JSON.stringify(actualizado));
        return window.location.href = "home.html";
      }

      // 2. Si el email está en cambios pero la contraseña no coincide, no dejar entrar
      if (cambios.some(user => user.email === email)) {
        return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Revisa los datos por favor',
          confirmButtonText: 'Ok'
        });
      }

      // 3. Verificar usuario en usuarios registrados en localStorage
      const user_registrado = registrados.find(user => user.email === email && user.password === password);
      if (user_registrado) {
        localStorage.setItem("usuario", JSON.stringify(user_registrado));
        return window.location.href = "home.html";
      }

      // 4. Verificar usuario en JSON original
      const original = usersJson.find(user => user.email === email && user.password === password);
      if (original) {
        localStorage.setItem("usuario", JSON.stringify(original));
        return window.location.href = "home.html";
      }

      // 5. Si no coincide en ningún lado, mostrar error
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Revisa los datos por favor o regístrate si aún no lo has hecho',
        confirmButtonText: 'Ok'
      });
    })
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
});



