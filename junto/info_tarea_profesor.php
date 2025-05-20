
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="js/info_profe_alumnos.js" defer></script>
  <title>Información Tarea Profesor</title>
  <style>
    .buscador input[type="search"] {
      padding-left: 32px;
      background-image: url("img/icono/gofre.png");
      background-repeat: no-repeat;
      background-position: 8px center;
      background-size: 16px 16px;
    }

    .tabla_tareas {
      width: 100%;
      border-collapse: collapse;
      margin-top: 1em;
    }

    .tabla_tareas th,
    .tabla_tareas td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }

    .tabla_tareas thead {
      background-color: #f2f2f2;
    }

    .fila_tarea:hover {
      background-color: #f9f9f9;
    }

    .buscador {
      margin: 1em 0;
    }

    .titulo_tabla {
      font-weight: bold;
      font-size: 1.2em;
      margin-top: 1em;
    }
  </style>
</head>
<body>
  <main>
     <article class="menu_migas_pan">
        <a href="tareas.php">TAREAS</a>/
        <a href=""></a>
      </article>

    <article class="porcentaje">
            <span>Porcentaje de entregados:</span>
            <span class="porcentaje_aprobados"></span>
      </article>

    <!-- Buscador -->
    <div class="buscador">
      <input id="buscador" type="search" placeholder="Busca por nombre o fecha">
    </div>


    <!-- Tabla única con toda la información -->
    <table class="tabla_tareas">
      <thead id="encabezado_tabla" class="Clasificaciones">
        <tr>
          <th>Nombre del Alumno</th>
          <th>Fecha de Entrega</th>
          <th>Archivo Adjunto</th>
        </tr>
      </thead>
      <tbody id="cuerpo_tabla" class="tareas">
        <!-- Se rellena dinámicamente -->
      </tbody>
    </table>

  </main>
</body>
</html>

