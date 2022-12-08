

// constante que almacena la url del json-server 
const url = "http://localhost:5005/estudiantes";
// creamos una function expresion  la cual recibe como parametro el objeto estudiante
// despues de pasar la validacion

// de igual modo vamos a exportar la funcion

export const nuevoEstudiante = async (estudiante) => { 
    //console.log(estudiante);  comprovamos la creacion del obj es exitosa 
    // 
    try {
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(estudiante),
            headers: {
                "Content-Type": "application/json",
            },
        });

    } catch (error) { 
        console.log(error);
    }
    
    window.location.href = "index.html";
};


// function expresion par obtener estudiantes GET  lista
export const obtenerEstudiantes = async () =>{
    try {
        const resultado = await fetch(url);
        const estudiantes = await resultado.json();
        //console.log(estudiantes);
        return estudiantes;
    } catch (error) {
        console.log(error);
    }
};


//=========== eliminar estudiantee
export const eliminarEstudiante = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.log(error);
    }
};



//======================== obtener estudiante (UPDATE)===============

export const obtenerEstudiante = async (id) =>{
    try {
        const resultado = await fetch(`${url}/${id}`)
        const estudiante = await resultado.json();
        //console.log(estudiante);
        return estudiante;
    } catch (error) {e
        console.log(error);
    }
}

export const actualizar = async (estudiante) =>{
    
    try {
        await fetch(`${url}/${estudiante.id}`, {
            method: "PUT",
            body: JSON.stringify(estudiante),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = "index.html";
}