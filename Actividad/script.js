// Función para calcular la media de un array de números
function calcularMedia(numeros) {
    const total = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return total / numeros.length;
}

// Arrays para almacenar las alturas y las edades
const alturas = [];
const edades = [];

// Solicitar datos para 5 personas
for (let i = 0; i < 5; i++) {
    let altura = parseFloat(prompt(`Ingresa la altura de la persona ${i + 1} en metros:`));
    alturas.push(altura);

    let edad = parseInt(prompt(`Ingresa la edad de la persona ${i + 1}:`));
    edades.push(edad);
}

// Calcular medias
const mediaAlturas = calcularMedia(alturas);
const mediaEdades = calcularMedia(edades);

// Mostrar resultados
console.log(`La media de altura de las 5 personas es: ${mediaAlturas.toFixed(2)} metros`);
console.log(`La media de edad de las 5 personas es: ${mediaEdades.toFixed(2)} años`);