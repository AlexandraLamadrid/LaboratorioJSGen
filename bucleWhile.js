const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Ejercicio 1
function ejercicio1() {
  rl.question("Ejercicio 1:\nIngresa un número: ", (numeroInput) => {
    const numero = Number(numeroInput);
    let contador = 1;

    console.log(`Contando del 1 hasta ${numero}:`);
    while (contador <= numero) {
      console.log(contador);
      contador++;
    }

    ejercicio2();
  });
}

//Ejercicio 2
function ejercicio2() {
  function pedirContraseña() {
    rl.question("\nEjercicio 2:\nIngresa la contraseña: ", (input) => {
      if (input === "1234") {
        console.log("Contraseña correcta");
        rl.close();
      } else {
        console.log("Contraseña incorrecta. Intenta de nuevo:");
        pedirContraseña(); 
      }
    });
  }

  pedirContraseña();
}

ejercicio1();
