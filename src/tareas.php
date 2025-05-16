
<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Tareas</title>
  <script src="js/tareas.js" defer ></script>
  <link rel="stylesheet" href="css/tareas.css">
</head>
<body>
  <!-- Incluimos el header de la pagina -->
<?php include('header_proa-tareas.php') ?>
<!-------------------------------------->
  <div class = "contenedor">
    <!-- boton tareas -->
    <div><button id = "crear_tarea" class="crear_tarea" onclick="crear_tarea()">Crear tarea</button></div>
    <!-- Buscador -->
    <span>
    <img src = "./img/icono/lupa.png" alt = "icono v¡buscador"></img>
    <input type="search" id="buscador" placeholder="Buscar tarea dd/mm/aaaa">
    </span>

  </div>
  <!-- Contenedor de tareas -->
  <div id="form_tareas">
    <div id="encabezado_tabla">
      <!-- Se generará desde el JS -->
    </div>
    <div id="cuerpo_tabla">
      <!-- Se generará desde el JS -->
    </div>
  </div>

</body>
</html>


