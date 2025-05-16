<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <script src="js/FAQS.js" defer></script>
    <link rel="stylesheet" href="./css/estilo_faqs.css" />
    <title>FAQS</title>
</head>
<body>
    <!-- HEADER -->
    <?php include('header_gti.html'); ?>

    <!-- Sección de preguntas frecuentes -->
    <main id="FAQS">
        <h3>FAQS</h3>
        <div class="Preguntas">

            <div class="Pregunta">
                <label>¿Cómo puedo acceder a la demo?</label>
                <button class="toggle-btn" onclick="desplegar(this)">+</button>
                <div class="info">
                    Para poder acceder a la demo de PROA debe acceder al HOME y pulsar DEMO. Una vez pulse será redirigido a un formulario de registro que debe rellenar para poder acceder.
                </div>
            </div>

            <div class="Pregunta">
                <label>¿Qué ocurre si olvido mi contraseña?</label>
                <button class="toggle-btn" onclick="desplegar(this)">+</button>
                <div class="info">
                    Si se olvida su contraseña deberá escribir una incidencia. Se espera a futuro implementar una funcionalidad que le permita recuperar su contraseña.
                </div>
            </div>

            <div class="Pregunta">
                <label>Dentro de PROA ¿Cómo puedo seleccionar la vista que quiero observar?</label>
                <button class="toggle-btn" onclick="desplegar(this)">+</button>
                <div class="info">
                    Si ha accedido como cliente, podrá seleccionar la vista deseada. Si es alumno o profesor, no podrá cambiar la vista.
                </div>
            </div>

            <div class="Pregunta">
                <label>Dentro de PROA ¿Cómo puedo cambiar mis ajustes de accesibilidad?</label>
                <button class="toggle-btn" onclick="desplegar(this)">+</button>
                <div class="info">
                    Vaya al apartado de cuenta y luego a ajustes. Allí podrá modificar el tema, tamaño y tipografía de la letra.
                </div>
        </div>
    </div>
    </main>

    <!-- FOOTER -->
    <footer>
        <?php include('foot_gti.html'); ?>
    </footer>
</body>
</html>
