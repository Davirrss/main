$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    var divagaprojetover = false;

    var armazenamentoimg;

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $(".userposi").append(nomeperfil);

    $('#bmostrar').click(function () {
        $('.userconfig').slideToggle();
        $(this).toggleClass('ativadomostrar');
    });

    $('#bmoeda').click(function () {
        var divbasemoeda = $('<div>').addClass('divbasemoeda');
        var divconteudomoeda = $('<div>').addClass('divconteudomoeda');
        divconteudomoeda.append('<label for="moedainput">Informe o valor que deseja depositar</label>', '<input name="moedainput" id="moedainputid" placeholder="informe aqui">', '<button id="depositar">Depositar</button>', '<button id="fechar">Fechar</button>');
        $(divbasemoeda).append(divconteudomoeda);
        $('.caixa_apresentacao').before(divbasemoeda);
        $('#depositar').click(function () {
            moedavalor = $('#moedainputid').val();
            if (moedavalor === '') {
                const notiuser = $("<div></div>").addClass("errodiv").text("Você ainda não informou o valor que deseja depositar");
                $('#moedainputid').before(notiuser);
                resetedosvalores();
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (verificacaoletra(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter letras");
                $('#moedainputid').before(notiuser);
                resetedosvalores();
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (verificacaoespaco(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter espaço");
                $('#moedainputid').before(notiuser);
                resetedosvalores();
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (caraespecial(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter caracteres especiais");
                $('#moedainputid').before(notiuser);
                resetedosvalores();
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else {
                resetedosvalores();
                $(divbasemoeda).remove();
            }
        })

        $('#fechar').click(function () {
            $(divbasemoeda).remove();
        });

    });

    $('#bprojeto').click(function () {
        var divbaseprojeto = $('<div>').addClass('divbaseprojeto');
        var divconteudoprojeto = $('<div>').addClass('divconteudoprojeto');

        divconteudoprojeto
            .append($('<label>').attr('for', 'nomeprojeto').text('Nome do Projeto'))
            .append($('<input>').attr({
                name: 'nomeprojeto',
                type: 'text',
                id: 'inputnomeprojeto',
                placeholder: 'Informe aqui'
            }))
            .append($('<label>').attr('for', 'descricaoprojeto').text('Descrição do Projeto'))
            .append($('<input>').attr({
                name: 'descricaoprojeto',
                type: 'text',
                id: 'inputdescricaoprojeto',
                placeholder: 'Informe aqui'
            }));

        var divexibicaoimagem = $('<div>').addClass('exibicaoimagem');
        var inputfile = $('<input>').attr({
            type: 'file',
            id: 'imginput',
            accept: '.png'
        });

        inputfile.change(function (event) {
            var file = event.target.files[0];

            if (file && file.type === 'image/png') {
                var reader = new FileReader();

                reader.onload = function (e) {
                    var imagePreview = $('<img>').attr('src', e.target.result);
                    armazenamentoimg = imagePreview;
                    divexibicaoimagem.empty().append(imagePreview);
                };

                reader.readAsDataURL(file);
                divexibicaoimagem.addClass('ativado');
            } else {
                const notiuser = $("<div></div>").addClass("errodiv").text("O arquivo selecionado não é do tipo PNG");
                $('#imginput').before(notiuser);
                resetedosvalores();
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            }
        });

        divconteudoprojeto.append(divexibicaoimagem, inputfile);
        var grupobotaoprojeto = $('<div>').addClass('grupobotaoprojeto');
        grupobotaoprojeto.append($('<button>').attr('id', 'criarprojeto').text('Enviar'));
        grupobotaoprojeto.append($('<button>').attr('id', 'fecharprojeto').text('Cancelar'));
        divconteudoprojeto.append(grupobotaoprojeto);
        divbaseprojeto.append(divconteudoprojeto);
        $('.caixa_apresentacao').before(divbaseprojeto);

        $('#criarprojeto').click(function () {
            nomeprojeto = $('#inputnomeprojeto').val();
            descricaoprojeto = $('#inputdescricaoprojeto').val();

            if (!divagaprojetover) {
                var divagadefinitiva = $('<div>').addClass('div-container');
                $('.caixa_apresentacao').before(divagadefinitiva);
                divagaprojetover = true;
            }

            var cardprojeto = $('<div>').addClass('cardprojeto');
            var cardcabecalho = $('<div>').addClass('cardcabecalho');
            var cardcorpo = $('<div>').addClass('cardcorpo');
            cardcabecalho.append('<p>').text(nomeprojeto);
            cardcorpo.append('<p>').text(descricaoprojeto); 
        })

        $('#fecharprojeto').click(function () {
            $(divbaseprojeto).remove();
        });
    });

    $('.ophistoriabotao button').click(function () {
        var btarget = $(this).data('target');
        var reptarget = $('.' + btarget);

        if (reptarget.is(':visible')) {
            reptarget.addClass('text-blur-out');
            setTimeout(function () {
                reptarget.hide();
            }, 1500)
        } else {
            $('.opativado > div').hide();
            reptarget.removeClass('text-blur-out');
            reptarget.show().addClass('text-focus-in');
        }
    });

    function botaofechar(notificacao) {
        const bnotiuser = $("<button></button>").addClass("bfecharnoti").text("X");
        notificacao.append(bnotiuser);
        bnotiuser.on('click', function () {
            notificacao.addClass('temporemocao');
            notificacao.on('transitionend', function () {
                notificacao.remove();
            })
        })
    }

    function msgtemp(conteudo, tempo) {
        setTimeout(() => {
            conteudo.remove();
        }, tempo);
    }

    function resetedosvalores() {
        $("#moedainputid").val("");
    }

    function verificacaoespaco(stringnome) {
        const nomefuncao = stringnome.split('');
        for (let i = 0; i < nomefuncao.length; i++) {
            if (nomefuncao[i] === ' ') {
                return true;
            }
        }
        return false;
    }

    function caraespecial(usuario) {
        return /[^\w\s]/.test(usuario);
    }

    function verificacaoletra(letra) {
        for (let i = 0; i < letra.length; i++) {
            let char = letra[i];
            if (/[a-zA-Z]/.test(char)) {
                return true;
            }
        }
        return false;
    }

});