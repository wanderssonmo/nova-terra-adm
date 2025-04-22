document.addEventListener("DOMContentLoaded", function () {
    const botaoPortal = document.getElementById("portal-button");
    const botaoPortal2 = document.getElementById("portal-button-2");

    const redirecionar = () => {
        // Substitua pela URL correta do Portal do Cliente
        const url = "https://iis.aws.sistemasivi.com.br:10704/incorporacaosolar/Account/Login";
        window.open(url, "_blank"); // abre em nova aba/janela
    };

    if (botaoPortal) {
        botaoPortal.addEventListener("click", redirecionar);
    }

    if (botaoPortal2) {
        botaoPortal2.addEventListener("click", redirecionar);
    }
});
