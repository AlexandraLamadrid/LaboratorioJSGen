//Ejercicio 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Ejercicio 2
let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
numero = Number(numero); 

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}