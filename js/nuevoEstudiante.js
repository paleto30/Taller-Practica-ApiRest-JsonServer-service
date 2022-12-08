// aqui vamos a importar
import {mostrarAlerta} from "./funciones.js";
import { nuevoEstudiante } from "./API.js";


(function ( ) {
    

    // creamos la constantee formulario que hace referencia al formulario del html 
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener('submit', validarEstudiante);  // asignamos un evento a ese formulario de tipo submit


    // declaramos la funcion validarEstudiante , que realiza el evento del formulario
    // le pasamos el evento como parametro 
    function validarEstudiante(e) {
        e.preventDefault();

        // capturamos dentro de las siguientes variables los datos ingresados en los campos del formulario
        const nombre = document.querySelector("#nombre").value;  
        const edad = document.querySelector("#edad").value; 
        const altura = document.querySelector("#altura").value; 

        // creamos el objeto literal , este sera equivalente a cada imput del formulario
        const estudiante = {
            nombre,
            edad,
            altura  
        };

        console.log(estudiante);
        // imprimimos por consola el objeto estudiante
        // implementamos el metodo every  que lo que hace es revisar si almenos uno de los campos esta vacio
        // si eso es verdad retornara un false
        //console.log(Object.values(estudiante).every((element)=> element !== ""));

        function validar(obj) {
            return !Object.values(obj).every((element)=> element !== ""); // retorno booleano T or F
        }


        if (validar(estudiante)) {
            mostrarAlerta("Todos los campos son obligatorios");
        }else{
            //console.log("Paso la validacion");
            nuevoEstudiante(estudiante);
            
        }
    }


})();