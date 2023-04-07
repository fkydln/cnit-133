function validateInputPart1() {
  let name = $("#part1name").val();
  let radioCheck = $('input[name="ageGroup"]:checked').val();
  let selectedCheckBoxes = [];
  var dropdownValue = $("#movieGenre").val();

  $("input[name='pt1browsers']:checked").each(function () {
    selectedCheckBoxes.push($(this).val());
  });

  if (
    name != "" &&
    radioCheck != undefined &&
    selectedCheckBoxes != "" &&
    dropdownValue != "option"
  ) {
    $("#outputPt1").html("Thanks, your data was submitted!");
    console.log("success!");
  } else {
    $("#outputPt1").html("Sorry, please fill the entire form completely.");
  }
}
// Part-2 Scripts are written below
function openWebsite(menu) {
  var url = menu.value;
  if (url) {
    window.open(url, "_blank");
  }
}

function openSelectedWebsite() {
  var menu = document.getElementById("menu2");
  var url = menu.value;
  if (url) {
    window.open(url, "_blank");
  }
}
