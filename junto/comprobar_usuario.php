<?php
session_start();

// Comprobamos si hay un usuario guardado en la sesión
if (!isset($_SESSION['usuario'])) {
    // Si no hay sesión activa, redirigimos al login
    header("Location: login.php");
    exit;
}

// Guardamos los datos del usuario en la varibale usuario
$usuario = $_SESSION['usuario'];
?>