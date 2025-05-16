<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2">

  <title>PROA/Calendario</title>

  <script src="js/calendario.js" defer></script>
  <link rel="stylesheet" href="css/calendario.css">
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!-------------------------------------->

<main>
<div class = "contenedor">
  <!-- Desplegable de mes -->
  <select class="desplegable" id="desplegable_mes">
  <!-- Se generara desde el JS -->
  </select>
  <table class="calendario" id="calendario_global">
  <!-- Se generara desde el JS -->
  </table>
</div>
  <article id="posit-info">
    <p id="infoText">Haz clic en un día.</p>
  </article>
</main>

</body>
</html>
