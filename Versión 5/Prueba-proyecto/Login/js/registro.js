   //Variables globales
   let nombre = '';
   let institucion = '';
   let email = '';
   let usuarios = [];
   
   //===============================
    //   formulario credenciales
    //==============================

    //selecciona el formulario para que en cuanto se pulse el botón se ejecute
    document.querySelector('#registro_credenciales').addEventListener('submit', (event) => {

        //Evita que la página se recargue
        event.preventDefault(); 

        //Guarda en las variables lo que se ha introducido en los inputs
        nombre = document.querySelector('#nombre').value;
        institucion = document.querySelector('#institucion').value;
        email = document.querySelector('input[type="email"]').value;
        
        // comprueba que se hallan rellenado todos los campos 
        if ( nombre === '' || institucion === '' || email === ''  ) {
            return     Swal.fire({
                icon: 'success',
                title: '¡Enviado!',
                text: 'Tu consulta fue enviada con éxito.',
                confirmButtonText: 'Ok'
              }); ;
        }

        /*comprueba si hay algo en el local storage y si lo hay lo almacena en una variable si no lo la variable
        pasa aser una array vacia */
        usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        //comprueba si el usuario ya existe
        let usuario_registrado = usuarios.find(u => u.email === email);
        if (usuario_registrado) {
            return alert('El usuario ya está registrado');
        }
        //cambiar formulario
        document.getElementById("registro_credenciales").classList.remove("active");
        document.getElementById("registro_contraseña").classList.add("active");

    });

    //===========================
    //   formulario contraseña
    //===========================
    {

    
    //selecciona el formulario para que en cuanto se pulse el botón se ejecute
    document.querySelector('#registro_contraseña').addEventListener('submit', (event) => {

        //Evita que la página se recargue
        event.preventDefault(); 

        //comprueba que la contrseña se repita correctamente
        if (document.querySelector('#contraseña').value !== document.querySelector('#contraseña2').value ){
            return alert('Las contraseñas no coinciden')
        } else {

        //Guarda en las variables lo que se ha introducido en los inputs
        let contraseña = document.querySelector('#contraseña').value;

        // guarda la nueva informacion en una array y la almacena en el loclastorage 
        usuarios.push({ nombre: nombre, institucion: institucion, email: email, password: contraseña });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
        return window.location.href = "home.html"
    })
    // Esta funcion permitira volver al primer formulario
    function volver(){
        document.getElementById("registro_contraseña").classList.remove("active");
        document.getElementById("registro_credenciales").classList.add("active");
    }

}