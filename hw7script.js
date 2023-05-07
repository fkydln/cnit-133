$(document).ready(function () {
  $(".accordion-header").click(function () {
    $(this).toggleClass("active");
    $(this).next(".accordion-content").slideToggle();
  });
});

$(document).ready(function () {
  // Apply initial styles
  applyStyles();

  // Apply styles when form inputs change
  $("#style-form input, #style-form select").change(function () {
    applyStyles();
  });

  function applyStyles() {
    var bg = $('input[name="bg-color"]:checked').val();
    var underline = $('input[name="underline"]').prop("checked");
    var bold = $('input[name="bold"]').prop("checked");
    var italic = $('input[name="italic"]').prop("checked");
    var fontSize = $('select[name="font-size"]').val();

    $("#content").css("background-color", bg);
    $("#content p").css({
      "text-decoration": underline ? "underline" : "none",
      "font-weight": bold ? "bold" : "normal",
      "font-style": italic ? "italic" : "normal",
      "font-size": fontSize,
    });
  }
});
