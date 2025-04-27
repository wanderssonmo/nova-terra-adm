// Função para definir um cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Função para inicializar o consentimento de cookies
function initCookieConsent() {
  const cookieName = 'cookieConsentGiven';
  const consent = getCookie(cookieName);
  const bannerContainer = document.getElementById('cookie-banner');

  if (!consent) { // Se o usuário não deu consentimento, exibe o banner
    const banner = document.createElement('div');
    banner.classList.add('cookie-banner'); // Adiciona a classe de estilo do banner
    banner.innerHTML = `
      <p>Usamos cookies para melhorar sua experiência. Leia nossa <a href="/politica-de-privacidade.html" target="_blank">Política de Privacidade</a>.</p>
      <div>
        <button id="acceptCookies">Aceitar</button>
        <button id="rejectCookies">Recusar</button>
      </div>
    `;

    // Adiciona o banner ao container
    bannerContainer.appendChild(banner);
    console.log('Banner de cookies foi criado');

    // Event listener para o botão "Aceitar"
    document.getElementById('acceptCookies').addEventListener('click', () => {
      console.log('Usuário aceitou os cookies');
      setCookie(cookieName, 'accepted', 30); // Armazena a escolha em um cookie por 30 dias
      bannerContainer.innerHTML = ''; // Remove o banner da página
    });

    // Event listener para o botão "Recusar"
    document.getElementById('rejectCookies').addEventListener('click', () => {
      console.log('Usuário recusou os cookies');
      setCookie(cookieName, 'rejected', 30); // Armazena a escolha em um cookie por 30 dias
      bannerContainer.innerHTML = ''; // Remove o banner da página
      // Aqui você pode adicionar lógica para desabilitar cookies não essenciais imediatamente
    });
  } else {
    console.log('Consentimento já dado:', consent); // Para debugging
    bannerContainer.innerHTML = ''; // Garante que o banner não seja exibido se o consentimento já foi dado
    // Aqui você pode verificar o valor do cookie ('accepted' ou 'rejected')
    // e tomar ações correspondentes (por exemplo, carregar scripts de análise apenas se 'accepted')
  }
}

// Chama a função para inicializar o consentimento assim que o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', initCookieConsent);