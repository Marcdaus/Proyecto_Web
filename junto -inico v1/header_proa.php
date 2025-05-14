<!-- html de header -->
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/header.css" /> <!-- css de header -->
</head>

<body>
  <!-- navbar -->
  <nav class="navbar">
    <div class="nav__left">
      <a href="calendario.php"> <!-- html de página principal -->
        <img src="assets/logo.svg" class="nav__left__logo" alt="ProA" /> 
      </a>
      <!-- botones de asignaturas con svg estrellas en navbar -->
      <div class="nav__left__links">
        <a href="#" class="nav__left__link">
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="nav__left__link__text">ÁLGEBRA</span>
        </a>
        <a href="#" class="nav__left__link">
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="nav__left__link__text">FÍSICA</span>
        </a>
        <a href="#" class="nav__left__link">
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="nav__left__link__text">PROYECTO WEB</span>
        </a>
      </div>
    </div>
    <div class="nav__right">
      <span class="nav__right__text">BIENVENIDO: <?= htmlspecialchars($usuario['nombre']) ?></span>
      <svg class="burger" viewBox="0 0 24 24" width="24" height="24">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
      <!-- dropdown menu hamburguesa con opciones -->
      <div class="dropdown-menu">
        <a href="#" class="dropdown-item" id="show-favorites">Asignaturas favoritas</a>
        <a href="#" class="dropdown-item">Cambiar vista profesor/alumno</a>
        <a href="cerrar_sesion.php" class="dropdown-item">Cerrar sesión</a>
      </div>
    </div>
  </nav>

  <!-- popup de asignaturas fav -->
  <div class="popup-overlay" id="favorites-popup">
    <!-- popup contenido -->
    <div class="popup-content">
      <!-- opción de asignaturas fav en popup -->
      <h2>ASIGNATURAS FAVORITAS</h2>
      <ul class="favorites-list">
        <li>
          <!-- svg estrellas y asignaturas en popup -->
          <span>Álgebra</span>
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </li>
        <li>
          <span>Física</span>
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </li>
        <li>
          <span>Proyecto Web</span>
          <svg class="custom-star custom-star-filled" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </li>
        <li>
          <span>Programación I</span>
          <svg class="custom-star custom-star-empty" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        </li>
        <li>
          <span>Programación II</span>
          <svg class="custom-star custom-star-empty" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        </li>
        <li>
          <span>Electrónica Básica</span>
          <svg class="custom-star custom-star-empty" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        </li>
        <li>
          <span>Proyecto CDIO</span>
          <svg class="custom-star custom-star-empty" viewBox="0 0 24 24">
            <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
          </svg>
        </li>
      </ul>
      <!-- botones de popup -->
      <div class="popup-buttons">
        <button class="popup-button save-button">Guardar</button>
        <button class="popup-button close-popup">Cerrar</button>
      </div>
    </div>
  </div>
  <!-- menu secundario -->
<?php include('menu_inicio.html') ?>
  <script src="js/header.js"></script> <!-- js de header -->
</body>
</html>