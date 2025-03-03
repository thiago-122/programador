function medioDeTransporte(distancia) {
    let transporte;

    if (distancia >= 0 && distancia < 1000) {
        transporte = "pie";
    } else if (distancia >= 1000 && distancia < 10000) {
        transporte = "bicicleta";
    } else if (distancia >= 10000 && distancia < 30000) {
        transporte = "colectivo";
    } else if (distancia >= 30000 && distancia < 100000) {
        transporte = "auto";
    } else if (distancia >= 100000) {
        transporte = "avión";
    } else {
        transporte = "distancia no válida";
    }

    return transporte;
}
function encontrarMayor(array) {
    if (array.length === 0) return null; 

    let mayor = array[0]; r
    let i = 1;

    while (i < array.length) {
        if (array[i] > mayor) {
            mayor = array[i]; 
        }
        i++; 
    }

    return mayor;
}
