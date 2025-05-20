## Tipos
Estructura de los tipos de objetos JSON usados en la web.


### USUARIOS
Gente que entra a PROA
```json
[{
    {
        "dni": "1",
        "nombre": "Nombre_persona",
        "apellido1": "Apellido1",
        "apellido2": "Apellido2",
        "email": "correo@dominio",
        "password": "1",
        "rol": "rol que tiene usuario"
    },
}]
```


### TAREAS
Objeto que se empleará como contenedor de la información de las tareas
````json
{
    "id": 1, 
    "estado": "Si la tarea se ha enviado, o esta en progreso",
    "fecha_apertura": "29/05/2025",
    "fecha_cierre": "01/06/2025",
    "fecha_entrega": "30/05/2025",
    "nickname": "Apellido1 Apellido2, Nombre",
    "descripción": "Descripción de la tarea",
    "tipo_tarea": "Si es individual o grupal",
     "ID_asignatura": "Asignatura",
    "nombre": "Nombre tarea",
     "adjunto":"Archivo "
}
````
### GRUPOS
Objeto que contiene todo los grupos

````json
{
    "grupos": [
      {
        "nombre": "Nombre grupo ",
        "miembros": ["miembros"]
      },
      {
        "nombre": "Nombre grupo",
        "miembros": ["miembros"]
      }
    ]
  }
````
### LOCALSOTARGE
Almacenamientos que se guardan en el navegador para guardar datos y usarlos en la misma sesión iniciada.

### TAREAS_A_EDITAR
Localstorage que guarda la tarea que se quiere editar
````json
{
  "id": 1,
  "nombre": "Nombre de la tarea a editar",
  "descripcion": "Descripción de la tarea",
  "fecha_apertura": "2025-05-20",
  "fecha_cierre": "2025-05-25",
  "tipo_tarea": "Individual o grupal"
}
````

### GRUPOAEDITAR
Localstorage que guarda el grupo que se quiere editar
````json
{
  "nombre": "Grupo A",
  "miembros": ["usuario1", "usuario2", "usuario3"]
}
````

### MIEMBROS (insertar nombre grupo)
Almacena el nombre del grupo
````json

````

### TAREA_VER_PROFE
Almacena la información de la tarea seleccionada en la vista de profe
````json
{
 "id": 1, 
    "estado": "Si la tarea seleccionada se ha enviado, o esta en progreso",
    "fecha_apertura": "29/05/2025",
    "fecha_cierre": "01/06/2025",
    "fecha_entrega": "30/05/2025",
    "nickname": "Apellido1 Apellido2, Nombre",
    "descripción": "Descripción de la tarea seleccionada",
    "tipo_tarea": "Si es individual o grupal",
     "ID_asignatura": "Asignatura",
    "nombre": "Nombre tarea",
     "adjunto":"Archivo "
}
````

### TAREA_VER
Almacena la información de la tarea seleccionada en la vista de alumno
````json
{
 "id": 1, 
    "estado": "Si la tarea seleccionada se ha enviado, o esta en progreso",
    "fecha_apertura": "29/05/2025",
    "fecha_cierre": "01/06/2025",
    "fecha_entrega": "30/05/2025",
    "nickname": "Apellido1 Apellido2, Nombre",
    "descripción": "Descripción de la tarea seleccionada",
    "tipo_tarea": "Si es individual o grupal",
     "ID_asignatura": "Asignatura",
    "nombre": "Nombre tarea",
     "adjunto":"Archivo "
}
````

###SESSION
Es una instrucción en PHP que recupera el valor de una variable almacenada en la sesión activa del usuario y la asigna a la variable 
````json
{
  "usuario": "Nombre_persona"
}
````