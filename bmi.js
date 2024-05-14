// Function to calculate BMI
function calculateBMI(weight, height) {
  return weight / (height * height);
}

// Function to classify BMI
function classifyBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

// Function to start the BMI calculator
function startBMI() {
  let continueCalculation = true;

  while (continueCalculation) {
    const weight = parseFloat(prompt("Enter your weight in kilograms:"));
    const height = parseFloat(prompt("Enter your height in meters:"));

    if (isNaN(weight) || isNaN(height)) {
      alert("Please enter valid numbers for weight and height.");
    } else {
      const bmi = calculateBMI(weight, height);
      const classification = classifyBMI(bmi);

      alert(`Your BMI is ${bmi.toFixed(2)}, which is classified as ${classification}.`);

      const response = prompt("Do you want to continue (yes/no)?").toLowerCase();
      continueCalculation = response === "yes";
    }
  }
}

// Start the BMI calculator
startBMI();
