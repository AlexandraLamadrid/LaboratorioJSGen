const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ejercicio 1
function ejercicio1() {
  rl.question("Ejercicio 1:\n¿En qué año naciste? ", (anioInput) => {
    const anioNacimiento = Number(anioInput);
    const anioActual = new Date().getFullYear();
    const edad = anioActual - anioNacimiento;

    console.log(`Tienes aproximadamente ${edad} años.`);

    ejercicio2();
  });
}

//Ejercicio 2
function ejercicio2() {
  rl.question("\nEjercicio 2:\nIngresa el primer número: ", (num1Input) => {
    rl.question("Ingresa el segundo número: ", (num2Input) => {
      const numero1 = Number(num1Input);
      const numero2 = Number(num2Input);
      const suma = numero1 + numero2;

      console.log(`La suma es: ${suma}`);
      rl.close();
    });
  });
}

ejercicio1();
