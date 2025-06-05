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

document.querySelectorAll("a").forEach((link) => {
  
  if (link.getAttribute("href").startsWith("#")) return;

  link.addEventListener("click", function (e) {
    e.preventDefault(); 
    const href = this.getAttribute("href"); 

    document.body.classList.add("fade-out"); 

    setTimeout(() => {
      window.location.href = href; 
    }, 500); 
  });
});
