function getEvenOddArrayValue(arrayEvaluado = "") {
  if (arrayEvaluado !== "") {
    let arraytratado = arrayEvaluado.split(",");
    arraytratado = arraytratado.map((str) => parseInt(str));
    let pares = new Array();
    let impares = new Array();
    for (let i = 0; i < arraytratado.length; i++) {
      if (arraytratado[i] % 2 === 0) {
        pares.push(arraytratado[i]);
      } else {
        impares.push(arraytratado[i]);
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
    return ["", ""];
  }
}
