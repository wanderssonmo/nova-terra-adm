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