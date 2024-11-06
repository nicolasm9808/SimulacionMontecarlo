function calcularPI(nPuntos) {
    let dentroCirculo = 0;

    for (let i = 0; i < nPuntos; i++) {
        const x = Math.random() * 2 - 1;
        const y = Math.random() * 2 - 1;

        // Verificar si el punto (x, y) está dentro del círculo
        if ((x ** 2 + y ** 2) <= 1) {
            dentroCirculo++;
        }
    }

    // Estimación de PI
    const piAproximado = 4 * (dentroCirculo / nPuntos);
    return piAproximado;
}

const nPuntos = 1000;
const piEstimado = calcularPI(nPuntos);
console.log(`Estimación de PI con ${nPuntos} puntos: ${piEstimado}`);
