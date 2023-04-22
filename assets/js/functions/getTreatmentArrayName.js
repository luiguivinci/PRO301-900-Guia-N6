/**
 * @description recolecta los nombres contenidos en un array para distribuirlos de la siguiente manera, en el primero están las priemras tres letras de cada nombre, en el segundo está el resto de las letras de cada nombre y en el tercero están los nombres reensanmblados para luetro retornar esos tres arrays dentro de un array
 * @param {Array} arrayEvaluado Contiene una cadena con nombres separados por ',' y sin espacios entre ellos, por ejemplo: 'pablo,juan,pedro'
 * @returns {Array} posición [0]: Primeras tres letras, posición [1]: Resto de letras, posición [2]: Nombres reensamblados.
 */
function getTreatmentArrayName(arrayEvaluado = "") {
  if (arrayEvaluado !== "") {
    const arrayTratado = arrayEvaluado.split(",");
    let primerasTresLetras = new Array();
    let restoDeLetras = new Array();
    let nombresReEnsamblados = new Array();

    arrayTratado.forEach((element) => {
      primerasTresLetras.push(element.substring(0, 3));
      restoDeLetras.push(element.substring(3));
    });

    primerasTresLetras.forEach((element, index) => {
      nombresReEnsamblados.push(element + restoDeLetras[index]);
    });

    primerasTresLetras =
      primerasTresLetras.length > 0 && primerasTresLetras[0] !== ""
        ? primerasTresLetras
        : [""];

    restoDeLetras =
      restoDeLetras.length > 0 && restoDeLetras[0] !== ""
        ? restoDeLetras
        : [""];

    nombresReEnsamblados =
      nombresReEnsamblados.length > 0 && nombresReEnsamblados[0] !== ""
        ? nombresReEnsamblados
        : [""];

    return [primerasTresLetras, restoDeLetras, nombresReEnsamblados];
  } else {
    return [""], [""], [""];
  }
}
