document.addEventListener("DOMContentLoaded", function () {
    const botaoPortal = document.getElementById("portal-button");
    const botaoPortal2 = document.getElementById("portal-button-2");

    // Função para redirecionar com aviso
    const redirecionar = () => {
        Swal.fire({
          title: 'Redirecionamento',
          text: 'Você será redirecionado com segurança para o Portal do Cliente em uma nova aba. Deseja continuar?',
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

    // Adiciona o evento ao botão se ele existir
    if (botaoPortal) {
        botaoPortal.addEventListener("click", redirecionar);
    }
});
