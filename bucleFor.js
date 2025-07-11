const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ejercicio 1
console.log("Ejercicio 1: Números del 1 al 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Ejercicio 2
rl.question("\nEjercicio 2: Ingresa un número para ver su tabla de multiplicar: ", function (numeroInput) {
  const numero = Number(numeroInput);

  console.log(`\nTabla del ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

  rl.close();
});