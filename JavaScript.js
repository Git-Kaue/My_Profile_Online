// Seleciona todos os links do menu
const links = document.querySelectorAll("nav a");

// Adiciona o evento de clique em cada link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' de todos os links
    links.forEach((l) => l.classList.remove("active"));
    // Adiciona 'active' ao link clicado
    this.classList.add("active");
  });
});
