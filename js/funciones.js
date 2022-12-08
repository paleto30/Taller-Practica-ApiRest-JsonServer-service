
// creamos la funcion de mostrar alerta 
export function mostrarAlerta(mensaje) {
    
    const alerta = document.querySelector(".bg-red-100");

    if (!alerta) {
        // creamos el elemento alerta como un parrafo
        const alerta = document.createElement("p");
        // para agregarle una lista de clases al elemento anteriormente creado (<P></P>)
        // hacemos uso de el metodo classList.add e insertamos como texto las clases que necesitamos
        // agregar 
        alerta.classList.add( 
            "bg-red-100",
            "border-red-400",
            "text-red-700",
            "px-4",
            "py-3",
            "rounded",
            "max-w-lg",
            "mx-auto",
            "mt-6",
            "text-center"
        );
        
        // le agregamos al elemtento anteriormente creado las siguientes etiquetas html
        // y agregamos el mensaje de error 
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>            
        `;

        //hacemos referencia al formulario cuando invocamos la funcion de mostrar alerta y 
        //agregamos un nuevo hijo a ese formulario el cual contendra los datos del elemento
        // anteriormente creado como alerta  
        formulario.appendChild(alerta);

        setTimeout(() =>{  // establecemos un tiempo para remover el elemento que creamos 
            alerta.remove();  // de esta manera removemos el <p></p> que contiene la alerta dentro del form
        },3000); // despues de 3 segundos
    }
}