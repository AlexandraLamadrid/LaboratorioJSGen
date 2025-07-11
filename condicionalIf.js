const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ejercicio 1
function ejercicio1() {
  rl.question("Ejercicio 1:\nIngresa tu edad: ", (edadInput) => {
    const edad = Number(edadInput);

    if (edad >= 18) {
      console.log("Puedes entrar");
    } else {
      console.log("No puedes entrar");
    }

    ejercicio2();
  });
}

//Ejercicio 2
function ejercicio2() {
  rl.question("\nEjercicio 2:\nIngresa un número: ", (numeroInput) => {
    const numero = Number(numeroInput);

    if (numero > 0) {
      console.log("Es positivo");
    } else if (numero < 0) {
      console.log("Es negativo");
    } else {
      console.log("Es cero");
    }

    rl.close();
  });
}

ejercicio1();
