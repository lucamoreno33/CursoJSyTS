const calcularAreaTriangulo = (base, altura) => ((base * altura) /2) // captura el total de la cuenta y lo retorna


console.log(calcularAreaTriangulo(4, 6)) //lo llamo con console log por que si no solo 
                                        // tira el return al aire


const calcularFactorial = (n) => {
    let total = 1 // inicializo una variable para que contenga el resultado a retornar
    for (let i = 2; i <= n; i++){  // abro un bucle for que empieza por el 2 para no ser redundante, se repetira hasta "n" veces
        total *= i  // esto significa total = total * i, i valdra 2, luego 3, luego 4 y total ira creciendo tambien, asi dando el factorial
    }
    return total
};

console.log(calcularFactorial(7)) //llamada a la funcion por consola

const calcularPotencia = (base, exponente) => {
    let total = base // inicializo el total con la base y empiezo el bucle for desde el 2 para ahorrar una iteracion
    for (let i = 2 ; i <= exponente; i++){  // si lo hiciera con total = 1 e i = 1 solo estaria haciendo el producto redundante de 1 * base
        total *= base  //total = total * base, en el caso 2 a la 3 seria como 2 * 2, 2 * 3 y ya termina con solo esas 2 cuentas
    }
    return total
}
// llamadas por consola a la funcion
console.log(calcularPotencia(2,3))
console.log(calcularPotencia(5,4))
console.log(calcularPotencia(3,6))