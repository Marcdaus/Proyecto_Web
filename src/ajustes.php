<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/ajustes.js"defer></script>
    <link rel="stylesheet" href="css/ajustes.css">

    <title>Ajustes PROA</title>
</head>
<body>
<!-- Incluimos el header de la pagina -->
<?php include('header_proa.php') ?>
<!--------------------------------------> 
    <h1> AJUSTES</h1>
    <a href="./cuenta.php"><button>Volver</button></a> 
    <!-- Empieza el contenido de los ajustes -->
    <main class="ajustes_container">

        <!-- Empieza el formulario -->
        <form id="form_ajustes">

            <!-- Lista de los textos -->
            <ul class="Texto">
                <li>TEMA</li>
                <li>TAMAÑO DEL TEXTO</li>
                <li>TIPOGRAFÍA</li>
            </ul>
            <!-- Lista de los inputs de los datos -->
            <ul class="Desplegables_ajustes">
                <li>
                    <!-- Desplegable del tema -->
                    <select name="tema" id="tema">
                        <option value="tema_claro" selected>Claro</option>
                    </select>
                </li>
                <li>
                    <!-- Desplegable del tamaño -->
                    <select name="tamaño" id="tamaño">
                        <option value="pequeño">Pequeño</option>
                        <option value="mediano" selected>Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                </li>
                <li>
                    <!-- Desplegable de la tipografia -->
                    <select name="tipografia" id="tipografia">
                        <option value="arial" selected>Arial</option>
                        <option value="verdana">Verdana</option>
                    </select>
                </li>
            </ul>
            <!-- Botones de enviar y cancelar -->
            <input id="Enviar" type="submit" value="Enviar" >
            <input id="Cancelar" type="button" value="Cancelar" onclick="cancelar()">
        </form>
    </main>
    
</body>
</html>