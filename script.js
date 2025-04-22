function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    alert('Please complete required information.');
    return;
  }
  // https://www.w3schools.com/jsref/jsref_isnan.asp

  var bmi = weight / Math.pow(height, 2);
  var category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  document.getElementById("bmiCategory").innerHTML =
    `Your BMI is <strong>${bmi.toFixed(2)}</strong> which means you are <strong>${category}</strong>.`;
}
