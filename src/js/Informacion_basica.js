        window.onload = function () {
            if (!usuario || Object.keys(usuario).length === 0) {
                console.error("No se encontró información del usuario.");
                return;
            }

            // Obtenemos datos (si no existen, se dejan en blanco)
            const Dni = usuario.dni || "";
            const Nombre = usuario.nombre || "";
            const apellidos = `${usuario.apellido1 || ""} ${usuario.apellido2 || ""}`.trim();
            const curso = usuario.curso || "";
            const fecha = usuario.fecha || "";

            // Asignamos los valores al HTML
            document.querySelector("#Dni-info").textContent = Dni;
            document.querySelector("#nombre-info").textContent = Nombre;
            document.querySelector("#apellidos-info").textContent = apellidos;
            document.querySelector("#curso-info").textContent = curso;
            document.querySelector("#fecha_alta-info").textContent = fecha;
        };