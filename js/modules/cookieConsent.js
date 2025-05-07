// Função para salvar cookie
function setCookie(nome, valor, dias) {
  const d = new Date();
  d.setTime(d.getTime() + (dias * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

// Função para obter cookie
function getCookie(nome) {
  const nomeEQ = nome + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nomeEQ) === 0) return c.substring(nomeEQ.length, c.length);
  }
  return null;
}

// Mostrar banner se o usuário ainda não aceitou ou recusou
window.onload = function () {
  if (!getCookie("cookies_aceitos") && !getCookie("cookies_recusados")) {
    document.getElementById("cookie-banner").style.display = "block";
  }

  // Aceitar cookies
  document.getElementById("accept-cookies").onclick = function () {
    setCookie("cookies_aceitos", "sim", 365);
    document.getElementById("cookie-banner").style.display = "none";
  };

  // Recusar cookies
  document.getElementById("decline-cookies").onclick = function () {
    setCookie("cookies_recusados", "sim", 365);
    document.getElementById("cookie-banner").style.display = "none";
  };
};
