<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Información Tarea Profesor</title>
    <style>
        /*De esta manera se puede meter l lupa dentro del input*/
        .buscador input[type="search"] {
  padding-left: 32px; /* espacio para la imagen */
  background-image: url("img/icono/gofre.png"); /* ruta de tu imagen */
  background-repeat: no-repeat;
  background-position: 8px center; /* posición de la lupa */
  background-size: 16px 16px; /* tamaño de la imagen */
}
    </style>
</head>
<body>
    <main>

        <!-- Menú migas de pan -->
        <article class="menu_migas_pan">
            <a href="tareas.php"> TAREAS </a>/
            <a href="info_tarea.php">  </a>
        </article>
        <article><p>Porcentaje de entregados:</p> </article>
        <div class="buscador">
            <input type="search"  placeholder= "Busca por nombre o fecha">
        </div>
        <div class="titulo">Listado de Entregas</div>
        <div class=entregados></div>

    
       
    </main>
    
</body>
</html>