
        fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;

    // Agora que o footer foi carregado, podemos ativar o botão
    const btnTopo = document.getElementById("btn-topo");

    // Mostrar ou ocultar o botão
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTopo.style.display = "flex";
      } else {
        btnTopo.style.display = "none";
      }
    });

    // Rolagem suave para o topo
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
