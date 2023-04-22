function getNumericArrayValue(arrayEvaluado = "") {
  if (arrayEvaluado !== "") {
    let arrayTratado = arrayEvaluado.split(",");
    arrayTratado = arrayTratado.map((str) => parseInt(str));
    let valorMayor = 0;
    for (let i = 0; i < arrayTratado.length; i++) {
      const numero = arrayTratado[i];
      if (numero > valorMayor) {
        valorMayor = numero;
      }
    }
    return valorMayor === 0 ? "El array no tiene números" : valorMayor;
  } else {
    return "El array no tiene elementos";
  }
}
