const persona = {
  nombre: "luca",
  edad: "24",
  direccion: "callefalsa 123",
  email: "luca_moreno2010@hotmail.com"
}; // creo el objeto de ejemplo como una constante

const {nombre, edad, direccion, email} = persona // lo desestructuro, yo lo entiendo como basicamente llamar al objeto al revez

// ya desestructurado puedo llamar a las propiedades de una forma mas limpia
console.log(`hola me llamo ${nombre} tengo ${edad} años, vivo en ${direccion} y mi email es ${email}`)




// creo la funcion y le pido por parametro un numero para tomar una de la lista
const PruebaGET = async(numeroTarea) => {
    try { // inicializo un bloque try catch para manejo de errores, aunque es algo simple para este caso
        
          // en cuna constante capturo un fetch que es un GET por defecto, uso await para  que espere la respuesta
        const httpResponse = await fetch('https://jsonplaceholder.typicode.com/todos');

        const tareas = await httpResponse.json();   // ahora espero con await y capturo la respuesta html parseada a json 


        return tareas[numeroTarea]  // retorno la tarea en la posicion N de la lista pasada por parametro                   
        
    } catch (error) {  //captura simple de posible error en la llamada a la api 
        console.error("fallo la solicitud", error.message) 
    }
}     

//creo la funcion mostrarTarea la cual recibe un objeto y ya lo desestructura desde el llamado, por eso lleva {} dentro del () de los parametros
const mostrarTarea = ({title, id, completed}) => 
        console.log(`tarea: ${title}, id: ${id}, compleatada?: ${completed}`); //muestro la respuesta    

PruebaGET(1).then(tarea=> mostrarTarea(tarea)); //llamo a las funciones, lo hago de esta forma por que pruebaGET devuelve promesa al ser async
                                                // entonces paso la funcion mostrartarea directo en el then donde captura el objeto tarea


