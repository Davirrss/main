$(document).ready(function () {
    const badicionar = $("#adicionar");
    badicionar.on('click', function (e) {
        e.preventDefault();
        listatarefa();
    });

    const inputarefa = $('#inputarefa');
    inputarefa.on('keypress', function (event) {
        if (event.which === 13) {
            event.preventDefault();
            listatarefa();
        }

    });
    function listatarefa() {
        const nometarefa = $('#inputarefa').val().trim();
        if (nometarefa === '') {
            const errodiv = $('<div></div>').attr('id', 'erroaviso').text('Campo vazio');
            $('#erroaviso').remove();
            $('#inputarefa').after(errodiv);
        } else {
            $('#erroaviso').remove();
            const tarefalista = $('<li></li>').text(nometarefa);
            $('#tarefalist').append(tarefalista);
            $('#inputarefa').val('');
            const bselecionado = $("<button></button>").attr('class', 'botaoselecionar').text('X');
            tarefalista.append(bselecionado);
            bselecionado.on('click', function () {
                const comparacao = $(this).parent();
                if (comparacao.hasClass('concluido')) {
                    comparacao.removeClass('concluido');
                } else {
                    comparacao.addClass('concluido');
                }
            });
        }
    }
});

// $(this).parent().toggleClass('linhaconcluida');