<?php
//==================================================================================================================================
//                                        AQUI EMPIEZA EL CÓDIGO DEL LOGIN (PHP)
//==================================================================================================================================

session_start(); // Iniciamos la sesión para poder guardar datos del usuario

// Este if comprueba que el formulario haya sido enviado mediante el método POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Recogemos los valores enviados desde el formulario
    $email = $_POST['usuario'];
    $password = $_POST['password'];

    // Cargamos el contenido del archivo JSON donde están registrados los usuarios
    $contenido = file_get_contents('./json/usuarios.json');

    // Convertimos el contenido JSON en un array asociativo de PHP
    $usuarios_json = json_decode($contenido, true);

    // Recorremos todos los usuarios del JSON para comprobar si hay coincidencia
    foreach ($usuarios_json as $usuario) {
        // Comprobamos si el email y la contraseña coinciden con algún usuario
        if ($usuario['email'] === $email && $usuario['password'] === $password) {
            $_SESSION['usuario'] = $usuario;//guardamos las credenciales
            header("Location: calendario.php");// Redirigimos al usuario al calendario
        }
    }
}
?>
<!--==================================================================================================================================  
                                     AQUI EMPIEZA EL CÓDIGO DEL LOGIN (HTML)
===================================================================================================================================-->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=2">
    <title>Login</title>
    <!-- Aquí podrías enlazar tu archivo de estilos CSS si lo deseas -->
</head>
<body>
    <!-- Caja principal del formulario de login -->
    <main class="Caja_login">
        <h2>Bienvenido de nuevo</h2>

        <!-- Mostramos el mensaje de error si existe -->
        <?php if (!empty($error)) echo "<p style='color:red;'>$error</p>"; ?>

        <!-- Formulario de inicio de sesión -->
        <form id="login" method="POST" action="">
            <!-- Campo para introducir el email -->
            <label for="email">Email </label>
            <input id="email" type="email" name="usuario" placeholder="Introduzca su email" required autofocus>

            <!-- Campo para introducir la contraseña -->
            <label for="password">Contraseña </label>
            <input id="password" type="password" name="password" placeholder="Introduzca su contraseña" required>

            <!-- Botón para enviar el formulario -->
            <input type="submit" value="Login">
        </form>
</main>

    <!-- Caja secundaria con opción para registrarse -->
    <article class="Caja_registro">
        <h2>¿Aún no tienes una cuenta?</h2>
        <!-- Botón que redirige a la página de registro -->
        <form action="registro.php" method="get">
            <input type="submit" value="Regístrate">
        </form>
</article>
</body>
</html>

