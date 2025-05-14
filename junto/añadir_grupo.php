<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Links del js y del css -->
    <script src="js/Grupos.js" defer></script>

    <title>Crear grupos</title>
</head>
<body>
<main>
    <!-- Menú migas de pan -->
     <div>
      <a href="tareas.php"> TAREAS</a>/<a href="crear_tareas.php">CREAR TAREA</a>/ <a href="añadir_grupo.php">AÑADIR GRUPO</a>
    </div>

    <!-- Contenido de los grupos-->
    <div id="Grupos"></div>


    <section class="Botones">
    <!-- Botones de envio -->
        <button onclick="window.location.href='nuevogrupo.php'">Nuevo grupo</button>
        <button onclick="window.location.href='editar_tareas.php'">Cancelar</button>
        <button onclick="comprobacion_grupos_hechos()">Guardar</button>
    </section>
</main>
</body> 
</html>