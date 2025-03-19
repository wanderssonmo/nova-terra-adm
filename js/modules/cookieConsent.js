// Módulo para gestão de cookies (LGPD)
export function initCookieConsent() {
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