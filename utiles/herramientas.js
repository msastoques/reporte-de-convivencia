var gradoSede = [
    [6, 'Hungría', 601],
    [7, 'Hungría', 701],
    [8, 'Hungría', 801],
    [9, 'Hungría', 901],
    [10, 'Hungría', 1001],
    [11, 'Hungría', 1101],
    [601, 'Charquito', 601],
    [602, 'Charquito', 602],
    [701, 'Charquito', 701],
    [702, 'Charquito', 702],
    [801, 'Charquito', 801],
    [802, 'Charquito', 802],
    [901, 'Charquito', 901],
    [1001, 'Charquito', 1001],
    [1002, 'Charquito', 1002],
    [1101, 'Charquito', 1101],
    [1102, 'Charquito', 1102]
];

function obtenerSedeGrado(grado) {
    // Recorre el array para encontrar el grado solicitado
    for (var i = 0; i < gradoSede.length; i++) {
        if (gradoSede[i][0] === grado) {
            return {
                sede: gradoSede[i][1],
                grado: gradoSede[i][2]
            };
        }
    }
    return 'Grado no encontrado'; // Manejo de error si el grado no está en el array
}

//probar script

// function probar() {
//     var { sede, grado } = obtenerSedeGrado(6);

//     Logger.log(sede);
//     Logger.log(grado);
// }

function limpiarContenido(hoja, rango) {
    var hojaSeleccionada = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(hoja);
    
    if (hojaSeleccionada) {
      var rangoSeleccionado = hojaSeleccionada.getRange(rango);
      rangoSeleccionado.clearContent();
    } else {
      Logger.log('La hoja especificada no existe.');
    }
  }
  
  // Ejemplo de uso:
  //limpiarContenido('Hoja1', 'A1:B10'); // Borra el contenido del rango A1:B10 en 'Hoja1'

function getDatosEstudiantes(grado, sede) {
    let listaCompleta = [];
    let listaFiltrada = [];
    let hojaDatosEstudiantes = getHojaDatosEstudiantes();
    listaCompleta = hojaDatosEstudiantes.getDataRange().getValues();

    listaFiltrada = listaCompleta.filter(fila =>fila[0] == true && fila[4] == grado && fila[5] == sede && fila[7] == "Tecnología e Informática");

    return listaFiltrada;
}

function getDatosFaltas() {
    let listaCompleta = [];    
    let hojaDatosEstudiantes = getHojaDatosRegistroFaltas();
    listaCompleta = hojaDatosEstudiantes.getDataRange().getValues();   

    return listaCompleta;
}

function fillHoja(dataEstudiantes, dataFaltas, hoja) {

    
    let datos = [];

    dataEstudiantes.forEach(element => {

        let prueba = 5+3;
        datos.push([element[1], element[6], prueba])
    });

    const rango = hoja.getRange('B' + 6 + ':D' + (datos.length + 5));

    rango.setValues(datos);



    
}

