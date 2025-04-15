const form = document.querySelector('.form-contato');
  const mensagem = document.getElementById('mensagem-enviada');

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset();
      mensagem.style.display = 'block';
    }
});