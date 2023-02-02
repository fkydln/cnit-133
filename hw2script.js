//part-1
document
  .getElementById("part1x")
  .insertAdjacentHTML(
    "beforeend",
    '<strong><span style = "color: red; font-family: Times New Roman;">ab </span></strong>'
  );

document
  .getElementById("part1x")
  .insertAdjacentHTML(
    "beforeend",
    '<span style = "color: blue; font-family: Arial;">12 </span>'
  );
document
  .getElementById("part1x")
  .insertAdjacentHTML(
    "beforeend",
    '<span style = "color: green; font-family: Impact;"><i>89</i></span>'
  );
// part #2

function process() {
  let num1, num2, num3, n1, n2, n3, sum, avg, sml, lrg;

  num1 = document.forms["part2form"].elements["num1"].value;
  num2 = document.forms["part2form"].elements["num2"].value;
  num3 = document.forms["part2form"].elements["num3"].value;

  n1 = parseInt(num1);
  n2 = parseInt(num2);
  n3 = parseInt(num3);

  sum = n1 + n2 + n3;
  avg = sum / 3;

  //check to see if inputs left blank.
  if (num1 == "" || num2 == "" || num3 == "") {
    alert("Please Fill All Required Fields.");
  } else {
    $("#part2x").html(
      "<br>The sum of the numbers is " +
        sum +
        "<br>The avg of the numbers is " +
        avg +
        "<br>The product of the integers " +
        n1 * n2 * n3
    );

    if (n1 < n2 && n1 < n3) {
      sml = n1;
    } else if (n2 < n1 && n2 < n3) {
      sml = n2;
    } else if (n3 < n1 && n3 < n2) {
      sml = n3;
    } else {
      sml = n3;
    }
    document
      .getElementById("part2x")
      .insertAdjacentHTML("beforeend", "<br>The smallest number is " + sml);

    if (n1 > n2 && n1 > n3) {
      lrg = n1;
    } else if (n2 > n1 && n2 > n3) {
      lrg = n2;
    } else if (n3 > n1 && n3 > n2) {
      lrg = n3;
    } else {
      lrg = n3;
    }
    document
      .getElementById("part2x")
      .insertAdjacentHTML("beforeend", "<br>The largest number is " + lrg);
  }
}

// Fade-Out the results:
$(document).ready(function () {
  $("#fadeOut").click(function () {
    $("#part2x").fadeTo("slow", 0.15);
  });
});
// Fade-In the resubmitted results
$(document).ready(function () {
  $("#fadeInReset").click(function () {
    $("#part2x").fadeTo("slow", 0.99);
  });
});
// Reset the results div tag Work in progress. Not working right now.
// $(document).ready(function () {
//   $("#fadeInReset").click(function () {
//     if ($("#part2x".includes("<br>")) = 0) {
//       return alert(
//         "The result is already generated. Please refresh the page to recalculate."
//       );
//     }
//   });
// });

//getData returns false to avoid refresh onclick.
function getData() {
  return false;
}
// Check if JQuery is loaded.
// window.onload = function () {
//   if (window.jQuery) {
//     // jQuery is loaded
//     alert("JQuery Works!");
//   } else {
//     // jQuery is not loaded
//     alert("Doesn't Work");
//   }
// };
