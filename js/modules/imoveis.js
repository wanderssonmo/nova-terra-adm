document.addEventListener("DOMContentLoaded", function () {
    const botoesVerMapa = document.querySelectorAll('.btn--secondary');
  
    botoesVerMapa.forEach((botao) => {
      botao.addEventListener("click", function (event) {
        event.preventDefault(); // Impede qualquer comportamento padrão
  
        const link = botao.closest(".mapa-link").dataset.url;
  
        if (link && link !== "") {
          Swal.fire({
            title: 'Você será redirecionado',
            text: 'Deseja visualizar o mapa deste imóvel em uma nova aba?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Sim, abrir mapa',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33'
          }).then((result) => {
            if (result.isConfirmed) {
              window.open(link, "_blank");
            }
          });
        }
      });
    });
  });
  
  