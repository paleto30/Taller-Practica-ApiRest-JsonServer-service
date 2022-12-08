import { obtenerEstudiantes, eliminarEstudiante } from "./API.js"; // importamos la funcion para obtener los estudiantes

// funcion IIFE
(function () {
    
    // seleccionamos el id del tbody en el index

    const listado = document.querySelector("#listado-estudiantes");
    document.addEventListener('DOMContentLoaded', mostrarEstudiantes); // get
    
    listado.addEventListener('click',confirmarEliminar)


    //=============================0 aqui esta el problema ======================
    // cuando imprimo esto si me muestra el registro , pero cuando hago esto mismo dentro de la funcion mostrarEstudiante no funciona
    //const estudiantes = obtenerEstudiantes();
    //console.log("esto no lo muestra",estudiantes);
    
    //funcion asociada al eventlistener de listado para que cargue los estudiantes en el listado
    async function mostrarEstudiantes(){

        const estudiantes = await obtenerEstudiantes();  
       //console.log(estudiantes);
        
        estudiantes.forEach((estudiante) => {
            const {nombre, edad, altura, id} = estudiante;
            const row = document.createElement("tr");

            row.innerHTML += `
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${nombre}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                <p class="text-gray-700">${edad}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                <p class="text-gray-600">${altura}</p>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                <a href="editar.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5 editar">Editar</a>
                <a href="#" data-estudiante="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>      
            </td>
            `; 
            listado.appendChild(row);
        });
    };


    //================================================== funcion para eliminar =======================

    function confirmarEliminar(e) {
        if( e.target.classList.contains('eliminar') ) {
            //console.log('Se dio click en eliminar');
            const estudianteId = Number(e.target.dataset.estudiante);
            //console.log(estudianteId);
            const confirmar = confirm("¿Deseas eliminar este Estudiante?"); // boolean true o false
            if (confirmar) {
                //console.log(`eliminando ${estudianteId}`);
                eliminarEstudiante(estudianteId)
            }
        }
    }


})();