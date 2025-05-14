<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php');
/*--------------------------------------------------------------------------------------------------------------*/

// Asegúrate de que se ha iniciado sesión
$usuario_sesion = $_SESSION['usuario'] ;

// Leer usuarios del archivo JSON
$usuarios_json = file_get_contents('json/usuarios.json');
$usuarios = json_decode($usuarios_json, true);

// Inicializamos array vacío
$usuario_datos = [];

$email_session = $usuario_sesion['email'];//sacamos el email

//buscamos al usuario en el json y sacamos toda su informacion
foreach ($usuarios as $user) {
    if (isset($user['email']) && $user['email'] === $email_session) {
        $usuario_datos = $user;
        break;
    }
}

// Convertimos a JSON para pasarlo al JS
$usuario_js = json_encode($usuario_datos);
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PROA/Cuenta/Información básica</title>

    <script src="js/informacion_basica.js" defer ></script>
    <script>
        // Pasamos los datos del usuario desde PHP a JavaScript
        const usuario = <?php echo $usuario_js; ?>;
    </script>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
        }

        form div {
            margin-bottom: 15px;
        }

        label {
            font-weight: bold;
        }
    </style>
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!-------------------------------------->
    <h2>INFORMACIÓN BÁSICA</h2>
    <a href="./cuenta.php"><button>Volver</button></a>

    <main>
        <form id="Informacion">
            <div class="Dni">
                <label>DNI</label>
                <div id="Dni-info"></div>
            </div>

            <div class="Nombre">
                <label>NOMBRE</label>
                <div id="nombre-info"></div>
            </div>

            <div class="Apellido">
                <label>APELLIDOS</label>
                <div id="apellidos-info"></div>
            </div>

            <div class="Curso">
                <label>CURSO</label>
                <div id="curso-info"></div>
            </div>

            <div class="Fecha_alta">
                <label>FECHA DE ALTA</label>
                <div id="fecha_alta-info"></div>
            </div>
        </form>
    </main>
</body>
</html>
