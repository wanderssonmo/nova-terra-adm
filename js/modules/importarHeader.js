fetch('header.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar header.html: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('header').innerHTML = data;
    console.log('Header carregado com sucesso!');

    // Selecionar elementos após o header ser carregado
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Verificar se os elementos foram encontrados
    if (!hamburger || !navMenu) {
      console.error('Erro: .hamburger ou .nav-menu não encontrados.');
      return;
    }

    // Função para alternar o menu
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    }

    // Adicionar evento de clique
    hamburger.addEventListener('click', toggleMenu);

    // Fechar o menu ao clicar em um link (em telas pequenas)
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    });

    // Ajustar o estado inicial e ao redimensionar
    function updateMenuState() {
      if (window.innerWidth > 768) {
        navMenu.style.display = ''; // Restaura o padrão (flex) em telas grandes
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      } else if (!navMenu.classList.contains('active')) {
        navMenu.style.display = 'none'; // Esconde o menu em telas pequenas por padrão
      }
    }

    // Aplicar estado inicial
    updateMenuState();

    // Atualizar ao redimensionar
    window.addEventListener('resize', updateMenuState);

    // -------------------------
    // 🟢 DESTACAR A PÁGINA ATUAL
    // -------------------------
    const currentPage = window.location.pathname.split("/").pop() || "index.html"; // Se estiver na raiz, considera "index.html"

    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });

  })
  .catch(error => {
    console.error('Erro ao carregar o header:', error);
    document.getElementById('header').innerHTML = '<p style="color: red;">Erro ao carregar o header.</p>';
  });
