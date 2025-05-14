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
    <title>PROA/Cuenta</title>
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!-------------------------------------->
<main class="Opciones_ajustes">
    <a href="Informacion_basica.php">INFROMACIÓN BÁSICA</a>
    <a href="cambiar_contraseña.php"> CAMBIAR CONTRASEÑA</a>
    <a href="ajustes.php">AJUSTES </a>
</main>

    
</body>
</html>