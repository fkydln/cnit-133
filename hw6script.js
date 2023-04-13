function calculate() {
  const numberInput = document.getElementById("numberInput").value;
  const parsedNumber = parseFloat(numberInput);

  if (
    Number.isInteger(parsedNumber) ||
    parsedNumber.toString().split(".")[1].length < 4
  ) {
    document.getElementById("output").innerHTML =
      "You need to type a number with at least 4 decimals, please try again";
  } else {
    const roundedToInteger = Math.round(parsedNumber);
    const squareRootRounded = Math.round(Math.sqrt(parsedNumber));
    const roundedToNearestTenth = parsedNumber.toFixed(1);
    const roundedToNearestHundredth = parsedNumber.toFixed(2);
    const roundedToNearestThousandth = parsedNumber.toFixed(3);

    document.getElementById(
      "output"
    ).innerHTML = `You typed number ${parsedNumber} <br>
      Rounded to the nearest integer = ${roundedToInteger} <br>
      Square root rounded to integer = ${squareRootRounded} <br>
      Rounded to the nearest 10th position = ${roundedToNearestTenth} <br>
      Rounded to the nearest 100th position = ${roundedToNearestHundredth} <br>
      Rounded to the nearest 1000th position = ${roundedToNearestThousandth}`;
  }
}
function clearForm() {
  document.getElementById("numberInput").value = "";
  document.getElementById("output").innerHTML = "";
}
