document.addEventListener("DOMContentLoaded", function () {
  var lang = localStorage.getItem("site-lang") || "es";
  applyLang(lang);

  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      lang = lang === "es" ? "en" : "es";
      localStorage.setItem("site-lang", lang);
      applyLang(lang);
    });
  }
});

function applyLang(lang) {
  document.querySelectorAll(".lang-es").forEach(function (el) {
    el.style.display = lang === "es" ? "" : "none";
  });
  document.querySelectorAll(".lang-en").forEach(function (el) {
    el.style.display = lang === "en" ? "" : "none";
  });

  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "es" ? "EN" : "ES";
    btn.title = lang === "es" ? "Switch to English" : "Cambiar a español";
  }

  document.querySelectorAll("[data-lang-es][data-lang-en]").forEach(function (el) {
    el.textContent = lang === "es" ? el.getAttribute("data-lang-es") : el.getAttribute("data-lang-en");
  });
}
