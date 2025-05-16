<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Aquí van los links necesarios -->
    <script src="js/Incidencias.js" defer></script>
    <link rel="stylesheet" href="css/incidencias.css">

    <title>Incidencias</title>
</head>

<body>
    <!-- Incluimos el header de la pagina -->
    <?php include('header_proa.php') ?>
    <!-------------------------------------->
    <!-- Encabezado de la página -->
    <h3>FORMULARIO DE INCIDENCIAS</h3>
    
    <!-- Sección del formulario -->
    <section id="Seccion_formulario">
    <!-- Contenedor del formulario -->
        <div class="caja_formulario">

            <!-- Aquí empieza el formulario de la incidencia -->
            <form id="Inputs_form">

                <!-- Aquí empiezan los elementos del formulario -->
                 <label for="email">Introduce tu correo electrónico utilizado en PROA</label>
                <input id="email" type="email" placeholder="Introduce su correo electrónico" required autofocus autocomplete="email">

                <label for="lugarinc">¿Donde se encuentra el error?</label>
                <select name="Desplegable_lugar" id="lugarinc" required>
                    <option value="" selected disabled> </option>
                    <option value="Home">HOME</option>
                    <option value="Login">LOGIN</option>
                    <option value="Modulo_tareas">MÓDULO TAREAS</option>
                    <option value="Ajustes">AJUSTES</option>
                    <option value="Calendario">CALENDARIO</option>
                    <option value="Calificaciones_globales">CALIFICACIONES GLOBALES</option>
                </select>

                <label for="descripción">Descripción de la incidencia</label>
                <input id="descripción" type="text" placeholder="Introduce una breve descripción de la incidencia" required>

                <label for="archivo">Adjuntos</label>
                <input id="archivo" type="file" placeholder="Archivos JPG,PNG,PDF">

                <!-- Aquí se encuentran los botones de enviar y cancelar-->
                <input id="Enviar" type="submit" value="Enviar" >
                <input id="Cancelar" type="button" value="Cancelar" onclick="window.location.href='calendario.php'">
            </form>
        </div>
    </section>
</body>
</html>


