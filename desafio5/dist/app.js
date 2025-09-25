"use strict";
// const color: Color = "auto"
const color = "verde"; //falla auto por que no corresponde al tipo
const llamarColor = (color) => {
    console.log(color);
};
llamarColor("verde"); //funciona por que es de las cadenas de texto especificadas
llamarColor("auto"); //no es ni literal ni conceptualmente un color
llamarColor("amarillo"); // no entra en los colores especificados
// let numero: Edad = 20  no funciona por que no entra en los valores especificados
let numero = 18; //si cumple
const llamarEdad = (edad) => {
    console.log("su edad es: " + edad);
};
llamarEdad(18); //funciona por que esta dentro de los valores del tipo
llamarEdad(40); //no funciona por que no es uno de los valores del tipo
const edadYcolor = (edad, color) => {
    console.log(`edad: ${edad} color: ${color}`);
};
edadYcolor(18, "verde"); //funciona perfectamente pues ambos valores estan cumpliendo sus tipos
edadYcolor(18, "amarillo"); // como amarillo no es un color valido del tipo, da error la funcion
edadYcolor(20, "azul"); // igual que arriba pero ahora con la edad
