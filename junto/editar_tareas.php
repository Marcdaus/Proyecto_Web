<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Crear Tarea</title>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" defer></script>
  <script src="js/editar_tareas.js"defer></script>
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
</head><!--
<body>
    <!--titulo pequeño de la pagina de la pagina--><!--
  <h4>CREAR TAREA</h4>

    <!--este es el formulario para crear la tarea--><!--
  <table class="formulario_tarea_crear">
    <!--fila 1: input para el nombre de la tarea--><!--
    <tr>
      <th>NOMBRE</th>
      <td><input type="text" id="nombre" placeholder="nombre de la tarea"></td>
    </tr>
    <!--fila 2: desplegable para el tipo--><!--
    <tr>
      <th>TIPO</th>
      <td>
        <select id="desplegable_tipo">
          <option selected>INDIVIDUAL</option>
          <option>GRUPAL</option>
        </select>
      </td>
    </tr>
    <!--fila 3: input para la descripción de la tarea--><!--
    <tr>
      <th>DESCRIPCIÓN</th>
      <td><textarea id="descripcion" placeholder="escribe aquí"></textarea></td>
    </tr>
    <!--fila 4: input de fecha para la fecha de apertura--><!--
    <tr>
      <th>FECHA DE APERTURA</th>
      <td><input type="date" id="fecha_apertura"></td>
    </tr>
    <!--fila 5: input de fecha para la fecha de cierre--><!--
    <tr>
      <th>FECHA DE CIERRE</th>
      <td><input type="date" id="fecha_cierre"></td>
    </tr>
    <!--fila 6: input con imagen y texto para subir archivos --><!--
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
    <!--fila 7: boton para añadir grupos --><!--
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
  <body>
  <!-- Título -->
  <div>
        <a href="tareas.php"> TAREAS </a>/
         <a href="añadir_grupo.html">CREAR TAREAS </a>
    </div>

  <!-- Formulario para crear la tarea -->
  <form class="formulario_tarea_crear" id="formulario_tarea">
    
    <!-- Nombre -->
    <div class="form_grupo">
      <label for="nombre"><strong>NOMBRE</strong></label>
      <input type="text" id="nombre" placeholder="nombre de la tarea">
    </div>

    <!-- Tipo -->
    <div class="form_grupo">
      <label for="desplegable_tipo"><strong>TIPO</strong></label>
      <select id="desplegable_tipo">
        <option selected>INDIVIDUAL</option>
        <option>GRUPAL</option>
      </select>
    </div>

    <!-- Descripción -->
    <div class="form_grupo">
      <label for="descripcion"><strong>DESCRIPCIÓN</strong></label>
      <textarea id="descripcion" placeholder="escribe aquí"></textarea>
    </div>

    <!-- Fecha de apertura -->
    <div class="form_grupo">
      <label for="fecha_apertura"><strong>FECHA DE APERTURA</strong></label>
      <input type="date" id="fecha_apertura">
    </div>

    <!-- Fecha de cierre -->
    <div class="form_grupo">
      <label for="fecha_cierre"><strong>FECHA DE CIERRE</strong></label>
      <input type="date" id="fecha_cierre">
    </div>

    <!-- Adjuntos -->
    <div class="form_grupo">
      <label><strong>ADJUNTOS</strong></label>
      <label class="subir_archivo">
        <span><img src="" alt="icono_clip"></span>
        <span>Archivos PDF, DOC, JPG</span>
        <input type="file" id="adjunto" multiple>
      </label>
    </div>

    <!-- Grupos (solo si es grupal) -->
    <div class="form_grupo fila_grupo active" id="grupal">
      <label><strong>GRUPOS</strong></label>
      <a href="añadir_grupo.php"><button type="button">+ AÑADIR GRUPO</button></a>
    </div>

    <!-- Botones -->
    <div class="botones">
      <button type="button" onclick="cancelar()">CANCELAR</button>
      <button type="button" onclick="guardarFormulario()">GUARDAR</button>
    </div>

  </form>
</body>
</html>

