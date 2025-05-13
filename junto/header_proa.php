<!-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado -->
<?php include('comprobar_usuario.php');?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encabezado</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- inicio del header -->
    <header>
        <!-- Este div contiene el logo de proa -->
        <div class="header_PROA">
            <div class="logo">
            
            <a href="calendario.php">
                <img src="img/PROA.png" alt="logo">
            </a>
                
            </div>
            <!-- creamos elementos de navegacion para acceder a las asignaturas-->
            <nav>
                <ul>
                    <li><a href="tareas.php"><button class="boton_asignatura">ÁLGEBRA</button></a></li>
                    <li><a href="tareas.php"><button class="boton_asignatura">FÍSICA</button></a></li>
                    <li><a href="tareas.php"><button class="boton_asignatura">PROYECTO WEB</button></a></li>
                </ul>
            </nav>
            <!-- Seccion para gestionar elementos de la cuenta de un usuario-->
            <div class="cuenta">
                <div class="welcome">
                <p>Bienvenido, <?= htmlspecialchars($usuario['nombre']) ?>!</p>

                </div>
            </div>
        </div>
    </header>
    <!-- fin del header -->

</body>
</html>
