<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Crear Tarea</title>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
  <script src="js/crear_tareas.js"></script>
  <style>
    .subir_archivo {
      display: inline-flex;
      align-items: center;
      background-color: #fce4ec;
      border: 1px solid #c2185b;
      padding: 10px 15px;
      border-radius: 999px;
      font-family: Arial, sans-serif;
      cursor: pointer;
    }

    .subir_archivo input[type="file"] {
      display: none;
    }
    .fila_grupo.active {
    display: none;   /*establece que la opcion de se añadir grupo no se ve*/
  }


  </style>
</head>
<body>
    <!--titulo pequeño de la pagina de la pagina--> <!--
  <div>
        <a href="tareas.php"> TAREAS </a>/
         <a href="añadir_grupo.html">CREAR TAREAS </a>
    </div>


    <!--este es el formulario para crear la tarea--> <!--
  <table class="formulario_tarea_crear">
    <!--fila 1: input para el nombre de la tarea--> <!--
    <tr>
      <th>NOMBRE</th>
      <td><input type="text" id="nombre" placeholder="nombre de la tarea"></td>
    </tr>
    <!--fila 2: desplegable para el tipo--> <!--
    <tr>
      <th>TIPO</th>
      <td>
        <select id="desplegable_tipo">
          <option selected>INDIVIDUAL</option>
          <option>GRUPAL</option>
        </select>
      </td>
    </tr>
    <!--fila 3: input para la descripción de la tarea--> <!--
    <tr>
      <th>DESCRIPCIÓN</th>
      <td><textarea id="descripcion" placeholder="escribe aquí"></textarea></td>
    </tr>
    <!--fila 4: input de fecha para la fecha de apertura--> <!--
    <tr>
      <th>FECHA DE APERTURA</th>
      <td><input type="date" id="fecha_apertura"></td>
    </tr>
    <!--fila 5: input de fecha para la fecha de cierre--> <!--
    <tr>
      <th>FECHA DE CIERRE</th>
      <td><input type="date" id="fecha_cierre"></td>
    </tr>
    <!--fila 6: input con imagen y texto para subir archivos --> <!--
    <tr>
      <th>ADJUNTOS</th>
      <td>

        <label class="subir_archivo">
          <span><img src="" alt="icono_clip"></span>
          <span>Archivos PDF, DOC, JPG</span>
          <input type="file" id="adjunto" multiple>
        </label>

      </td>
    </tr>
    <!--fila 7: boton para añadir grupos --> <!--
    <tr class="fila_grupo active" id="grupal">
      <th>GRUPOS</th>
      <td>
        <a href="añadir_grupo.html"><button type="button">+ AÑADIR GRUPO</button></a>
      </td>
    </tr>
  </table>

  <div class="botones">
    <button type="button" onclick="cancelar()">CANCELAR</button>
    <button type="button" onclick="guardarFormulario()">GUARDAR</button>
  </div>

</body>
</html>-->
<head>
  <meta charset="UTF-8">
  <title>Crear Tarea</title>
  <link rel="stylesheet" href="styles.css"> <!-- Asegúrate de agregar tu archivo de estilos si es necesario -->
</head>
<body>
  <!-- Título pequeño de la página -->
  <div>
    <a href="tareas.php">TAREAS</a> /
    <a href="añadir_grupo.php">CREAR TAREAS</a>
  </div>

  <!-- Formulario para crear la tarea -->
  <form class="formulario_tarea_crear">
    <!-- Fila 1: Input para el nombre de la tarea -->
    <div class="form-group">
      <label for="nombre">NOMBRE</label>
      <input type="text" id="nombre" placeholder="Nombre de la tarea" required>
    </div>

    <!-- Fila 2: Desplegable para el tipo -->
    <div class="form-group">
      <label for="desplegable_tipo">TIPO</label>
      <select id="desplegable_tipo">
        <option selected>INDIVIDUAL</option>
        <option>GRUPAL</option>
      </select>
    </div>

    <!-- Fila 3: Input para la descripción de la tarea -->
    <div class="form-group">
      <label for="descripcion">DESCRIPCIÓN</label>
      <textarea id="descripcion" placeholder="Escribe aquí" required></textarea>
    </div>

    <!-- Fila 4: Input de fecha para la fecha de apertura -->
    <div class="form-group">
      <label for="fecha_apertura">FECHA DE APERTURA</label>
      <input type="date" id="fecha_apertura" required>
    </div>

    <!-- Fila 5: Input de fecha para la fecha de cierre -->
    <div class="form-group">
      <label for="fecha_cierre">FECHA DE CIERRE</label>
      <input type="date" id="fecha_cierre" required>
    </div>

    <!-- Fila 6: Input con imagen y texto para subir archivos -->
    <div class="form-group">
      <label for="adjunto">ADJUNTOS</label>
      <label class="subir_archivo">
        <span><img src="" alt="icono_clip"></span>
        <span>Archivos PDF, DOC, JPG</span>
        <input type="file" id="adjunto" multiple>
      </label>
    </div>

    <!-- Fila 7: Botón para añadir grupos -->
    <div class="form-group fila_grupo" id="grupal">
      <label>GRUPOS</label>
      <a href="añadir_grupo.php">
        <button type="button">+ AÑADIR GRUPO</button>
      </a>
    </div>

    <!-- Botones para cancelar o guardar -->
    <div class="botones">
      <button type="button" onclick="cancelar()">CANCELAR</button>
      <button type="button" onclick="guardarFormulario()">GUARDAR</button>
    </div>
  </form>

  <script src="editar_tareas.js"></script> <!-- Enlaza tu archivo JS -->
</body>
</html>

