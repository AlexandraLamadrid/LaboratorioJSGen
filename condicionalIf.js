//Ejercicio 1
let edad = prompt("¿Cuál es tu edad?");
edad = Number(edad);

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}

//Ejercicio 2
let numero = prompt("Ingresa un número:");
numero = Number(numero);

if (numero > 0) {
  console.log("Es positivo");
} else if (numero < 0) {
  console.log("Es negativo");
} else {
  console.log("Es cero");
}