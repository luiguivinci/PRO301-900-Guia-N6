/**
 * @description función evalúa el largo de los nombres contenidos en un array y retorna el númeor mayor obtenido
 * @param {Array} arrayEvaluado Array unidimensional que contiene cadenas de nombres
 * @returns {Int}
 */
function getCountLongestName(arrayEvaluado = "") {
  if (arrayEvaluado !== "") {
    let arrayTratado = arrayEvaluado.split(",");
    let numeroMayor = 0;
    arrayTratado.forEach((nombre) => {
      numeroMayor = nombre.length > numeroMayor ? nombre.length : numeroMayor;
    });
    return numeroMayor === 0 ? "No hay nombres para evaluar" : numeroMayor;
  } else {
    return ["No hay nombres para evaluar"];
  }
}
