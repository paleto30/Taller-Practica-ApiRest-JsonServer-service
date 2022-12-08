import {obtenerEstudiante, actualizar} from './API.js'
import {mostrarAlerta} from './funciones.js'

// funcion IIFE : encapsular un bloque de codigo dentro de un ambito local 
(function () {

    //selectores de campos
    const nombreInput = document.querySelector('#nombre');
    const edadInput = document.querySelector('#edad');
    const alturaInput = document.querySelector('#altura');
    const idInput = document.querySelector('#id');

    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit',validarActualizacion);
    //creamos un evento al documento , que nos cargara todo al ejecutarse 

    document.addEventListener("DOMContentLoaded",async ()=>{
        // para obtener el id al que vamos a actualizar 
        const parametrosURL = new URLSearchParams(window.location.search);
        const idEstudiante = Number(parametrosURL.get("id"));
        //console.log(idEstudiante);
        const estudiante = await obtenerEstudiante(idEstudiante); 
        //console.log(estudiante);
        mostrarEstudiante(estudiante);

    });

    function mostrarEstudiante(estudiante) {
        console.log(estudiante);
        const {nombre, edad, altura, id} = estudiante;
        nombreInput.value = nombre;
        edadInput.value = edad;
        alturaInput.value = altura;
        idInput.value = id;
    }

    function validarActualizacion(e) {
        e.preventDefault();
         // capturamos dentro de las siguientes variables los datos ingresados en los campos del formulario
        const nombre = document.querySelector("#nombre").value;  
        const edad = document.querySelector("#edad").value;
        const altura = document.querySelector("#altura").value;
        const id = document.querySelector('#id').getAttribute("value");

        // creamos el objeto literal , este sera equivalente a cada imput del formulario
        const estudiante = {
            nombre,
            edad,
            altura,
            id
        };

        function validar(obj) {
            return !Object.values(obj).every((element)=> element !== ""); // retorno booleano T or F
        }

        if (validar(estudiante)) {
            mostrarAlerta("Todos los campos son obligatorios");
        }else{
            //console.log("Paso la validacion");
            actualizar(estudiante);
        }
    }

})();