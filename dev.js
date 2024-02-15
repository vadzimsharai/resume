(function () {
  const script = document.createElement("script");

  script.async = true;
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js";
  script.integrity =
    "sha512-YcsIPGdhPK4P/uRW6/sruonlYj+Q7UHWeKfTAkBW+g83NKM+jMJFJ4iAPfSnVp7BKD4dKMHmVSvICUbE/V1sSw==";
  script.crossOrigin = "anonymous";
  script.referrerPolicy = "no-referrer";

  if (document.body) {
    document.body.appendChild(script);
  } else if (document.head) {
    document.head.appendChild(script);
  }
})();

function savePDFDev() {
  const theme = localStorage.getItem("theme") || "dark";

  const opt = {
    margin: 0,
    filename: "VadzimSharai.Resume." + theme + ".pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { format: "b4" },
    pagebreak: { after: ".pdf-split" },
  };

  window.scrollTo(0, 0);
  document.body.classList.add("pdf-mode");
  setTimeout(function () {
    html2pdf(document.getElementById("container"), opt).then(function () {
      document.body.classList.remove("pdf-mode");
    });
  });
}
