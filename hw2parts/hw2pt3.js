//-----Scripting the part-3 (Extra Credit) below-----

// Sliding Panel below
$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").slideToggle("slow");
  });
});

function calculateExchange() {
  let usd = document.getElementById("usd").value;
  let euro = document.getElementById("euro");
  let canadian = document.getElementById("canadian");
  let hongkong = document.getElementById("hongkong");
  let japanese = document.getElementById("japanese");
  let mexican = document.getElementById("mexican");

  euro.value = (usd * 0.84).toFixed(2);
  canadian.value = (usd * 1.23).toFixed(2);
  hongkong.value = (usd * 7.76).toFixed(2);
  japanese.value = (usd * 110.8).toFixed(2);
  mexican.value = (usd * 19.82).toFixed(2);
}

// Change the (input tag) color when user clicks on the input.
$("#usd").focus(function () {
  $(this).css("background-color", "rgb(92, 184, 174)");
});
