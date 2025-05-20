<?php
// ========================================================================================================
//                                  CÓDIGO PHP PARA REGISTRAR USUARIOS
// ========================================================================================================

session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recogemos los datos del formulario
    $nombre = $_POST['nombre'] ?? '';
    $institucion = $_POST['institucion'] ?? '';
    $email = $_POST['email'] ?? '';
    $contraseña = $_POST['contraseña'] ?? '';

    // Verificamos que no falten campos
    if ($nombre === '' || $institucion === '' || $email === '' || $contraseña === '') {
    //error
    }

    // Ruta del archivo JSON
    $archivo = './json/usuarios.json';

    // Leemos los usuarios existentes o iniciamos el array vacío
    $usuarios = file_exists($archivo) ? json_decode(file_get_contents($archivo), true) : [];

    // Comprobamos si el email ya está registrado
    foreach ($usuarios as $usuario) {
        if ($usuario['email'] === $email) {
            echo "<script>
                alert('Este email ya está registrado.');
                window.location.href = 'registro.php';
            </script>";
            exit;
        }
    }

    // Añadimos el nuevo usuario al array (con contraseña encriptada)
    $usuarios[] = [
        'nombre' => $nombre,
        'institucion' => $institucion,
        'email' => $email,
        'contraseña' => password_hash($contraseña, PASSWORD_DEFAULT)
    ];

    // Guardamos el array actualizado en el archivo JSON
    file_put_contents($archivo, json_encode($usuarios, JSON_PRETTY_PRINT));

    // Guardamos datos básicos en sesión
    $_SESSION['usuario'] = [
        'nombre' => $nombre,
        'institucion' => $institucion,
        'email' => $email
    ];

    // Redirigimos al calendario
    header("Location: calendario.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
    <script defer  src = "js/registro.js" ></script>
    <title>Registro</title>
    <link rel="stylesheet" href="css/registro.css">
</head>
<body>
<!-- Registro de usuario -->
<section id="registro">
    <div class="div_texto_registro">
        <h1 class="titulo1_blanco">Crea tu cuenta en PROA para poder acceder a la DEMO ya</h1>
        <p class="texto_blanco">Potencia la comunicación y el aprendizaje en tu institución</p> 
    </div>

    <div class="div_registro">
        <h1 class="titulo1_negro">Regístrate a PROA</h1>

        <!-- Formulario de datos iniciales -->
        <form id="registro_credenciales" class="formulario active" onsubmit="event.preventDefault(); validarCredenciales();">
            <p class="texto_input">Introduzca su nombre</p> 
            <input id="nombre" type="text" placeholder="nombre" autofocus>

            <p class="texto_input">Introduzca su institución</p> 
            <input id="institucion" type="text" placeholder="institución">

            <p class="texto_input">Introduzca su email</p> 
            <input name="email" type="email" placeholder="email">
            <br>
            <input type="submit" value="continuar">
        </form>

        <!-- Formulario de contraseña -->
        <form id="registro_contraseña" class="formulario" method="POST" action="registro.php" onsubmit="return validarContraseñasAntesDeEnviar();">
            <p class="texto_input">Introduzca una contraseña</p> 
            <input id="contraseña" name="contraseña" type="password" placeholder="contraseña">

            <p class="texto_input">Confirme su contraseña</p> 
            <input id="contraseña2" type="password" placeholder="contraseña">

            <!-- Campos ocultos para pasar datos del primer formulario -->
            <input type="hidden" name="nombre">
            <input type="hidden" name="institucion">
            <input type="hidden" name="email">
            <br>

            <button type="button" onclick="volver()">atrás</button>
            <input type="submit" value="enviar">
        </form> 
    </div>
</section>
</body>
</html>

