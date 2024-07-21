// Ctrl + Ñ = Consola
// npm run test = correr la consola
// Ctrl + C = Cortar ejecución

const { run } = require("jest");


// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 14;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;


// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {
    //La función debe devolver el string
    //que recibe por parámetro
    return str
}

function suma(x, y) {
    // "x" e "y" son números
    // devuelve la suma
    return x + y
}

function resta(x, y) {
    // devuelve la resta
    return x - y
}

function multiplica(x, y) {
    // ahora la multiplicacion
    return x * y
}

function divide(x, y) {
    // ahora la división
    return x / y
}

function sonIguales(x, y) {
    // devuelve true si x e y son iguales
    // devuelve false si no lo son
   return x === y
}

function menosQueDiez(num) {
    // Devuelve "true" si el argumento de la función "num" es menor que 10
    // De lo contrario, devuelve "false"
    return num < 10
}

function mayorQueCinco(num) {
    // Idem que el anterior pero con 5
    return num > 5
}

function obtenerResto(x, y) {
    // Devuelve el resto de la división entre x e y
    return x % y
}

function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    return num % 2 === 0
}

function esImpar(num) {
    // Idem que el anterior pero impar
    return num % 2 !== 0
}

function cuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    return num * num
}

function cubo(num) {
    // Devuelve el valor de "num" elevado al cubo
    return num * num * num
}

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    var valor1 = str1.length
    var valor2 = str2.length
    if (valor1 === valor2){
        return true
    } else{
        return false
    }
    
}

function elevar(num, exponent) {
    // Devuelve el valor de "num" elevado al exponente dado en "exponent"
    // Tu código:
    return Math.pow(num, exponent)
}

function redondear(num) {
    // Redondea "num" al entero más próximo y devuélvelo
    return Math.round(num)
}

function redondearHaciaArriba(num) {
    // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
    //Ej. 5.1 debería ser 6
    const redondear = Math.floor(num)
    const resultado = redondear + 1
    return resultado
}

function numeroRandom() {
    //Generar un número al azar entre 0 y 1 y devolverlo
    return Math.random()
}

function esPositivo(numero) {
    //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
    //Si el número es positivo, devolver ---> "Es positivo"
    //Si el número es negativo, devolver ---> "Es negativo"
    //Si el número es 0, devuelve false
    if (numero > 0) {
        return ("Es positivo")
    } if (numero < 0) {
        return ("Es negativo")
    } else (numero === 0)
        return false
}



function agregarSimboloExclamacion(str) {
    // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
    // Ejemplo: "Hola Mundo" pasaría a ser "Hola Mundo!"
    return str + "!"
}

function combinarNombres(nombre, apellido) {
    // Devuelve "nombre" y "apellido" combinados y separados por un espacio.
    // Ejemplo: "Alan", "Turing" -> "Alan Turing"
    return nombre + " " + apellido
}

function areaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo
    return alto * ancho
}

function perimetro(lado) {
    //idem al anterior pero retorna el perimetro de un cuadrado
    return lado * 4
}

function areaDelTriangulo(base, altura) {
    //Desarrolle una función que calcule el área de un triángulo
    const lados = base * altura
    return lados / 2
}

function deCelsiusAFahrenheit(peso) {
    //Dada una temperatura en celsius devolver en resultado en Fahrenheit
    const MtsCalu = peso * 1.8
    const Mtsigual = MtsCalu + 32
    return Mtsigual
}

// No modificar nada debajo de esta línea
// --------------------------------
module.exports = {
    nuevoModulo,
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaMultiplicacion,
    devolverString,
    tienenMismaLongitud,
    sonIguales,
    menosQueDiez,
    mayorQueCinco,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
    esPar,
    esImpar,
    cuadrado,
    cubo,
    elevar,
    redondear,
    redondearHaciaArriba,
    numeroRandom,
    esPositivo,
    agregarSimboloExclamacion,
    combinarNombres,
    areaRectangulo,
    perimetro,
    areaDelTriangulo,
    deCelsiusAFahrenheit,
};