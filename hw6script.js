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

// Part-2 Scripts:

function searchChar() {
  var content = document.getElementById("content").value;
  var char = document.getElementById("char").value.toUpperCase();
  var count = 0;

  var myText = "<!DOCTYPE html>\n";
  myText += "<html lang='en'>\n";
  myText += "<head>\n";
  myText += "<title>Popup Window</title>\n";
  myText += "</head>\n";
  myText += "<body>\n";
  myText += "<div style='margin:0 auto;'>\n";
  myText +=
    "<p><strong>Search character " +
    char +
    " not found in the content you typed</strong></p>\n";
  myText +=
    "<input type='button' value='Close Window' onclick='window.close()'>\n";
  myText += "</div>\n";
  myText += "</body>\n";
  myText += "</html>";

  for (var i = 0; i < content.length; i++) {
    if (content.charAt(i).toUpperCase() === char) {
      count++;
    }
  }
  if (count > 0) {
    document.getElementById("result").innerHTML =
      "The character " + char + " appears " + count + " times in the content.";
  } else {
    document.getElementById("result").innerHTML = "";

    // open window on the upperleft of the screen

    var newWindow = window.open(
      "",
      "new_window",
      "top=1,left=1,width=300,height=100"
    );

    newWindow.opener = null; // this is for security!!!

    // have browser focus on window

    newWindow.focus();

    // pump html into to this new opened window

    newWindow.document.write(myText);

    // tell browser that newWindow document is finished loading

    newWindow.document.close();
  }
}
// Part-3 Scripts below:

$(document).ready(function () {
  $("#phone").mask("(999) 999-9999");
  $("#format-btn").click(function () {
    const phoneNum = $("#phone").val();
    const regex = /^\((\d{3})\) (\d{3})\-(\d{4})$/;
    if (regex.test(phoneNum)) {
      const [_, areaCode, firstThreeDigits, lastFourDigits] =
        phoneNum.match(regex);
      $("#area-code").val(areaCode);
      $("#first-three-digits").val(firstThreeDigits);
      $("#last-four-digits").val(lastFourDigits);
      $("#error-msg").text("");
    } else {
      $("#area-code").val("");
      $("#first-three-digits").val("");
      $("#last-four-digits").val("");
      $("#error-msg").text(
        "Please enter the phone number as the following format (987) 654-3210."
      );
    }
  });

  $("#clear-btn").click(function () {
    $("#phone").val("");
    $("#area-code").val("");
    $("#first-three-digits").val("");
    $("#last-four-digits").val("");
    $("#error-msg").text("");
  });
});
