let anioNacimiento = prompt("¿En qué año naciste?");

anioNacimiento = Number(anioNacimiento);

let anioActual = new Date().getFullYear();

let edad = anioActual - anioNacimiento;

console.log("Tienes aproximadamente " + edad + " años.");