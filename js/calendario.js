// =============================================== calendario.js =======================================
    // variables para el codigo
    const calendario_global = document.getElementById('calendario_global');
    const desplegable_mes = document.getElementById('desplegable_mes');
    const infoText = document.getElementById('infoText');

    const hoy = new Date();
    const año = new Date().getFullYear();
    const mes_actual = new Date().getMonth();

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    
    const eventos = { tareas: [ { id: 1, estado: "enviada", fecha_apertura: "29/05/2025", fecha_cierre: "1/05/2025", fecha_entrega: "30/05/2025", nickname: "marc", descripción: "hay que realizar lo aprendido en clase", tipo_tarea: "test", ID_asignatura: "fisica"},
    { id: 2, estado: "enviada", fecha_apertura: "10/05/2025", fecha_cierre: "1/05/2025", fecha_entrega: "13/05/2025", nickname: "marc", descripción: "tienes que hacer los programas 1 y 2 ", tipo_tarea: "practico", ID_asignatura: "programcion"}]};
    
    // =============
    // desplegable
    // =============

    /* Este bucle servira para que funcione el select
     y poder seleccionar el mes que desees*/
    for( llave in meses ){
      const option = document.createElement('option') 
      option.value = llave; // Le añadimos la posicion para luego identificar el mes ej: 1
      option.textContent = meses[llave]; 
      if(llave == mes_actual ){ // este if sirve para que en el selec aparezca primero el mes actual
        option.textContent = meses[llave] + " ";
        option.selected = true;  
      }   
      desplegable_mes.appendChild(option); // Declaramos en que select se añade la opcion
    }

    function calendario(mes, año) {
      calendario_global.innerHTML = ''; // borramos los datos anteriores del calendario

      //getday nos ayuda a sacar que dia es segun la fecha que le des
      // ej: (2025, 3, 1).getDay(); = 1 de abril de 2025 -> 2 -> que es martes 
      dia_inicio = new Date(año, mes, 1).getDay();

      function cuantos_mes(año , mes){
      //getdate nos ayuda a sacar cuantos dias tiene un mes segun la fecha que le des
      // ej: (2025, 3 + 1, 0).getDate(); = abril > mes+1=4 --> 30 --> abril tiene 30 días 
      const cuantos_dias = new Date(año, mes + 1, 0).getDate();
      return cuantos_dias
      }

      const cuantos_dias = cuantos_mes(año, mes);

      //reordenar dias para que el lunes enpieze en el 0 y el domigo en el 6
      if (dia_inicio === 0) {
        dia_inicio = 6;
      } else {
         dia_inicio = dia_inicio - 1;
      }

      // encabezado de la tabla : contiene lo dias
      const thead = document.createElement('thead');
      thead.className = 'encabezadoo_tabla';
      const columna_encabezado = document.createElement('tr');
    // Este bucle servira para añadir todos los dias al encabezado
      for (llave of dias){
        const th = document.createElement('th'); 
        th.textContent = llave;
        columna_encabezado.appendChild(th);
      }

      thead.appendChild(columna_encabezado);
      calendario_global.appendChild(thead);

      // Cuerpo de la tabla
      const tbody = document.createElement('tbody');
      let columna = document.createElement('tr');
      let mes_anterior_dias = cuantos_mes(año, mes-1)//sacamos cuantos tias tiene el mes anterior
      let dia_num = 1;
      let mes_posterior = 1;

      // Este bucle se encarga de generar el cuerpo de la tabla el 35 es el numero de celdas que dibujara 
      for (let i = 1; i <= 35; i++) {
        const celda = document.createElement('td');

        //Este if se encaga de poner las celdas vacias del principio con los dias del mes anterior
        if (i <= dia_inicio) {
          celda.classList.add('celda_vacia');
          celda.textContent = mes_anterior_dias - dia_inicio + i;
        } 
        //Este else if se encaga de poner las celdas vacias del final con los dias del mes posterior
        else if(dia_num > cuantos_dias) {
          celda.classList.add('celda_vacia');
          celda.textContent = mes_posterior;
          mes_posterior++;
        } 

        //Este else es todo el cuerpo del calendario
        else {
          const fecha_celda = `${dia_num.toString().padStart(2, '0')}/${(mes + 1).toString().padStart(2, '0')}/${año}`; // pasamos la fecha de la celda a cadena de texto teniendo en cuenta que si el mes es 4 se pondra como 04
          const eventos_del_dia = eventos.tareas.filter(tarea => tarea.fecha_entrega === fecha_celda); //comprobamos con el metodo filter si la celdatiene algun evento

          let contenidoHTML = `<div class="num_dia">${dia_num}</div>`; //rellenamos la celda con su numero
          // Este for añade un evento si es que lo hay 
          for (llave of eventos_del_dia){
            contenidoHTML += `<div class="evento">${llave.ID_asignatura}</div>`;
          }

          celda.innerHTML = contenidoHTML;// insertamos el contenido html dentro de la celda

          // celda de hoy
          if (hoy.getDate() === dia_num && hoy.getMonth() === mes && hoy.getFullYear() === año) {
            celda.classList.add('hoy');
          }

          //este metodo nos permite ver la descripcion del evento
          const dia_actual = dia_num;
          celda.addEventListener('click', () => {

            const celdas = document.querySelectorAll('td');
            // este bucle se encarga de limpiar las celdas selccionadas y quitar el color gris
            for (let i = 0; i < celdas.length; i++) {
              celdas[i].classList.remove('selected');
            }
            celda.classList.add('selected');// este se encarga de ponerle el colorgris a la seleccionada

            let textoInfo = `Día seleccionado: ${dia_actual} ${meses[mes]} ${año}`;

            if (eventos_del_dia) {
              //este bucle crea el posit con los eventos 
              for(llave of eventos_del_dia){
              textoInfo += `<li><strong>${llave.ID_asignatura}:</strong> ${llave.descripción}</li>`;
              };
            }

            infoText.innerHTML = textoInfo; //se añade toda la informacion al html
          });
          dia_num++;
        }
        //este if es el que se encarga de cambiar de fila
        columna.appendChild(celda);
        if (i % 7 === 0) {
          tbody.appendChild(columna);
          columna = document.createElement('tr');
        }
      }

      calendario_global.appendChild(tbody);
    }

    // 
    const today = new Date();
    desplegable_mes.value = today.getMonth();
    //se crea el primer calendario
    calendario(parseInt(desplegable_mes.value), today.getFullYear());
    
    //genera un nuevo calendario al cambiar de mes
    desplegable_mes.addEventListener('change', () => {
      calendario(parseInt(desplegable_mes.value), parseInt(año));
    });