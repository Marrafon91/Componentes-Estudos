const header = document.querySelector(".main-header");
const perfilImg = document.querySelector(".perfil-img");
const titulo = document.querySelector(".titulo");

perfilImg.addEventListener("click", (e) => {
  e.preventDefault();
  header.classList.toggle("hidden");
});

titulo.addEventListener("click", () => {
  if (header.classList.contains("hidden")) {
    header.classList.remove("hidden");
  }
});
