const fs = require('fs')

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

const archivoToArray = (archivo, delimitador) => {
    const data = fs.readFileSync(archivo).toString();
    return data.split(delimitador);
}

const armarVectorGastoPorMes = (array, meses) => {

    const totalVentas = []

    for (var i = 0; i < meses.length; i++) {
        var texto = "Gaston mes de " + meses[i] + " = $" + array[i];
        totalVentas[i] = texto;
    }
    return totalVentas;
}


const mostrarVector = (array) => {

    array.forEach(element => {
        console.log(element)
    });

}

const calcularTotalGastos = (array) => {
    var total = 0;    
    for (var i = 0; i < array.length; i++) {        
        total += parseInt(array[i]);
    }
    return total;

}

const ventas = archivoToArray('ventas.txt', '\n');

const toltalVentasPorMes = armarVectorGastoPorMes(ventas, meses);

mostrarVector(toltalVentasPorMes);

var totalAnual = calcularTotalGastos(ventas)

console.log("Total gastos =  $" + totalAnual)