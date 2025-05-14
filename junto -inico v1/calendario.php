<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>PROA/Calendario</title>
  <style>
     /* Estilos de ejemplo */
    .calendario {
      border-collapse: collapse;
      width: 100%;
    }
    .calendario td, table.calendario th {
      border: 1px solid #ccc;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      width: 14.28%;
    }
    .calendario td.celda_vacia {
      background-color: #f9f9f9;
      cursor: default;
      color: #9c9c9c;
    }
    .calendario td.selected {
      background-color: #eee;
    }
    .encabezadoo_tabla {
      background-color: gray;
      color: white;
    }
    .num_dia{
      font-size: 10px;
    }
    .evento{
      background-color: #9c9c9c;
    }
    .hoy{
      background-color: yellow;
    }
    
  </style>
  <script src="js/calendario.js"  defer ></script>
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!-------------------------------------->
<h1>Bienvenido, <?= htmlspecialchars($usuario['nombre']) ?>!</h1>
  <!-- Leyenda -->
  <article class="leyenda">
    <img src="imagen.jpg" alt="cuadrado rosa ">
    <span>Exámenes</span><br>
    <img src="imagen.jpg" alt="cuadrado verde ">
    <span>Tareas</span>
  </article>

  <!-- Desplegable de mes -->
  <select class="desplegable" id="desplegable_mes">
<!-- Se generara desde el JS -->
  </select>

  <!-- Calendario -->
  <table class="calendario" id="calendario_global">
<!-- Se generara desde el JS -->
  </table>

  <article id="posit-info">
    <p id="infoText">Haz clic en un día.</p>
  </article>
</body>
</html>