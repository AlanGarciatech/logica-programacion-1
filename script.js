function ordenarNumeros() {
  // Pedir 3 números
  let num1 = Number(prompt("Ingresa el primer número:"));
  let num2 = Number(prompt("Ingresa el segundo número:"));
  let num3 = Number(prompt("Ingresa el tercer número:"));

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, ingresa solo números válidos.");
    return;
  }

  if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales: " + num1);
    document.getElementById("resultado").innerHTML = 
      "Los tres números son iguales: " + num1;
    return;
  }

  let numeros = [num1, num2, num3];

  let ascendente = [...numeros].sort((a, b) => a - b);

  let descendente = [...numeros].sort((a, b) => b - a);

  // Mostrar resultados
  console.log("Orden ascendente (menor a mayor): " + ascendente.join(", "));
  console.log("Orden descendente (mayor a menor): " + descendente.join(", "));

  document.getElementById("resultado").innerHTML = `
    <p>Menor a mayor: ${ascendente.join(", ")}</p>
    <p>Mayor a menor: ${descendente.join(", ")}</p>
  `;
}
