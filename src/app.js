const celsiusInput = document.querySelector("#celsius > input");
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
  return Math.round(num * 100) / 100;
}

function celsiusToFahrenheitAndKelvin() {
  const cTemp = parseFloat(celsiusInput.value);
  const fTemp = cTemp * (9 / 5) + 32;
  const kTemp = cTemp + 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
  const fTemp = parseFloat(fahrenheitInput.value);
  const cTemp = (fTemp - 32) * (5 / 9);
  const kTemp = (fTemp - 459.67) * (5 / 9);
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvinToFahrenheitAndCelsius() {
  const kTemp = parseFloat(kelvinInput.value);
  const fTemp = (9 / 5) * (kTemp - 273) + 32;
  const cTemp = kTemp - 273.15;
  fahrenheitInput.value = roundNum(fTemp);
  celsiusInput.value = roundNum(cTemp);
}

function main() {
  celsiusInput.addEventListener("input", celsiusToFahrenheitAndKelvin);
  fahrenheitInput.addEventListener("input", fahrenheitToCelsiusAndKelvin);
  kelvinInput.addEventListener("input", kelvinToFahrenheitAndCelsius);
}

main();
