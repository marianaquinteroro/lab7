    const tarea1 = { nombre: "Comprar ingredientes", completada: false }
    const tarea2 = { nombre: "Visitar al médico", completada: true }
    const tarea3 = { nombre: "Prepararse para el examen", completada: false }
    const tarea4 = { nombre: "Entrenar en el gimnasio", completada: true }
    const tarea5 = { nombre: "Ordenar la casa", completada: false }
    const tarea6 = { nombre: "Responder correos electrónicos", completada: true }
    const tarea7 = { nombre: "Cocinar la cena", completada: false }
    const tarea8 = { nombre: "Lectura nocturna", completada: true }
    const tarea9 = { nombre: "Resolver rompecabezas", completada: false }
    const tarea10 = { nombre: "Caminar con el perro", completada: true }

    init()

    function init() {

        crearTarea(tarea1)
        crearTarea(tarea2)
        crearTarea(tarea3)
        crearTarea(tarea4)
        crearTarea(tarea5)
        crearTarea(tarea6)
        crearTarea(tarea7)
        crearTarea(tarea8)
        crearTarea(tarea9)
        crearTarea(tarea10)

        actualizarContadores()
    }

    function crearTarea(tarea) {

        const listaTareas = document.getElementById("lista-tareas")
        const tareaElemento = document.createElement("div")
        tareaElemento.classList.add("tarea")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = tarea.completada
        checkbox.addEventListener("change", function() {
            tarea.completada = this.checked
            actualizarContadores()

            if (tarea.completada) {
                tareaElemento.classList.add("completada")
            } else {
                tareaElemento.classList.remove("completada")
            }
        });

        const nombreTarea = document.createElement("span")
        nombreTarea.textContent = tarea.nombre;

        tareaElemento.appendChild(checkbox)
        tareaElemento.appendChild(nombreTarea)
        listaTareas.appendChild(tareaElemento)

        if (tarea.completada) {
            tareaElemento.classList.add("completada")
        }
    }


    function actualizarContadores() {
        const contadorTareasCompletadas = document.getElementById("tareas-completadas");
        const contadorTareasPendientes = document.getElementById("tareas-pendientes");
    
        let tareasCompletadas = 0;
        let tareasPendientes = 0;
    
        if (tarea1.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea2.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea3.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea4.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea5.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea6.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea7.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea8.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea9.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        if (tarea10.completada) {
            tareasCompletadas++;
        } else {
            tareasPendientes++;
        }
    
        contadorTareasCompletadas.textContent = tareasCompletadas;
        contadorTareasPendientes.textContent = tareasPendientes;
    }


