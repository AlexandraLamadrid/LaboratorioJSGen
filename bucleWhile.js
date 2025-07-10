//Ejercicio 1
let numero = prompt("Ingresa un número:");
numero = Number(numero);

let contador = 1;

while (contador <= numero) {
  console.log(contador);
  contador++;
}

//Ejercicio 2
let contraseña = prompt("Ingresa la contraseña:");

while (contraseña !== "1234") {
  contraseña = prompt("Contraseña incorrecta. Intenta de nuevo:");
}

console.log("Contraseña correcta");