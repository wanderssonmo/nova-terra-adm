// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa o aviso de cookies
  initCookieConsent();
  console.log('Nova Terra Adm carregada com sucesso!');

  // 🎯 Rolagem suave para links do menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 🔍 Lógica básica para o envio da barra de busca
  const searchForm = document.querySelector('#search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = e.target.type?.value;
      const propertyType = e.target['property-type']?.value;
      const location = e.target.location?.value;
      console.log(`Busca: ${type} - ${propertyType} em ${location}`);
      // 🔧 Adicione lógica real de busca aqui
    });
  }
});

// 📤 BOTÃO COMPARTILHAR - HEADER
const botaoCompartilhar = document.getElementById('botaoCompartilhar');

if (botaoCompartilhar) {
  botaoCompartilhar.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Nova Terra Adm - Lotes e Chácaras',
          text: 'Conheça os lotes e chácaras da Nova Terra Administradora de Imóveis!',
          url: window.location.href
        });
      } catch (err) {
        console.error('Erro ao compartilhar:', err);
      }
    } else {
      alert('Seu navegador não suporta compartilhamento automático. Copie o link: ' + window.location.href);
    }
  });
}
