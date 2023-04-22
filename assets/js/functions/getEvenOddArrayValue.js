function getEvenOddArrayValue(arrayEvaluado = new Array()) {
  if (arrayEvaluado.length > 1) {
    let pares = new Array();
    let impares = new Array();
    for (let i = 0; i < arrayEvaluado.length; i++) {
      if (arrayEvaluado[i] % 2 === 0) {
        pares.push(arrayEvaluado[i]);
      } else {
        impares.push(arrayEvaluado[i]);
      }
    }

    pares.sort((a, b) => {
      return a - b;
    });

    impares.sort((a, b) => {
      return a - b;
    });

    return [pares, impares];
  } else {
    return ["El array no tiene elementos", "El array no tiene elementos"];
  }
}
