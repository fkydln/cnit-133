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
// Part-3 Scripts are written below

const censusData = [
  ["AL", "Alabama", "Montgomery", "4,903,185"],
  ["AK", "Alaska", "Juneau", "731,545"],
  ["AZ", "Arizona", "Phoenix", "7,278,717"],
  ["AR", "Arkansas", "Little Rock", "3,017,825"],
  ["CA", "California", "Sacramento", "39,512,223"],
  ["CO", "Colorado", "Denver", "5,758,736"],
];

function getStateInfo() {
  const stateInput = document.getElementById("stateInput").value;
  let foundState = false;
  let output = "";

  for (let i = 0; i < censusData.length; i++) {
    const stateAbbr = censusData[i][0];
    const stateName = censusData[i][1];
    const capital = censusData[i][2];
    const population = censusData[i][3];

    if (
      stateAbbr.toLowerCase() === stateInput.toLowerCase() ||
      stateName.toLowerCase() === stateInput.toLowerCase()
    ) {
      output = `Thanks for your inquiry, here is the information you requested:<br>State abbr = ${stateAbbr}<br>State Name = ${stateName}<br>Capital = ${capital}<br>Population = ${population}`;
      foundState = true;
      break;
    }
  }

  if (!foundState) {
    output =
      "Sorry, we do not have information about this state! We only have information about: ";
    for (let i = 0; i < censusData.length; i++) {
      const stateName = censusData[i][1];
      if (i === censusData.length - 1) {
        output += stateName;
      } else {
        output += stateName + ", ";
      }
    }
  }

  document.getElementById("output").innerHTML = output;
}
