document.addEventListener("DOMContentLoaded", () => {
  // Declaración de datos para uso de los ejercicios
  const datosParte1 = [5, 7, 1, 3, 9, 2, 56, 23, 45, 12, 67, 23, 4, 8];
  const datosParte2 = [5, 7, 1, 3, 9, 2, 56, 23, 45, 12, 67, 23, 4, 8];
  const datosParte3 = ["margarita", "sara", "karina", "mario"];

  // Declaración de variables que capturan inputs
  const inputNumeroMayor1 = document.getElementById("inputNumeroMayor1");
  inputNumeroMayor1.value = datosParte1;

  const inputParImpar1 = document.getElementById("inputParImpar1");
  inputParImpar1.value = datosParte2;

  const longitudNombres1 = document.getElementById("inputLongitudNombres1");
  longitudNombres1.value = datosParte3;

  //
  // Declaración de variables que capturan botones
  const btnImprimirNumeroMayor1 = document.getElementById(
    "btnImprimirNumeroMayor1"
  );

  const btnImprimirParImpar1 = document.getElementById("btnImprimirParImpar1");

  const btnLongitudNombres1 = document.getElementById("btnLongitudNombres1");

  //
  // Declaración de variables que controlan outputs
  const outputNumeroMayor1 = document.getElementById("outputNumeroMayor1");

  const outputParImpar1 = document.getElementById("outputParImpar1");

  const outputLongitudNombres1 = document.getElementById(
    "outputLongitudNombres1"
  );

  //
  // Lógica de la app
  btnImprimirNumeroMayor1.addEventListener("click", () => {
    if (inputNumeroMayor1 !== "") {
      let input = inputNumeroMayor1.value;
      outputNumeroMayor1.value = getNumericArrayValue(input);
    }
  });

  btnImprimirParImpar1.addEventListener("click", () => {
    if (inputParImpar1 !== "") {
      let input = inputParImpar1.value;
      const output = getEvenOddArrayValue(input);
      const pares = output[0];
      const impares = output[1];
      outputParImpar1.innerHTML = printListEvenOddArrayValue(pares, impares);
    }
  });

  btnLongitudNombres1.addEventListener("click", () => {
    if (longitudNombres1 !== "") {
      let input = longitudNombres1.value.split(",");
      const output = getCountLongestName(input);
      outputLongitudNombres1.value = output;
    }
  });
});
