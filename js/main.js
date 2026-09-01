// Renata Oliveira — Psicóloga | interações de interface (menu mobile e FAQ)
document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var botaoMenu = document.querySelector(".botao-menu");
  var navPrincipal = document.querySelector(".nav-principal");

  if (botaoMenu && navPrincipal) {
    botaoMenu.addEventListener("click", function () {
      var aberto = navPrincipal.classList.toggle("aberto");
      botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
    });

    navPrincipal.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navPrincipal.classList.remove("aberto");
        botaoMenu.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Acordeão de perguntas frequentes
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var pergunta = item.querySelector(".faq-pergunta");
    if (!pergunta) return;
    pergunta.addEventListener("click", function () {
      var estaAberto = item.getAttribute("data-aberto") === "true";
      item.setAttribute("data-aberto", estaAberto ? "false" : "true");
      pergunta.setAttribute("aria-expanded", estaAberto ? "false" : "true");
    });
  });

  // Ano dinâmico no rodapé
  var elementoAno = document.getElementById("ano-atual");
  if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
  }
});
