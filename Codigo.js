function myFunctionActivador(e) {

    let rango = e.range;
    let dirCelda = rango.getA1Notation();

    let ui = SpreadsheetApp.getUi();

    // let rangoPrueba1 = hoja.getRange("I7");
    // rangoPrueba1.setValue(dirCelda);

    if (dirCelda !== "E2") {
        return;
    } else {
        if (e.value === "TRUE") {

            let hoja = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
            let codigo = parseInt(hoja.getName());
            var { sede, grado } = obtenerSedeGrado(codigo);

            //cambiar registro del curso en celda grado y sede segun nombreHoja
            hoja.getRange("B2").setValue(grado);
            hoja.getRange("B3").setValue(sede);

            hoja.getRange("F2").setValue("En proceso");
            hoja.getRange("F2").setBackground("#3CB371");

            let periodo = hoja.getRange("B4").getValue();

            //limpiar hoja
            limpiarContenido(codigo.toString(), 'B6:H35'); // Borra el contenido del rango

            //traer datos estudiantes
            let listaFiltradaEstudiantes = getDatosEstudiantes(grado, sede);

            if (listaFiltradaEstudiantes.length == 0) {
                ui.alert(`No hay estudiantes registrados en ${sede} - ${grado}`);
                return {};
            }

            //traer registros de faltas
            let listaRegistros = getDatosFaltas();

            fillHoja(listaFiltradaEstudiantes, listaRegistros, hoja, periodo);

            var fechaActual = new Date(); // Obtener la fecha actual
            //var fechaFormateada = Utilities.formatDate(fechaActual, Session.getScriptTimeZone(), "dd/MM/yyyy"); // Formato: día/mes/año
  

            hoja.getRange("F2").setValue(fechaActual);
            hoja.getRange("E2").setValue(false);
            hoja.getRange("F2").setBackground("#FFFFFF");

        }
    };

}

// let rangoPrueba = hoja.getRange("I5");
// rangoPrueba.setValue(codigo);


