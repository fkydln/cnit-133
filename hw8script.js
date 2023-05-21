function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    myFunction(this);
  };
  xhttp.open("GET", "cd_catalog.xml");
  xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table = "<tr><th>Artist</th><th>Title</th></tr>";
  for (let i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
$(document).ready(function () {
  $("#country-select").change(function () {
    var countryName = $(this).val();
    var url = "https://restcountries.com/v2/name/" + countryName;
    $.ajax({
      url: url,
      type: "GET",
      success: function (data) {
        var country = data[0];
        var countryInfo =
          "Country: " +
          country.name +
          "<br>" +
          "Capital: " +
          country.capital +
          "<br>" +
          "Population: " +
          country.population +
          "<br>" +
          "Currency: " +
          country.currencies[0].name +
          "<br>" +
          "Flag: <img src='" +
          country.flag +
          "' alt='Flag of " +
          country.name +
          "'>";
        $("#country-info").html(countryInfo);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        alert("Error: " + errorThrown);
      },
    });
  });
});
