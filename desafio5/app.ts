type Color = "rojo" | "verde" | "azul"; //creo el tipo color asi luego es mas facil aplicarlo

// const color: Color = "auto"
const color: Color = "verde" //falla auto por que no corresponde al tipo

const llamarColor = (color: Color) =>{  //recibe un parametro tipo color, por lo que solo puede ser los 3 especificados
    console.log(color)
}

//llamarColor("verde") //funciona por que es de las cadenas de texto especificadas
//llamarColor("auto") //no es ni literal ni conceptualmente un color
//llamarColor("amarillo") // no entra en los colores especificados

type Edad = 18 | 21 | 30;

// let numero: Edad = 20  no funciona por que no entra en los valores especificados
let numero: Edad = 18 //si cumple

const llamarEdad = (edad: Edad) =>{ //recibe un parametro de tipo edad
    console.log("su edad es: " + edad)
}

llamarEdad(18) //funciona por que esta dentro de los valores del tipo
//llamarEdad(40) //no funciona por que no es uno de los valores del tipo

const edadYcolor = ( edad: Edad, color: Color) =>{
    console.log(`edad: ${edad} color: ${color}`)
}

edadYcolor(18, "verde") //funciona perfectamente pues ambos valores estan cumpliendo sus tipos
//edadYcolor(18, "amarillo") // como amarillo no es un color valido del tipo, da error la funcion
//edadYcolor(20, "azul") // igual que arriba pero ahora con la edad