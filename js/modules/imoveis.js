document.addEventListener("DOMContentLoaded", function () {
  const botoesVerMapa = document.querySelectorAll('.btn--secondary');

  botoesVerMapa.forEach((botao) => {
    botao.addEventListener("click", function (event) {
      event.preventDefault();

      const link = botao.closest(".mapa-link").dataset.url;

      if (link && link !== "") {
        Swal.fire({
          title: 'Redirecionamento',
          text: 'Abrir de forma segura o mapa do imóvel em nova aba?',
          icon: 'info',
          showCancelButton: true,
          confirmButtonText: 'Sim',
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
            window.open(link, "_blank");
          }
        });
      }
    });
  });
});

  
  