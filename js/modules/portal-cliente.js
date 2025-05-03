document.addEventListener("DOMContentLoaded", function () {
    const botaoPortal1 = document.getElementById("portal-button-1");
    const botaoPortal2 = document.getElementById("portal-button-2");

    const redirecionar = () => {
        Swal.fire({
            title: 'Redirecionamento',
            text: 'Você será redirecionado para o Portal do Cliente em uma nova aba. Deseja continuar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, acessar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = "https://iis.aws.sistemasivi.com.br:10704/incorporacaosolar/Account/Login";
                window.open(url, "_blank");
            }
        });
    };

    if (botaoPortal1) {
        botaoPortal1.addEventListener("click", redirecionar);
    }

    if (botaoPortal2) {
        botaoPortal2.addEventListener("click", redirecionar);
    }
});
