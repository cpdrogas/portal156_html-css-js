function toggleOutrosText() {
    var radio = document.getElementById('pergunta1_outros');
    var textInput = document.getElementById('pergunta1_outros_text');
    if (radio.checked) {
        textInput.style.display = 'inline-block'; // Mostra o campo de texto
    } else {
        textInput.style.display = 'none'; // Oculta o campo de texto
    }
}

 // Função para exibir/esconder a caixa de texto
 function toggleOutraSubstancia() {
    var checkbox = document.getElementById('outra');
    var textInput = document.getElementById('outra_substancia');
    if (checkbox.checked) {
        textInput.style.display = 'block';
    } else {
        textInput.style.display = 'none';
    }
}