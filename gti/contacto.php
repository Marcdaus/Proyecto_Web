<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Aquí van los links necesarios -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
    <script src="js/Contacto.js"defer></script>
    <link rel="stylesheet" href="estilo_contacto.css">
    <title>Contacto_de_GTI</title>
</head>
<body>
    <!-- Sección HEADER -->
<?php include('header_gti.html')?>
    <!--Fin de HEADER -->
    <h1>Contacto</h1>
    <h2> Tiene alguna duda? ¡Consulte nuestros <a ref='FAQS.html'>FAQs</a> o contáctenos!</h2>

    <!--Aquí empieza el formulario del contacto -->
    <form id="Contacto">

        <!-- Texto y estructura del input del nombre -->
        <label for="nombre">Nombre </label>
        <input id="nombre" type="text" placeholder="Introduzca aquí su nombre de usuario" required autofocus>

        <!-- Texto y estructura del input de la institución-->
        <label for="institucion">Institución </label>
        <input id="institucion" type="text" placeholder="Introduzca la institución a la que pertenece" required >

        <!-- Texto y estructura del input del email -->
        <label for="email">Correo electrónico </label>
        <input id="email" type="email" placeholder="Introduzca su correo electrónico" required>

        <!-- Texto y estructura del input de la consulta -->
        <label for="contenido">Consulta </label>
        <textarea id="contenido" name="contenido" required></textarea>

        <!-- Aquí están los botones de enviar y cancelar del formulario-->
        <input id="Enviar" type="submit"value="Enviar">
        <input id="Cancelar" type="button" value="Cancelar" onclick="window.location.href='index.html';">
        
    </form>
<?php include('foot_gti.html')?>
</body>
</html>  