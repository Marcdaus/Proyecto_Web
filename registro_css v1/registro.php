<?php
// ========================================================================================================
//                                  CÓDIGO PHP PARA REGISTRAR USUARIOS
// ========================================================================================================

session_start();

// Este array sera una array de texto que servira para guardar cadenas de texto con el enuciado de el error
// alfinal de el codigo se mostraran todos los errores que han sucedido

// Recogemos los datos del formulario // %post['contenido'] ?? '' - sirve para declara las variables como '' en caso de no haber recivido el post
$nombre = $_POST['nombre'] ?? '';
$institucion = $_POST['institucion'] ?? '';
$email = $_POST['email'] ?? '';
$contraseña = $_POST['contraseña'] ?? '';
$contraseña2 = $_POST['contraseña2'] ?? '';

// Indicamos qué el primer formulario debe mostrarse (por defecto)
$mostrando_form1 = true;

// si recibe la contraseña es porque se a enviado el segundo formulario
if (isset($_POST['contraseña'])) {

    // Ruta al archivo JSON
    $archivo = './json/usuarios.json';

    // guardamos los usuarios del json a la variable $usuarios
    $usuarios = json_decode(file_get_contents($archivo), true);

    // añadimos un nuevo usuario a a la array
    $usuarios[] = [
        'nombre' => $nombre,
        'institucion' => $institucion,
        'email' => $email,
        'password' => $contraseña,
        'rol' => "cliente"

    ];

    // guardamos el nuevo suario en el json
    file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));

    // Guardamos el usuario en sesión para poder recojerlo en las siguientes paginas
    $_SESSION['usuario'] = [
        'nombre' => $nombre,
        'institucion' => $institucion,
        'email' => $email,
        'rol' => "cliente"

    ];

    // si todo a funcionado bien se redireg e al calendario
    header("Location: calendario.php");
    exit;
}
?>
<!-- ========================================================================================================
                                             CÓDIGO HTML PARA REGISTRAR USUARIOS
======================================================================================================== -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro</title>
    <link rel="stylesheet" href="css/registro.css">
    <script src="js/registro.js" defer ></script>
</head>
<body>
<section id="registro">
    <!-- titulo y tecto de la empresa -->
    <div class="div_texto_registro">
        <h1 class="titulo1_blanco">Crea tu cuenta en PROA para poder acceder a la DEMO ya</h1>
        <p class="texto_blanco">
        ¿Ya tienes cuenta? <a href="./login.php">Iniciar sesión</a>
        </p>
            <!-- enlace que redirige a la página de iciar sesion -->
    
    </div>
    <!--  fin titulo y tecto de la empresa -->
    <div class="div_registro">
        <h1 class="titulo1_negro">Regístrate a PROA</h1>

        <!-- FORMULARIO 1: CREDENCIALES -->
        <!-- el formulario comprueba si la variable mostrando_form esta en true y si lo esta le asigna un active a la clase del formulario -->
        <!-- onsubmit="event.preventDefault(); validarCredenciales();"> esto sirve para que el formulario no se envie y refreseque la pantalla ademas de ejecutar la funcion-->
        <form id="registro_credenciales" class="formulario <?= $mostrando_form1 ? 'active' : '' ?>" onsubmit="event.preventDefault(); validarCredenciales();">
            <div id="erroresJS" class="errores" style="display: none;"></div>
            <!-- inputs de credenciales que guardan medianet php lo escrito es decir si voy al formulario 1 escrivo alog
             y luego del formulario 2 vuelvo a el uno el formulario 1 contendra lo escrito antes gracias a las variables de php-->
            <p class="texto_input">Introduzca su nombre</p> 
            <input id="nombre" type="text" placeholder="nombre" value="<?= htmlspecialchars($nombre) ?>" autofocus>

            <p class="texto_input">Introduzca su institución</p> 
            <input id="institucion" type="text" placeholder="institución" value="<?= htmlspecialchars($institucion) ?>">

            <p class="texto_input">Introduzca su email</p> 
            <input id="email" type="email" placeholder="email" value="<?= htmlspecialchars($email) ?>">

            <br>
            <input type="submit" value="continuar">
        </form>
        <!-- FIN FORMULARIO 1: CREDENCIALES -->

        <!-- FORMULARIO 2: CONTRASEÑAS -->
         <!-- El formulario activa validarContraseñas(); funcion cuando se envia -->
        <form id="registro_contraseña" class="formulario <?= !$mostrando_form1 ? 'active' : '' ?>" method="POST" onsubmit="return validarContraseñas();">

        <div id="erroresPass" class="errores" style="display: none;"></div>

            <p class="texto_input">Introduzca una contraseña</p> 
            <input id="contraseña" name="contraseña" type="password" placeholder="contraseña">

            <p class="texto_input">Confirme su contraseña</p> 
            <input id="contraseña2" type="password" placeholder="confirmar contraseña">

    <!--Reservamos estos datos para que el formulario se envie con los datos anteriores -->
            <input type="hidden" name="nombre" value="<?= htmlspecialchars($nombre) ?>">
            <input type="hidden" name="institucion" value="<?= htmlspecialchars($institucion) ?>">
            <input type="hidden" name="email" value="<?= htmlspecialchars($email) ?>">

            <br>
            <!-- boton para volver a otro formulario mediante una funcion de js volver() -->
            <button type="button" onclick="volver()">atrás</button>
            <input type="submit" value="enviar">
        </form> 
        <!-- FIN  FORMULARIO 2: CONTRASEÑAS -->
    </div>
</section>
</body>
</html>
