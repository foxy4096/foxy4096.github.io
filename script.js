// Dark mode

addEventListener("load", function () {
  var body = document.querySelector("body");
  var darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("dark");
  }
});

function toggleDarkMode() {
  var body = document.querySelector("body");
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}
