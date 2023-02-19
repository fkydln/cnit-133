function calculateGrades() {
  var hwAvg = parseInt(document.getElementById("hwAvg").value);
  var midExam = parseInt(document.getElementById("midExam").value);
  var finalExam = parseInt(document.getElementById("finalExam").value);
  var participation = parseInt(document.getElementById("participation").value);
  var output = document.getElementById("output");

  if (
    isNaN(hwAvg) ||
    isNaN(midExam) ||
    isNaN(finalExam) ||
    isNaN(participation)
  ) {
    output.innerHTML = "Error: Input must be a number.";
  } else if (
    hwAvg < 0 ||
    hwAvg > 100 ||
    midExam < 0 ||
    midExam > 100 ||
    finalExam < 0 ||
    finalExam > 100 ||
    participation < 0 ||
    participation > 100
  ) {
    output.innerHTML = "Error: Input must be between 0 and 100.";
  } else {
    var finalAvg =
      0.5 * hwAvg + 0.2 * midExam + 0.2 * finalExam + 0.1 * participation;
    finalAvg = Math.round(finalAvg);

    var letterGrade = "";
    if (finalAvg >= 90) {
      letterGrade = "A";
    } else if (finalAvg >= 80) {
      letterGrade = "B";
    } else if (finalAvg >= 70) {
      letterGrade = "C";
    } else if (finalAvg >= 60) {
      letterGrade = "D";
    } else {
      letterGrade = "F";
    }

    if (letterGrade === "D" || letterGrade === "F") {
      output.innerHTML =
        "Final Average: " +
        finalAvg +
        " (" +
        letterGrade +
        ")\nStudent must retake the course.";
    } else {
      output.innerHTML =
        "Final Average: " + finalAvg + " (" + letterGrade + ")";
    }
  }
}

function clearForm() {
  document.getElementById("hwAvg").value = "";
  document.getElementById("midExam").value = "";
  document.getElementById("finalExam").value = "";
  document.getElementById("participation").value = "";
  document.getElementById("output").innerHTML = "";
}
// Part-2 scripts below

function process() {
  let name,
    item1,
    item2,
    item3,
    item4,
    salesmanTotal,
    commission,
    item1total,
    item2total,
    item3total,
    item4total,
    itemstotal;

  // Gather Seller's Name
  name = document.forms["part2form"].elements["name"].value;
  console.log(name);
  // Gather number of sales for item1
  item1 = document.forms["part2form"].elements["item1"].value;
  console.log("Original number of items entered for item1: " + item1);
  // Gather number of sales for item2
  item2 = document.forms["part2form"].elements["item2"].value;
  console.log("Original number of items entered for item2: " + item2);
  // Gather number of sales for item3
  item3 = document.forms["part2form"].elements["item3"].value;
  console.log("Original number of items entered for item3: " + item3);
  // Gather number of sales for item4
  item4 = document.forms["part2form"].elements["item4"].value;
  console.log("Original number of items entered for item4: " + item4);
  if (item1 >= 0 && item2 >= 0 && item3 >= 0 && item4 >= 0) {
    // Multiply by the constant value
    item1total = item1 * 20.99;
    item2total = item2 * 12.75;
    item3total = item3 * 9.95;
    item4total = item4 * 35.89;
    // Debugging after calculations
    console.log(
      "Final values following: " +
        "\n" +
        item1 +
        "\n" +
        item2 +
        "\n" +
        item3 +
        "\n" +
        item4
    );
    // Displays Quantity Sold:
    $("#item1qty").val(item1);
    $("#item2qty").val(item2);
    $("#item3qty").val(item3);
    $("#item4qty").val(item4);
    // Round the totals of each item to 2 decimal places
    item1total = Number(item1total.toFixed(2));
    item2total = Number(item2total.toFixed(2));
    item3total = Number(item3total.toFixed(2));
    item4total = Number(item4total.toFixed(2));
    // Displays totals by each item
    $("#item1total").val(item1total);
    $("#item2total").val(item2total);
    $("#item3total").val(item3total);
    $("#item4total").val(item4total);
    // Displays items total

    itemstotal = Number(
      item1total + item2total + item3total + item4total
    ).toFixed(2);
    $("#itemstotal").val(itemstotal);
    // Salesman Income per week
    commission = (item1total + item2total + item3total + item4total) * 0.09;

    salesmanTotal = (250 + commission).toFixed(2);
    $("#totalWeekly").val(salesmanTotal);
  } else {
    alert(
      "You can only enter numbers that are greater than zero. Negative numbers are not allowed, please check your entry."
    );
  }
}

// Tooltip:
$(function () {
  $(document).tooltip();
});

// Part-3 scripts below
function convertCtoF() {
  let input, convertedToF;
  // Gather input
  input = document.forms["part3form"].elements["degreeInput"].value;
  // Debugging
  console.log("entered: " + input);
  // Formula
  convertedToF = (9 / 5) * input + 32;
  // Display result
  $("#degreeOutput").val(convertedToF);

  return convertedToF;
}
function convertFtoC() {
  let input, convertedToC;
  // Gather input
  input = document.forms["part3form"].elements["degreeInput"].value;
  // Debugging
  console.log("entered: " + input);
  // Formula
  convertedToC = (5 / 9) * (input - 32);
  // Display result
  $("#degreeOutput").val(convertedToC);
}
