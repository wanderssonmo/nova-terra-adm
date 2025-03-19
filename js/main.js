// Como estamos em um ambiente estático, evitamos imports ES6
// Copiamos a função de cookieConsent diretamente aqui
function initCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const banner = document.createElement('div');
      banner.innerHTML = `
        <p>Usamos cookies para melhorar sua experiência. Aceitar?</p>
        <button id="acceptCookies">Sim</button>
        <button id="rejectCookies">Não</button>
      `;
      banner.style.cssText = 'position: fixed; bottom: 0; width: 100%; background: #fff; padding: 1rem;';
      document.body.appendChild(banner);
  
      document.getElementById('acceptCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        banner.remove();
      });
  
      document.getElementById('rejectCookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        banner.remove();
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    initCookieConsent();
    console.log('Nova Terra Adm carregada com sucesso!');
  
    // Rolagem suave para links do menu
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Exemplo básico de submit da barra de busca
    document.querySelector('#search-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const type = e.target.type.value;
      const propertyType = e.target['property-type'].value;
      const location = e.target.location.value;
      console.log(`Busca: ${type} - ${propertyType} em ${location}`);
      // Adicione lógica de busca estática aqui (ex.: redirecionar ou filtrar)
    });
  });