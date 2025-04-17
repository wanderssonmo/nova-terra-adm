document.addEventListener('DOMContentLoaded', function() {

    // --- Atualizar ano no rodapé ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Botão de Acesso ao Portal ---
    const portalButton = document.getElementById('portal-button');

    if (portalButton) {
        portalButton.addEventListener('click', function() {
            console.log('Botão Acessar Portal clicado!'); // Para depuração

            // !!!!! IMPORTANTE: Substitua pela URL real do Portal do Cliente !!!!!
            const portalUrl = 'URL_REAL_DO_PORTAL_AQUI';

            if (portalUrl === 'URL_REAL_DO_PORTAL_AQUI' || !portalUrl) {
                 alert('Erro: A URL do Portal do Cliente não foi configurada corretamente neste botão.');
                 console.error('A URL do portal não foi definida no script.js');
                 return; // Interrompe a execução se a URL não foi alterada
            }

            // Redireciona o usuário para a URL do portal
            window.location.href = portalUrl;

            // Opcional: Abrir em nova aba (descomente a linha abaixo e comente a anterior)
            // window.open(portalUrl, '_blank');
        });
    } else {
        console.error("Elemento com ID 'portal-button' não encontrado.");
    }

    // --- Opcional: Animação suave ao rolar para seções (exemplo) ---
    // Você pode adicionar bibliotecas como ScrollReveal ou implementar manualmente
    // Aqui um exemplo muito simples apenas para ilustrar:
    const steps = document.querySelectorAll('.step-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                // observer.unobserve(entry.target); // Descomente para animar apenas uma vez
            }
        });
    }, { threshold: 0.1 }); // Aciona quando 10% do item está visível

    steps.forEach(step => {
        step.style.opacity = 0; // Começa invisível
        step.style.transform = 'translateY(30px)'; // Começa um pouco abaixo
        step.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out'; // Adiciona transição via JS
        observer.observe(step);
    });

});