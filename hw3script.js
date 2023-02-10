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
