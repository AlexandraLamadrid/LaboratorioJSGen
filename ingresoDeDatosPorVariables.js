let anioNacimiento = prompt("¿En qué año naciste?");

anioNacimiento = Number(anioNacimiento);

let anioActual = new Date().getFullYear();

let edad = anioActual - anioNacimiento;

console.log("Tienes aproximadamente " + edad + " años.");

//Sumar dos numeros
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

numero1 = Number(numero1);
numero2 = Number(numero2);

let suma = numero1 + numero2;

console.log("La suma es: " + suma);