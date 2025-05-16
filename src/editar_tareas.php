<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>



<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Editar Tarea</title>
  <script src="js/editar_tareas.js"defer></script>
  <link rel="stylesheet" href="css/editar_tareas.css">
</head>
  <body>
  <!-- Incluimos el header de la pagina -->
<?php include('header_proa-tareas.php') ?>
<!-------------------------------------->
  <!-- Div que se encarga de recopilar los errores-->
  <div id="erroresFecha" class="oculto"></div>

  <!-- Título -->
  <div>
        <a href="tareas.php"> TAREAS </a>/
         <a href="añadir_grupo.php">EDITAR TAREAS </a>
    </div>

  <!-- Formulario para crear la tarea -->
  <form class="formulario_tarea_crear" id="formulario_tarea">
    
    <!-- Nombre -->
    <div class="form_grupo">
      <label for="nombre"><strong>NOMBRE</strong></label>
      <input type="text" id="nombre" placeholder="nombre de la tarea">
    </div>

    <!-- Tipo -->
    <div class="form_grupo">
      <label for="desplegable_tipo"><strong>TIPO</strong></label>
      <select id="desplegable_tipo">
        <option selected>INDIVIDUAL</option>
        <option >GRUPAL</option>
      </select>
    </div>

    <!-- Descripción -->
    <div class="form_grupo">
      <label for="descripcion"><strong>DESCRIPCIÓN</strong></label>
      <textarea id="descripcion" placeholder="escribe aquí"></textarea>
    </div>

    <!-- Fecha de apertura -->
    <div class="form_grupo">
      <label for="fecha_apertura"><strong>FECHA DE APERTURA</strong></label>
      <input type="date" id="fecha_apertura">
    </div>

    <!-- Fecha de cierre -->
    <div class="form_grupo">
      <label for="fecha_cierre"><strong>FECHA DE CIERRE</strong></label>
      <input type="date" id="fecha_cierre">
    </div>

    <!-- Adjuntos -->
    <div class="form_grupo">
      <label><strong>ADJUNTOS</strong></label>
      <label class="subir_archivo">
        <span><img src="./img/icono/adjuntar.png" alt="icono_clip"></span>
        <span>Archivos PDF, DOC, JPG</span>
        <input type="file" id="adjunto" multiple>
      </label>
    </div>

    <!-- Grupos (solo si es grupal) -->
    <div class="form_grupo fila_grupo active" id="grupal">
      <label><strong>GRUPOS</strong></label>
      <a href="añadir_grupo.php"><button type="button">+ AÑADIR GRUPO</button></a>
    </div>

    <!-- Botones -->
    <div class="botones">
      <button type="button" onclick="cancelar()">CANCELAR</button>
      <button type="button" onclick="guardarFormulario()">GUARDAR</button>
    </div>

  </form>
</body>
</html>

