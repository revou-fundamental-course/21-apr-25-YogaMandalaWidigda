let isReversed = false;


function convert() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const rumus = document.getElementById("rumus");

  if (!isReversed) {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
      const f = (c * 9/5) + 32;
      fahrenheitInput.value = f.toFixed(2);
      rumus.value = `${c}°C × (9/5) + 32 = ${f.toFixed(2)}°F`;
    } else {
      alert("Masukkan angka yang valid untuk Celsius.");
    }
  } else {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
      const c = (f - 32) * 5/9;
      celsiusInput.value = c.toFixed(2);
      rumus.value = `(${f}°F - 32) × 5/9 = ${c.toFixed(2)}°C`;
    } else {
      alert("Masukkan angka yang valid untuk Fahrenheit.");
    }
  }
}

function resetFields() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("rumus").value = "";
}

function reverse() {
  isReversed = !isReversed;
  const title = document.getElementById("title");
  const labelC = document.getElementById("label-celsius");
  const labelF = document.getElementById("label-fahrenheit");

  if (isReversed) {
    title.textContent = "Conversion Fahrenheit Temperature (°F) To Celsius (°C)";
    labelC.textContent = "Fahrenheit (°F):";
    labelF.textContent = "Celsius (°C):";
  } else {
    title.textContent = "Conversion Celsius Temperature(°C) To Fahrenheit (°F)";
    labelC.textContent = "Celsius (°C):";
    labelF.textContent = "Fahrenheit (°F):";
  }

  resetFields();
}


alert("Yoga Mandala's Project Convert Temperature")