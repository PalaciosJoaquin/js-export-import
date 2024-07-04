const Calculadora = require('./calculadora');

const calc = new Calculadora();

const a = 6;
const b = 3;

console.log("La multiplicación de " + a + " * " + b + " es: " + calc.multiplicar(a, b));
console.log("La división de " + a + " / " + b + " es: " + calc.dividir(a, b));
