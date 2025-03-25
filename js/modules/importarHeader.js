/* fetch('templates/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar header.html: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
        console.log('Header carregado com sucesso!');

        // Destacar a página ativa
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.header-nav ul li a');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (href === '/' && currentPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => {
        console.error('Erro ao carregar o header:', error);
        document.getElementById('header').innerHTML = '<p style="color: red;">Erro ao carregar o header. Verifique o console para mais detalhes.</p>';
    });
    */

    fetch('templates/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao carregar header.html: ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
        console.log('Header carregado com sucesso!');

        // Função para gerenciar o menu hambúrguer
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        function toggleMenu() {
            if (window.innerWidth <= 768) { // Apenas em telas menores
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            }
        }

        // Ativar/desativar o menu hambúrguer ao clicar
        hamburger.addEventListener('click', toggleMenu);

        // Fechar o menu ao clicar em um link (em telas menores)
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) { // Apenas em telas menores
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        });

        // Ajustar o estado do menu ao redimensionar a janela
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                // Em telas grandes, remover classes 'active' e exibir o menu normalmente
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                navMenu.style.display = ''; // Restaura o display padrão (flex)
            } else {
                // Em telas pequenas, garantir que o menu volte ao estado inicial
                if (!navMenu.classList.contains('active')) {
                    navMenu.style.display = 'none';
                }
            }
        });

        // Inicializar o estado do menu ao carregar a página
        if (window.innerWidth > 768) {
            navMenu.style.display = ''; // Garante que o menu seja visível em telas grandes
        }
    })
    .catch(error => {
        console.error('Erro ao carregar o header:', error);
        document.getElementById('header').innerHTML = '<p style="color: red;">Erro ao carregar o header. Verifique o console para mais detalhes.</p>';
    });
