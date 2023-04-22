function printListEvenOddArrayValue(pares = [0], impares = [0]) {
  htmlTable = `
      <thead class="table-dark">
            <tr>
              <th>Par</th>
              <th>Impar</th>
            </tr>
          </thead>
          <tbody>
      `;
  for (let i = 0, ii = 0; i < pares.length || ii < impares.length; i++, ii++) {
    const par = typeof pares[i] !== "undefined" ? pares[i] : "";
    const impar = typeof impares[ii] !== "undefined" ? impares[ii] : "";

    htmlTable += `
            <tr>
                <td>${par}</td>
                <td>${impar}</td>    
            </tr>`;
  }
  htmlTable += `</tbody>`;
  return htmlTable;
}
