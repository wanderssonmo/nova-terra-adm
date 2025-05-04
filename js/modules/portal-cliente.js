document.addEventListener("DOMContentLoaded", function () {
    const botaoPortal = document.getElementById("portal-button-1");
    const botaoPortal2 = document.getElementById("portal-button-2");
  
    const redirecionarComAviso = () => {
      const url = "https://iis.aws.sistemasivi.com.br:10704/incorporacaosolar/Account/Login";
  
      Swal.fire({
        title: 'Redirecionamento',
        text: 'Você será direcionado com segurança para o Portal do Cliente em uma nova aba.',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        customClass: {
          popup: 'swal2-custom-popup',
          title: 'swal2-custom-title',
          htmlContainer: 'swal2-custom-text',
          confirmButton: 'swal2-custom-confirm',
          cancelButton: 'swal2-custom-cancel'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(url, "_blank");
        }
      });
    };
  
    if (botaoPortal) {
      botaoPortal.addEventListener("click", redirecionarComAviso);
    }
  
    if (botaoPortal2) {
      botaoPortal2.addEventListener("click", redirecionarComAviso);
    }
  });
  