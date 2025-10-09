"use strict";
const persona = {
    nombre: "luca",
    edad: 24,
    email: "luca_moreno2010@hotmail.com"
};
const imprimirDetalle = (clave, tuPersona) => {
    //como en el desafio anterior con los colores, clave solo puede ser uno de esos 3 strings claves
    //tuPersona con typeof es como si su tipo fuese uno con la misma estructura que el objeto persona    
    Object.keys(tuPersona).forEach((key) => {
        if (clave == key) { //doy con la clave buscada y la imprimo en consola             
            console.log(`${clave}: ${tuPersona[key]}`);
            return; //retorno para cortar el ciclo 
        }
    });
};
const persona1 = {
    nombre: "maxi",
    edad: 21,
    email: "maxi@gmail.com"
};
imprimirDetalle("edad", persona1);
imprimirDetalle("nombre", persona1);
imprimirDetalle("email", persona1);
const misMascotas = {
    gyro: 2,
    balto: 10,
    poncho: 13,
    kenny: 3,
    greta: 2,
    frida: 9,
    morgan: 11
};
//creo el tipo generico edadDeMascota, solo puede recibir una clave de Mascotas
// con = Mascotas[T] recibo el tipo de dato del animal, en este casos todos number
const obtenerEdadMascota = (nombre, mascotas) => mascotas[nombre];
// creo la funcion, retrinjo T como las keys de Mascotas, nombre es T por que es uno de los nombres de mascota
// mascotas el segundo parametro es del tipo Mascotas para solo aceptar un objeto valido
//y el return de esto va a ser el tipo que corresponde al nombre del animal siendo edadDeMascota devolvera number seguramente
//luego retorno la edad de la mascota nombrada
console.log(obtenerEdadMascota("frida", misMascotas));
