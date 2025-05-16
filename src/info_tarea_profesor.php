<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="js/info_profe_alumnos.js" defer></script>
  <title>Información Tarea Profesor</title>
  <link rel="stylesheet" href="css/info_tarea_profesor.css">
</head>
<body>

  <!-- Incluimos el header de la pagina -->
<?php include('header_proa-tareas.php') ?>
<!-------------------------------------->
  
  <main>
     <article class="menu_migas_pan">
        <a href="tareas.php">TAREAS</a>/
        <a href=""></a>
      </article>

    <article class="porcentaje">
            <span>Porcentaje de entregados:</span>
            <span class="porcentaje_aprobados"></span>
      </article>

    <!-- Buscador -->
    <div class="buscador">
      <input id="buscador" type="search" placeholder="Busca por nombre o fecha">
    </div>


    <!-- Tabla única con toda la información -->
    <table class="tabla_tareas">
      <thead id="encabezado_tabla" class="Clasificaciones">
        <tr>
          <th>Nombre del Alumno</th>
          <th>Fecha de Entrega</th>
          <th>Archivo Adjunto</th>
        </tr>
      </thead>
      <tbody id="cuerpo_tabla" class="tareas">
        <!-- Se rellena dinámicamente -->
      </tbody>
    </table>

  </main>
</body>
</html>

