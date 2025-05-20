<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Links del js y del css -->
    <script src="js/Crear grupos.js" defer></script>

    <title>Nuevo grupo</title>
</head>
<body>
    <!-- Menú migas de pan -->
    <div>
        <a href="tareas.php"> TAREAS </a>/<a href="crear_tarea.php">CREAR TAREA </a>/ <a href="añadir_grupo.php">AÑADIR GRUPO</a>/<a href="nuevogrupo.php">NUEVO GRUPO</a>
    </div>

       <div class="Elementos_grupo">

        <!-- Nombre del grupo -->
         <label for="Nombre_grupo">NOMBRE DEL GRUPO</label>
         <input  id="Nombre_grupo" value="Grupo" type="text" placeholder="Introduce el nombre del grupo" required>

         <!-- Listado de alumnos -->
          <p>SELECCIONA LOS ALUMNOS QUE FORMARÁN PARTE DEL GRUPO</p>
          <ul id="lista_alumnos">

          </ul>
        </div>
        <article class="Botones">
          <!-- Botones de guardar y enviar -->
          <input type="submit" value="Cancelar" onclick="window.location.href='añadir_grupo.php'">
          <input type="submit" value="Guardar" onclick="window.location.href='añadir_grupo.php'">
        </article>

        
    
</body>
</html>