

<?php
/*-- Incluimos el archivo comprobar usuario para pasar la información y comprobar que haya un usuario logeado --*/
include('comprobar_usuario.php')
/*--------------------------------------------------------------------------------------------------------------*/
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <script src="js/editar.js" defer></script>
    <link rel="stylesheet" href="css/editar_grupos.css">

    <title>Editar grupo</title>

<!-- CSS DE EJEMPLO-->
    <style>/*
      body {
        font-family: sans-serif;
        padding: 20px;
      }
  
      .lista {
        list-style: none;
        padding: 0;
      }
  
      .lista li {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
      }
  
      input[type="checkbox"] {
        appearance: none;
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        background-color: white;
        border: 2px solid #000;
        border-radius: 5px;
        margin-right: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
  
      input[type="checkbox"]:checked {
        background-color: #000;
      }
  
      input[type="checkbox"]:checked::after {
        content: '✔';
        color: white;
        font-size: 16px;
        line-height: 1;
      }
  
      */
    </style>
<!---------------------------------------------------------------------->

</head>
<body>

  <!-- Incluimos el header de la pagina -->
<?php include('header_proa-tareas.php') ?>
<!-------------------------------------->
  

    <!-- Menú migas de pan -->
    <div>
        <a href="tareas.php"> TAREAS </a>/
        <a href="crear_tareas.php">CREAR TAREA </a>/
         <a href="añadir_grupo.php">AÑADIR GRUPO</a>/
         <a href="editar.php">EDITAR GRUPO</a>
    </div>
    <form>
    <!-- Contenedor para mostrar los grupos -->
  <section id="nombreGrupo"></section>

    <!-- Div donde aparecera¡án los errores--->
    <div id="erroresFecha" class="oculto"></div>

    <!-- Campo para el nombre del grupo -->
    <label for="nombre_grupo">Nombre del grupo:</label><br />
    <input type="text" id="nombre_grupo" placeholder="Nombre del grupo" /><br /><br />

    <!-- Lista de miembros con checkboxes -->
    <div id="miembros_grupo">
      <ul class="lista">
        <input type="checkbox" name="miembros[]" id="Cuenca García, Mar"> <label for="Cuenca García, Mar">Cuenca García, Mar</label>
        <input type="checkbox" name="miembros[]" id="Villalba Murcia, Marc"> <label for="Villalba Murcia, Marc">Villalba Murcia, Marc</label>
        <input type="checkbox" name="miembros[]" id="Maskimova, Maia"> <label for="Maskimova, Maia">Maskimova, Maia</label>
        <input type="checkbox" name="miembros[]" id="Díaz Sevilla, Lucía"> <label for="Díaz Sevilla, Lucía">Díaz Sevilla, Lucía</label>
        <input type="checkbox" name="miembros[]" id="Olives García, Cristina"> <label for="Olives García, Cristina">Olives García, Cristina</label>
        <input type="checkbox" name="miembros[]" id="Ribelles Gil, Gema"> <label for="Ribelles Gil, Gema">Ribelles Gil, Gema</label>
        <input type="checkbox" name="miembros[]" id="Flores Ripoll, Alba"> <label for="Flores Ripoll, Alba">Flores Ripoll, Alba</label>
        <input type="checkbox" name="miembros[]" id="Pliego Montalbá, Beatriz"> <label for="Pliego Montalbá, Beatriz">Pliego Montalbá, Beatriz</label>
        <input type="checkbox" name="miembros[]" id="Simants Dregdge, Lief"> <label for="Simants Dregdge, Lief">Simants Dregdge, Lief</label>
        <input type="checkbox" name="miembros[]" id="Kirdsch Kampshell, Merline"> <label for="Kirdsch Kampshell, Merline">Kirdsch Kampshell, Merline</label>
        <input type="checkbox" name="miembros[]" id="Rawstorne, Debora"> <label for="Rawstorne, Debora">Rawstorne, Debora</label>
      </ul>
    </div>

    <!-- Botones de guardar y cancelar -->
    <div class="botones" >
      <input type="button" value="Cancelar" onclick="window.location.href='añadir_grupo.php'" />
      <input id="guardar" type="button" value="Guardar" onclick="guardarGrupo()" />
    </div>
  </form>

</body>
</html>