/**
 *  Crea una tabla html con estilos de bootstrap 5 para ser impresa directamente dentro de un elemento <table> utilizando '.innerHtml'.
 * @param {Array} arrayEvaluado Es un array que contiene tres arrays, debe estar estructurado de la siguiente manera: posición [0]: Primeras tres letras, posición [1]: Resto de letras, posición [2]: Nombres reensamblados.
 * @returns {string} Retorna una tabla html que separa los contenidos de los array en 'Iniciales', 'Resto de letras' y 'Nombre completo'.
 */
function printListTreatmentArrayName(arrayEvaluado = "") {
  if (arrayEvaluado !== "") {
    const primerasTresLetras = arrayEvaluado[0];
    const restoDeLetras = arrayEvaluado[1];
    const nombresReEnsamblados = arrayEvaluado[2];

    htmlTable = `
      <thead class="table-dark">
            <tr>
              <th>Iniciales</th>
              <th>Resto de nombre</th>
              <th>Nombre completo</th>
            </tr>
          </thead>
          <tbody>
      `;
    for (
      let i = 0, ii = 0, iii = 0;
      i < primerasTresLetras.length ||
      ii < restoDeLetras.length ||
      ii < nombresReEnsamblados.length;
      i++, ii++, iii++
    ) {
      const tresLetras =
        typeof primerasTresLetras[i] !== "undefined"
          ? primerasTresLetras[i]
          : "";
      const restoLetras =
        typeof restoDeLetras[ii] !== "undefined" ? restoDeLetras[ii] : "";
      const reEnsamblado =
        typeof nombresReEnsamblados[ii] !== "undefined"
          ? nombresReEnsamblados[ii]
          : "";

      htmlTable += `
            <tr>
                <td>${tresLetras}</td>
                <td>${restoLetras}</td>
                <td>${reEnsamblado}</td>
            </tr>`;
    }
    htmlTable += `</tbody>`;
    return htmlTable;
  } else {
    return "No hay nombres para evaluar";
  }
}
