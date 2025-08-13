class Animal{
    // uso un constructor para declarar las propiedades de la clase
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    // se crea una funcion dentro de la clase la cual sera un metodo que podre llamar luego
    hablar() {
        console.log(`hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}
// aca creo la clase perro, al ser una extencion de animal es como si por dentro fuera igual a animal mas los añadidos que declare ahora 
class Perro extends Animal{
    ladrar(){
        console.log("¡Guau!")
    }
}

// aca creo las clases de persona
class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion
    }
}

class Estudiante extends Persona{

    // al querer agregar una propiedad mas me di con que declarar otra vez constructor pisa las propiedades anteriores
    //por lo que buscando en internet vi que se usa super para llamar al constructor padre y asi poder agregar una nueva propiedad

    constructor(nombre, edad, profesion, grado){
        super(nombre, edad, profesion) // llama al constructor de Persona
        this.grado = grado
    }
    estudiar(){
        console.log(`Estudiando para obtener el grado ${this.grado}`)
    }
}
// basicamente lo mismo que arriba
class Profesor extends Persona{
    constructor(nombre, edad, profesion, especialidad){
        super(nombre, edad, profesion)
        this.especialidad = especialidad
    }
    enseñar(){
        console.log(`Enseñando ${this.especialidad}`)
    }
}

// asi como los metodos, perro, estudiante y profesor heredan las propiedades padres de animal y persona segun corresponde
const miPerro = new Perro("gyro",2)
const miEstudiante = new Estudiante("luca", 24, "maquetador web", "4°") // yo
const miProfesor = new Profesor("gabriel", 28, "profesor", "javascript") // no se su edad profe jsaj

// llamada a los metodos
miPerro.hablar()
miPerro.ladrar()
miEstudiante.estudiar()
miProfesor.enseñar()
// agrego estos log para ver que toda la data este en orden
console.log(miEstudiante)
console.log(miProfesor)
console.log(miPerro)


