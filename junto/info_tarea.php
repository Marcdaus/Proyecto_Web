<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Links de los estilos y del javascript -->
        <script src="js/info_tarea.js" defer></script>
    <title>Información de la tarea </title>
</head>
<body>
    <main>

        <!-- Menú migas de pan -->
        <article class="menu_migas_pan">
            <a href="tareas.php"> TAREAS </a>/
            <a href="info_tarea.php">  </a>
        </article>
        <!-- Icono de la tarea -->
        <article class="icono">
             
        </article>

        <!-- Descripción de la tarea seleccionada -->
        <div class="descripción"></div>

        <!-- Adjuntos que tiene la tarea -->
        <div class="Adjuntos_de_la_tarea"></div>

        <!-- Alumno adjunta archivos -->
        <div class="Añadir_adjuntos">
            <span><img src="" alt="icono_clip"></span><!-- Añadir imagen -->
            <span>Archivos PDF, DOC, JPG</span>
            <input type="file" id="adjunto" multiple>
        </div>
        <button class="enviar" >ENVIAR</button>
    </main>
    
</body>
</html>