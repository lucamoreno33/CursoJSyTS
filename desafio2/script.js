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

