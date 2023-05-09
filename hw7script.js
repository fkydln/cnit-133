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
// Part-2 Scripts:
const mainNav = document.getElementById("main-nav");
const subNavs = mainNav.querySelectorAll("ul > li > ul");

for (const subNav of subNavs) {
  // Add class to sub-nav so we can style it with CSS
  subNav.classList.add("sub-nav");

  // Hide the sub-nav initially
  subNav.style.display = "none";

  // Show the sub-nav when the parent li is hovered
  const parentLi = subNav.parentNode;
  parentLi.addEventListener("mouseover", function () {
    subNav.style.display = "block";
  });

  // Hide the sub-nav when the parent li is no longer hovered
  parentLi.addEventListener("mouseout", function () {
    subNav.style.display = "none";
  });
}
