const persona= {  //creo un objeto con tipo literal
    nombre: "luca",
    edad: 24,
    email: "luca_moreno2010@hotmail.com"
} 
type tipoPersona = keyof typeof persona // con keyof typeof tomo literal en string los nombres de las claves de persona(nombre, edad, email)

const imprimirDetalle = (clave: tipoPersona, tuPersona: typeof persona) =>{ 
    //como en el desafio anterior con los colores, clave solo puede ser uno de esos 3 strings claves
     //tuPersona con typeof es como si su tipo fuese uno con la misma estructura que el objeto persona    
    Object.keys(tuPersona).forEach((key) => { //itero sobre las claves de tuPersona para matchear con la del paramtro     
        if(clave == key){     //doy con la clave buscada y la imprimo en consola             
            console.log(`${clave}: ${tuPersona[key]}`)
        return //retorno para cortar el ciclo 
        }
    })
}

const persona1: typeof persona = {  //objeto de pruebas el cual como arriba por typeof tendra la misma estructura que persona
        nombre: "maxi",
        edad: 21,
        email: "maxi@gmail.com"
}

imprimirDetalle("edad", persona1)
imprimirDetalle("nombre", persona1)
imprimirDetalle("email", persona1)

type Mascotas = {
    gyro: number,
    balto: number,
    poncho: number,
    kenny: number,
    greta: number,
    frida: number,
    morgan: number 
}

const misMascotas: Mascotas = { 
    gyro: 2,
    balto: 10,
    poncho: 13,
    kenny: 3,
    greta: 2,
    frida: 9,
    morgan: 11
}


type EdadDeMascota<T extends keyof Mascotas> = Mascotas[T]
//creo el tipo generico edadDeMascota, solo puede recibir una clave de Mascotas
// con = Mascotas[T] recibo el tipo de dato del animal, en este casos todos number


const obtenerEdadMascota = <T extends keyof Mascotas> (nombre: T, mascotas: Mascotas): EdadDeMascota<T> => mascotas[nombre]
// creo la funcion, retrinjo T como las keys de Mascotas, nombre es T por que es uno de los nombres de mascota
// mascotas el segundo parametro es del tipo Mascotas para solo aceptar un objeto valido
//y el return de esto va a ser el tipo que corresponde al nombre del animal siendo edadDeMascota devolvera number seguramente
//luego retorno la edad de la mascota nombrada

console.log(obtenerEdadMascota("frida", misMascotas))
