

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