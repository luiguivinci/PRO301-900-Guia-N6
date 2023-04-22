function getNumericArrayValue(arrayEvaluado = new Array()) {
  if (arrayEvaluado.length > 1) {
    let valorMayor = 0;
    for (let i = 0; i < arrayEvaluado.length; i++) {
      if (arrayEvaluado[i] > valorMayor) {
        valorMayor = arrayEvaluado[i];
      }
    }
    return valorMayor;
  } else {
    return "El array no tiene elementos";
  }
}
