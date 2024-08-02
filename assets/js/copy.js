function copyToClipboard() {
    const emailLabel = document.querySelector('label[for="email"]');
    const emailText = emailLabel.innerText;

    // Cria um elemento de texto temporário para copiar o conteúdo
    const tempInput = document.createElement('input');
    tempInput.value = emailText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Exibe uma mensagem de sucesso (opcional)
    alert('E-mail copiado para a área de transferência!');
}