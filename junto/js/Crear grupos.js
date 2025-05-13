
//=======================================================================================================
//                                        CREAR GRUPOS
//=======================================================================================================
//Hay que tener en cuenta la asignatura ???
//let asignaturaActual="Física"
async function cargarAlumnos() {
    //Obtiene los datos del json.
    const res = await fetch('json/usuarios.json');
    const data = await res.json();

    //Se obtienen los alumnos
    const alumnos=data.filter((user)=>user.rol==="alumno");

    //Selecciona el contenido del elemento con id lista_alumnos
    const lista = document.getElementById('lista_alumnos');
    lista.innerHTML = '';
  
    // Filtrar alumnos por asignatura actual
    //const alumnosFiltrados = data.alumnos.filter(a => a.asignatura === asignaturaActual);

   
    // Para cada alumno se crea un div
    alumnos.forEach(alumno => {
      const div = document.createElement('div');
      div.className = 'alumno';
      
        // Agrega al div una casilla para marcar y una etiqueta con el nombre del alumno
      div.innerHTML = `
        <input type="checkbox" id="${alumno.nombre}" name="alumnos" value="${alumno.nombre}">
        <label for="${alumno.nombre}">${alumno.apellido1+" "+alumno.apellido2+", "+alumno.nombre}</label>
      `;

        // Añade el div al contenedor principal
      lista.appendChild(div);
    });
    //Carga la función desde el otro archivo
  }
  
  //Cuando se cargue la pantalla que llame  la función
  window.onload = function () {
    cargarAlumnos()
   }
  
  