<!DOCTYPE php>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=2">
    <link href="https://fonts.cdnfonts.com/css/sansation" rel="stylesheet"> <!-- tipo de letra -->
    <link rel="stylesheet" href="estilo_gti.css">

    <title>GTI</title>
</head>
<body>
<!-- Sección HEADER -->
<?php include('header_gti.html')?>
<!--Fin de HEADER -->
      <!-- Sección sobre PROA -->
<main class="sobre_proa" id="sobre_proa">
  <div class="texto-principal">
    <h1>
      PROA, la herramienta web que solventa los problemas de <br> comunicación entre los docentes y sus alumnos.
    </h1>
  </div>
  <div class="cajas">
    <div class="caja">
      <h3>Qué es PROA</h3>
      <p>
        PROA es una herramienta hecha por y para las instituciones. Su principal objetivo es agilizar la comunicación entre los miembros de la institución.
      </p>
    </div>
    <div class="caja">
      <h3>Beneficios de usar PROA</h3>
      <p>
        PROA destaca por ser una herramienta responsive y multiplataforma creada para mejorar la experiencia de sus usuarios.
      </p>
    </div>
    <div class="caja">
      <h3>Una herramienta para todos</h3>
      <p>
        PROA propone diferentes versiones del diseño para adaptarse a las diferentes necesidades del usuario.
      </p>
    </div>
  </div>
  <div class="cta">
    <h2>PRUEBA PROA</h2>
    <a href="registro.html"><button>DEMO</button></a>
  </div>
</main>

<!-- Fin de la sobre PROA -->

<!-- Sección accesibilidad -->
<section class="accesibilidad">
    <div class="titulo-accesibilidad">
        <h1>Accesibilidad</h1>
    </div>
    <p>PROA en un futuro dispondrá de diferentes versiones de diseño en su interfaz, tratando de adaptarse de la mejor manera a personas con diferentes tipos de dificultades visuales como fotosensibilidad, dislexia o daltonismo.</p>
    <ul>
        <li>
            <h3>Modo Claro</h3>
            <p>Para quienes buscan un diseño más iluminado y tradicional, es el estilo por defecto de la página.

            Utiliza tonalidades y azuladas junto a otras más oscuras.</p>
            <ul>
                <li><img src="color 1.png" alt="Color azul claro"></li>
                <li><img src="color 2.png" alt="Color azul principal"></li>
                <li><img src="color 3.png" alt="Color gris"></li>
            </ul>
            <!-- añadir colores de ejemplo -->
        </li>
        <li>
            <h3>Modo Oscuro</h3>
            <p>Para personas fotosensibles o que pasan mucho tiempo delante de las pantallas.

            Utiliza versiones más oscuras de los colores de la versión clara.</p>
            <ul>
                <li><img src="color 4.png" alt="Color azul"></li>
                <li><img src="color 5.png" alt="Color azul oscuro"></li>
                <li><img src="color 6.png" alt="Color gris más oscuro"></li>
            </ul>
            <!-- añadir colores de ejemplo -->
        </li>
        <li>
            <h3>Daltonismo</h3>
            <p>Para personas con diferentes tipos de daltonismo.

            Utiliza colores más diferenciables en algunas utilidadesa lo largo de la página.</p>
            <ul>
                <li><img src="color 7.png" alt="Color azul claro"></li>
                <li><img src="color 8.png" alt="Color violeta"></li>
                <li><img src="color 9.png" alt="Color mostaza"></li>
            </ul>
            <!-- añadir colores de ejemplo -->
        </li>
        <li class='otros'>
            <div class=texto-otros>
            <h3>Otros </h3>
           <p> - Cambio de letra a verdana para las personas con dislexia.<br>

            - Cambio a diferentes tamaños de letra para otro tipo de dificultades visuales.</p>
            </div>
            <ul>
                <li class='grande'><p>Verdana Grande</p></li>
                <li class='medio'><p>Verdana medio</p></li>
                <li class='pequeño'><p>Verdana pequeño</p></li>
            </ul>
            <!-- añadir textos de ejemplo -->
        </li>
    </ul>
<!-- Fin de la sección accesibilidad-->
<!-- Sección acerca de GTI-->
<main class="acerca_de_gti">
<div class='titulo-gti'><h1>Acerca de GTI</h1></div>
 <div class="acerca-gti">
    <div class="caja-gti">
      <div class="acerca-de"><h3>acerca de GTI</h3></div>
      <p><em>GTI es una startup que nace en la UPV con la idea de crear módulos web para instituciones educativas con el objetivo de ayudar a la comunicación docente-alumnado con interfaces modernas que ofrecen una gran experiencia de usuario</em></p>
    </div>
    <div class="imagen1">
      <img src="gti1.jpg" alt="Imagen que acompaña acerca de GTI">
    </div>
  </div>

  <div class="actualidad">
    <div class="imagen2">
      <img src="gti2.jpg" alt="Imagen que acompaña GTI en la actualidad">
    </div>
    <div class="caja-acerca">
      <div class="gti-actualidad"><h3>GTI en la actualidad</h3></div>
      <p><em>Actualmente GTI trata con su herramienta web llamada PROA que busca ser resiliente, es decir, que se adapte y evolucione junto con las nuevas generaciones.</em></p>
    </div>
  </div>
</section>
<!-- Sección FOOTER -->
<iframe src="foot_gti.html" frameborder="0"></iframe>
<!-- Fin de FOOTER -->
</body>
</html>