<script>
(function () {
  var navLabels = {
    "Inicio": "Home",
    "Artículos científicos": "Scientific articles",
    "Publicaciones en congresos": "Conference proceedings",
    "Divulgación de la ciencia": "Science outreach",
    "Recursos pedagógicos": "Teaching resources"
  };

  var navLabelsReverse = {};
  Object.keys(navLabels).forEach(function (k) {
    navLabelsReverse[navLabels[k]] = k;
  });

  var lang = localStorage.getItem("site-lang") || "es";

  var tools = document.querySelector(".quarto-navbar-tools");
  if (tools) {
    var container = document.createElement("span");
    container.id = "lang-toggle-container";
    container.style.marginRight = "0.7em";
    container.style.fontSize = "0.85em";
    container.style.display = "inline-flex";
    container.style.alignItems = "center";
    container.style.gap = "0.15em";

    var btnEs = document.createElement("a");
    btnEs.id = "lang-btn-es";
    btnEs.href = "javascript:void(0)";
    btnEs.style.textDecoration = "none";
    btnEs.style.cursor = "pointer";
    btnEs.style.color = "inherit";
    btnEs.style.padding = "0.15em 0.4em";
    btnEs.style.borderRadius = "3px";
    btnEs.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1e6-1f1f7.svg" alt="AR" style="width:1.1em;height:1.1em;vertical-align:-0.15em"> ES';

    var sep = document.createElement("span");
    sep.textContent = "|";
    sep.style.opacity = "0.4";
    sep.style.margin = "0 0.1em";
    sep.style.color = "inherit";

    var btnEn = document.createElement("a");
    btnEn.id = "lang-btn-en";
    btnEn.href = "javascript:void(0)";
    btnEn.style.textDecoration = "none";
    btnEn.style.cursor = "pointer";
    btnEn.style.color = "inherit";
    btnEn.style.padding = "0.15em 0.4em";
    btnEn.style.borderRadius = "3px";
    btnEn.innerHTML = '<img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f1ec-1f1e7.svg" alt="UK" style="width:1.1em;height:1.1em;vertical-align:-0.15em"> EN';

    btnEs.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      lang = "es";
      localStorage.setItem("site-lang", lang);
      applyLang(lang);
    });

    btnEn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      lang = "en";
      localStorage.setItem("site-lang", lang);
      applyLang(lang);
    });

    container.appendChild(btnEs);
    container.appendChild(sep);
    container.appendChild(btnEn);
    tools.insertBefore(container, tools.firstChild);
  }

  applyLang(lang);

  function applyLang(lang) {
    var esEls = document.querySelectorAll(".lang-es");
    var enEls = document.querySelectorAll(".lang-en");

    esEls.forEach(function (el) {
      el.style.display = lang === "es" ? "block" : "none";
    });
    enEls.forEach(function (el) {
      el.style.display = lang === "en" ? "block" : "none";
    });

    var bEs = document.getElementById("lang-btn-es");
    var bEn = document.getElementById("lang-btn-en");
    if (bEs && bEn) {
      bEs.style.fontWeight = lang === "es" ? "700" : "400";
      bEs.style.opacity = lang === "es" ? "1" : "0.5";
      bEn.style.fontWeight = lang === "en" ? "700" : "400";
      bEn.style.opacity = lang === "en" ? "1" : "0.5";
    }

    document.querySelectorAll(".navbar .nav-link").forEach(function (el) {
      var text = el.textContent.trim();
      if (lang === "en" && navLabels[text]) {
        el.textContent = navLabels[text];
      } else if (lang === "es" && navLabelsReverse[text]) {
        el.textContent = navLabelsReverse[text];
      }
    });
  }
})();
</script>
