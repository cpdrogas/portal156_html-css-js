function toggleOutrosText() {
    var radios = document.getElementsByName('pergunta1');
    var textInput = document.getElementById('pergunta1_outros_text');
    var isOutrosSelected = document.getElementById('pergunta1_outros').checked;
    
    if (isOutrosSelected) {
        textInput.style.display = 'inline-block';
    } else {
        textInput.style.display = 'none';
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

// Adicionar evento de escuta para todos os botões de rádio na pergunta 1
var radios = document.getElementsByName('pergunta1');
radios.forEach(function(radio) {
    radio.addEventListener('click', toggleOutrosText);
});

// Função para exibir/esconder a caixa de texto "Outros" na questão 11
function toggleOutraFonte() {
    var checkbox = document.getElementById('outros');
    var textInput = document.getElementById('outros_especificar');
    if (checkbox.checked) {
        textInput.style.display = 'block';
    } else {
        textInput.style.display = 'none';
    }
}

// Adicionar evento de escuta para todos os checkboxes na questão 11
var checkboxes = document.getElementsByName('source');
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Se algum checkbox diferente de "Outros" for selecionado, esconda o campo de texto "Outros"
        if (checkbox.id !== 'outros') {
            document.getElementById('outros_especificar').style.display = 'none';
            document.getElementById('outros').checked = false;
        }
        // Verifica novamente o estado do checkbox "Outros"
        toggleOutraFonte();
    });
});