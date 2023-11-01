
document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector("#inicio");
    const abaInicio = document.querySelector("#inicio-container");

    scrollButton.addEventListener("click", function () {
      window.scrollTo({
        top: abaInicio.offsetTop,
        behavior: "smooth"
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.querySelector("#conhecimentos");
    const abaConhecimentos = document.querySelector("#conhecimentos-container");

    scrollButton.addEventListener("click", function () {
      window.scrollTo({
        top: abaConhecimentos.offsetTop,
        behavior: "smooth"
      });
    });
  });