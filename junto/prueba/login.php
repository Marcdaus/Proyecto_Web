<?php
    session_start();

// Si ya está logueado, redirigir a inicio
if (isset($_SESSION['usuario'])) {
    header("Location: inicio.php");
    exit();
}

$mensaje = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Usuario y contraseña definidos manualmente
    $usuario_valido = 'admin';
    $clave_valida = '1234';

    $usuario = $_POST['usuario'] ?? '';
    $clave = $_POST['clave'] ?? '';

    if ($usuario === $usuario_valido && $clave === $clave_valida) {
        $_SESSION['usuario'] = $usuario;
        header("Location: inicio.php");
        exit();
    } else {
        $mensaje = 'Usuario o contraseña incorrectos';
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
</head>
<body>
  <h2>Iniciar sesión</h2>
  <form method="POST">
    <input type="text" name="usuario" placeholder="Usuario" required><br>
    <input type="password" name="clave" placeholder="Contraseña" required><br>
    <button type="submit">Entrar</button>
  </form>
  <p style="color:red;"><?= $mensaje ?></p>
</body>
</html>
