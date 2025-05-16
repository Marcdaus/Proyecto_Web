<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php');
// declaramos variables
$error = "";
$mensaje = "";

// Si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $password_vieja = $_POST['password_vieja'];
    $password_nueva = $_POST['password_nueva'];
    $password_repetida = $_POST['password_repetida'];

    // Validamos que las nuevas contraseñas coincidan
    if ($password_nueva !== $password_repetida) {
        $error = "Las contraseñas nuevas no coinciden.";
        //echo "Error: las contraseñas no coinciden";
        echo "<script>console.error('Error: Las contraseñas nuevas no coinciden.')</script>";

    } else {
        // Cargamos los usuarios desde el archivo JSON
        $contenido = file_get_contents('./json/usuarios.json');
        $usuarios = json_decode($contenido, true);

        $usuario_actual = $_SESSION['usuario'];
        $email = $usuario_actual['email'];
        $encontrado = false;

        // Recorremos los usuarios para encontrar el actual y actualizarlo
        foreach ($usuarios as &$usuario) {
            if ($usuario['email'] === $email) {
                // Verificamos la contraseña actual
                if ($usuario['password'] !== $password_vieja) {
                    $error = "La contraseña actual no es correcta.";
                } else {
                    $usuario['password'] = $password_nueva;
                    $_SESSION['usuario'] = $usuario; // Actualizamos la sesión
                    file_put_contents('./json/usuarios.json', json_encode($usuarios, JSON_PRETTY_PRINT));
                    $mensaje = "¡Contraseña actualizada correctamente!";
                }
                $encontrado = true;
                break;
            }
        }

        if (!$encontrado && $error === "") {
            $error = "Usuario no encontrado.";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>PROA/Cambiar Contraseña</title>
   
    <link rel="stylesheet" href="css/contraseña.css">
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!-------------------------------------->
    <h2>CAMBIAR CONTRASEÑA</h2>
    <a href="./cuenta.php"><button>Volver</button></a>
    <div class="Contenedor_inputs_password">
   

        <?php if (!empty($error)) echo "<div class='errores'>$error</div>"; ?>
        <?php if (!empty($mensaje)) echo "<div class='mensaje'>$mensaje</div>"; ?>

        <!-- Aquí empieza el formulario del login -->
        <form method="POST" action="">
            <label>INTRODUCE TU CONTRASEÑA ACTUAL</label>
            <input type="password" name="password_vieja" placeholder="Introduce tu contraseña actual" required autofocus>

            <label>INTRODUCE TU NUEVA CONTRASEÑA</label>
            <input type="password" name="password_nueva" placeholder="Introduce nueva contraseña" required>

            <label>REPITE LA NUEVA CONTRASEÑA</label>
            <input type="password" name="password_repetida" placeholder="Repite la nueva contraseña" required>
            
            <input type="submit" value="Enviar">
            <input type="button" value="Cancelar" onclick="window.location.href='./cuenta.php'">
        </form>
    </div>
</body>
</html>
