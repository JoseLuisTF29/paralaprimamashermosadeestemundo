document.getElementById('revealMessage').addEventListener('click', function() {
    const secretMessage = document.getElementById('secretMessage');
    if (secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
        this.textContent = "Cerrar Mensaje Secreto";
    } else {
        secretMessage.classList.add('hidden');
        this.textContent = "Abrir Mensaje Secreto";
    }
});
