<!--!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tareas</title>
</head>
<body>
    <!-- Boton para cambiar de vista Alumno o Profesor --><!--
    <button id="profesor_alumno">Cambiar a Alumno</button>
    
    <!-- Buscador --><!--
    <input type="text" id="buscador" placeholder="Buscar tarea dd/mm/aaaa">
  <!-- tabla de tareas --><!--
  <table>
    <thead>
      <tr id="encabezado_tabla">
        <!-- Se generara desde el JS --><!--
      </tr>
    </thead>
    <tbody id="cuerpo_tabla">
        <!-- Se generara desde el JS --><!--
    </tbody>
  </table>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
  <script src="js/tareas.js"></script>
</body>
</html>
-->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tareas</title>
</head>
<body>
  <!-- Botón para cambiar de vista Alumno o Profesor -->
  <button id="profesor_alumno">Cambiar a Alumno</button>
  
  <!-- Buscador -->
  <input type="search" id="buscador" placeholder="Buscar tarea dd/mm/aaaa">

  <!-- Contenedor de tareas -->
  <div id="form_tareas">
    <div id="encabezado_tabla">
      <!-- Se generará desde el JS -->
    </div>
    <div id="cuerpo_tabla">
      <!-- Se generará desde el JS -->
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
  <script src="js/tareas.js"></script>
</body>
</html>


