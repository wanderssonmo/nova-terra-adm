// Módulo para gestão de cookies (LGPD)
// js/modules/cookieConsent.js
export function initCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    const banner = document.createElement('div');
    banner.id = 'cookie-banner'; // Adiciona um ID para referenciar no CSS
    banner.innerHTML = `
      <div>
        <p>
          Utilizamos cookies para melhorar sua experiência no site. Ao aceitar, você concorda com nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.
        </p>
        <div class="button-container">
          <button id="acceptCookies">Aceitar</button>
          <button id="rejectCookies">Recusar</button>
        </div>
      </div>
    `;

    document.body.appendChild(banner);

    // Forçar a animação de entrada
    setTimeout(() => {
      banner.style.bottom = '0';
    }, 50);

    const acceptBtn = document.getElementById('acceptCookies');
    const rejectBtn = document.getElementById('rejectCookies');

    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      banner.style.bottom = '-200px';
      setTimeout(() => {
        banner.remove();
      }, 500);
    });

    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      banner.style.bottom = '-200px';
      setTimeout(() => {
        banner.remove();
      }, 500);
    });
  }
}
