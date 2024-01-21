// weight variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");
// height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");
// display slider value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
// update slider in real time while dragging it
weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
};
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
};
//change weight-slider value on weight-number input
function showValWeight(newVal) {
  weightSlider.value = newVal;
}
//change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value = newVal;
}
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

// calculate BMI and display results
function calculateBmi() {
  let weight = document.bmiForm.realweight.Value;
  let height = document.bmiForm.realheight.value / 100;
  let realbmi = weight / Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  //clear message before calculating new bmi
  messageOutput.innerHTML = "";
  //print BMI
  realbmiOutput.innerHTML = "" + roundedBmi;
  //appropriae ,essage for your BMI rating
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "Underweight";
  } else if (roundedBmi <= 18.5 && roundedBmi < 24.9) {
    messageOutput.innerHTML = "Normal weight";
  } else if (roundedBmi <= 25 && roundedBmi < 29.9) {
    messageOutput.innerHTML = "Overweight";
  } else {
    messageOutput.innerHTML = "Obese";
  }
}
