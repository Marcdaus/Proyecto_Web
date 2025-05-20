//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL CAMBIO DE CONTRASEÑA
//==================================================================================================================================

// Selecciona el formulario con id "Inputs_password"
const contenedor = document.querySelector("#Inputs_password");

//Añade una función asíncrona para que en cuanto se pulse el botón se ejecute
contenedor.addEventListener("submit", (event) => {
  //Evita que la página se recargue
  event.preventDefault();

  // Obtiene los valores de los campos de contraseña
  const pass_vieja = document.querySelector("#password_vieja").value;
  const pass_nueva = document.querySelector("#password_nueva").value;
  const pass_rep = document.querySelector("#password_repetida").value;

  // Verifica que la nueva contraseña y su confirmación coincidan
  if (pass_nueva !== pass_rep) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Las contraseñas nuevas no coinciden',
      confirmButtonText: 'Ok'
    });
  }

  // Obtiene el usuario actualmente activo desde localStorage
  const usuarioActual = JSON.parse(localStorage.getItem("usuario"));

  // Si no hay usuario activo, muestra un mensaje de error
  if (!usuarioActual) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'No hay usuario activo',
      confirmButtonText: 'Ok'
    });
  }

  // Obtiene la lista de cambios previos desde localStorage, o crea una lista vacía
  const cambios = JSON.parse(localStorage.getItem("cambios")) || [];

  // Busca si el usuario ya tiene un cambio registrado en la lista
  const usuarioModificado = cambios.find(u => u.email === usuarioActual.email);

  // Usa la versión modificada si existe, o el usuario original
  const usuarioParaValidar = usuarioModificado || usuarioActual;

  // Verifica que la contraseña ingresada sea correcta
  if (usuarioParaValidar.password !== pass_vieja) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'La contraseña actual no es correcta',
      confirmButtonText: 'Ok'
    });
  }

  // Actualiza la contraseña del usuario
  usuarioParaValidar.password = pass_nueva;

  // Elimina versiones anteriores del usuario de la lista de cambios
  const cambiosFiltrados = cambios.filter(u => u.email !== usuarioActual.email);

  // Agrega el usuario con la nueva contraseña a la lista
  cambiosFiltrados.push(usuarioParaValidar);

  // Guarda el usuario actualizado y la lista de cambios en localStorage
  localStorage.setItem("usuario", JSON.stringify(usuarioParaValidar));
  localStorage.setItem("cambios", JSON.stringify(cambiosFiltrados));
  return Swal.fire({
    icon: '',
    title: '!Contraseña actualizada!',
    text: 'Tu contraseña ha sido cambiada correctamente',
    confirmButtonText: 'Ok'
  });
});

