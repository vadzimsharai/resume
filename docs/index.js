function savePDF() {
  const theme = localStorage.getItem("theme") || "dark";

  window.open("pdf/VadzimSharai.Resume." + theme + ".pdf", "_blank").focus();
}

function handlePDF() {
  if (window.savePDFDev) {
    savePDFDev();
  } else {
    savePDF();
  }
}

function toggleLight() {
  if (document.documentElement.classList.contains("light-theme")) {
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.add("light-theme");
    document.documentElement.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  }
}

(function () {
  const theme = localStorage.getItem("theme");

  if (theme === "light") {
    document.documentElement.classList.add("light-theme");
    document.documentElement.classList.remove("dark-theme");
  }
})();
