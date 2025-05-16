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
  <title>Crear Tarea</title>

  <script src="js/crear_tareas.js"defer></script>
  <link rel="stylesheet" href="./css/crear_tareas.css">
</head>

<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa-tareas.php') ?>
<!-------------------------------------->
  
  <!-- Título pequeño de la página -->
  <div>
    <a href="tareas.php">TAREAS</a> /
    <a href="añadir_grupo.php">CREAR TAREAS</a>
  </div>

  <!-- Formulario para crear la tarea -->
  <form class="formulario_tarea_crear">

  <!-- Div donde aparecera¡án los errores--->
  <div id="erroresFecha" class="oculto"></div>


    <!-- Fila 1: Input para el nombre de la tarea -->
    <div class="form-group">
      <label for="nombre">NOMBRE</label>
      <input type="text" id="nombre" placeholder="Nombre de la tarea" required>
    </div>

    <!-- Fila 2: Desplegable para el tipo -->
    <div class="form-group">
      <label for="desplegable_tipo">TIPO</label>
      <select id="desplegable_tipo">
        <option selected>INDIVIDUAL</option>
        <option>GRUPAL</option>
      </select>
    </div>

    <!-- Fila 3: Input para la descripción de la tarea -->
    <div class="form-group">
      <label for="descripcion">DESCRIPCIÓN</label>
      <textarea id="descripcion" placeholder="Escribe aquí" required></textarea>
    </div>

    <!-- Fila 4: Input de fecha para la fecha de apertura -->
    <div class="form-group">
      <label for="fecha_apertura">FECHA DE APERTURA</label>
      <input type="date" id="fecha_apertura" required>
    </div>

    <!-- Fila 5: Input de fecha para la fecha de cierre -->
    <div class="form-group">
      <label for="fecha_cierre">FECHA DE CIERRE</label>
      <input type="date" id="fecha_cierre" required>
    </div>

    <!-- Fila 6: Input con imagen y texto para subir archivos -->
    <div class="form-group">
      <label for="adjunto">ADJUNTOS</label>
      <label class="subir_archivo">
        <span><img src="./img/icono/adjuntar.png" alt="icono_clip"></span>
        <span>Archivos PDF, DOC, JPG</span>
        <input type="file" id="adjunto" multiple>
      </label>
    </div>

    <!-- Fila 7: Botón para añadir grupos -->
    <div class="form-group fila_grupo" id="grupal">
      <label>GRUPOS</label>
      <a href="añadir_grupo.php">
        <button type="button">+ AÑADIR GRUPO</button>
      </a>
    </div>

    <!-- Botones para cancelar o guardar -->
    <div class="botones">
      <button type="button" onclick="cancelar()">CANCELAR</button>
      <button type="button" onclick="guardarFormulario()">GUARDAR</button>
    </div>
  </form>
</body>
</html>
