<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inicio</title>
</head>
<body>
    <h1>Bienvenido, <?= htmlspecialchars($_SESSION['usuario']) ?>!</h1>
  <p>Has iniciado sesión correctamente.</p>
  <a href="logout.php">Cerrar sesión</a>
</body>
</html>
