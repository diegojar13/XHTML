// Función para calcular la media
function calcularMedia(numeros) {
    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return total / numeros.length;
}

// Almacena las alturas y las edades
const alturas = [];
const edades = [];

// Contadores para personas mayores de 18 años y mayores de 175cm
let mayoresDe18 = 0;
let mayoresDe175cm = 0;

// Datos para 5 personas
for (let i = 0; i < 5; i++) {
    let altura = parseFloat(prompt(`Ingresa la altura de la persona ${i + 1} en metros:`));
    alturas.push(altura);

    let edad = parseInt(prompt(`Ingresa la edad de la persona ${i + 1}:`));
    edades.push(edad);

    if (edad > 18) {
        mayoresDe18++;
    }

    if (altura > 1.75) {
        mayoresDe175cm++;
    }
}

// Calculo de medias
const mediaAlturas = calcularMedia(alturas);
const mediaEdades = calcularMedia(edades);

// Resultados
console.log(`La media de altura de las 5 personas es: ${mediaAlturas.toFixed(2)} metros`);
console.log(`La media de edad de las 5 personas es: ${mediaEdades.toFixed(2)} años`);
console.log(`Número de personas mayores de 18 años: ${mayoresDe18}`);
console.log(`Número de personas mayores de 175cm: ${mayoresDe175cm}`);