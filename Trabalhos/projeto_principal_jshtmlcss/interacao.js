$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    var divagaprojetover = false;

    const notificacaoinput = $('<div></div>').addClass('notificacaoinput');

    const notificacaoinput2 = $('<div></div>').addClass('notificacaoinput2')

    let contadorid = 0;

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
                resetedosvalores(1);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (verificacaoletra(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter letras");
                $('#moedainputid').before(notiuser);
                resetedosvalores(1);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (verificacaoespaco(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter espaço");
                $('#moedainputid').before(notiuser);
                resetedosvalores(1);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (caraespecial(moedavalor)) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O valor de deposito não pode conter caracteres especiais");
                $('#moedainputid').before(notiuser);
                resetedosvalores(1);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else {
                resetedosvalores(1);
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
        var divinputnoti = $('<div>').addClass('divinputnoti');
        var divinputnoti2 = $('<div>').addClass('divinputnoti2')

        divinputnoti.append($('<input>').attr({
            name: 'nomeprojeto',
            type: 'text',
            id: 'inputnomeprojeto',
            placeholder: 'Informe aqui'
        }));

        divinputnoti2.append($('<input>').attr({
            name: 'descricaoprojeto',
            type: 'text',
            id: 'inputdescricaoprojeto',
            placeholder: 'Informe aqui'
        }));

        divconteudoprojeto
            .append($('<label>').attr('for', 'nomeprojeto').text('Nome do Projeto'))
            .append(divinputnoti)
            .append($('<label>').attr('for', 'descricaoprojeto').text('Descrição do Projeto'))
            .append(divinputnoti2);

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
                    armazenamentoimg = e.target.result;
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
            };
        });

        divconteudoprojeto.append(divexibicaoimagem, inputfile);
        var grupobotaoprojeto = $('<div>').addClass('grupobotaoprojeto');
        grupobotaoprojeto.append($('<button>').attr('id', 'criarprojeto').text('Enviar'));
        grupobotaoprojeto.append($('<button>').attr('id', 'fecharprojeto').text('Cancelar'));
        divconteudoprojeto.append(grupobotaoprojeto);
        divbaseprojeto.append(divconteudoprojeto);
        $('.caixa_apresentacao').before(divbaseprojeto);

        $('#inputnomeprojeto').keyup(function () {
            var atualinputnome = $(this).val();
            if (atualinputnome.length > 15) {
                notificacaoinput.addClass('superado');
            } else {
                notificacaoinput.removeClass('superado');
            }
            notificacaoinput.text(atualinputnome.length + ' / 15');
            $('#inputnomeprojeto').before(notificacaoinput);
        });

        $('#inputdescricaoprojeto').keyup(function () {
            var atualinputnome = $(this).val();
            if (atualinputnome.length > 100) {
                notificacaoinput2.addClass('superado');
            } else {
                notificacaoinput2.removeClass('superado');
            }
            notificacaoinput2.text(atualinputnome.length + ' / 100');
            $('#inputdescricaoprojeto').before(notificacaoinput2);
        });

        $('#criarprojeto').click(function () {
            nomeprojeto = $('#inputnomeprojeto').val();
            descricaoprojeto = $('#inputdescricaoprojeto').val();

            if (nomeprojeto === '' && descricaoprojeto == '') {
                const notiuser = $("<div></div>").addClass("errodiv").text("Você ainda não informou o nome do projeto e a descrição");
                $("#imginput").before(notiuser);
                resetedosvalores(2);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (nomeprojeto === '') {
                const notiuser = $("<div></div>").addClass("errodiv").text("Você ainda não informou o nome do projeto");
                $("#imginput").before(notiuser);
                resetedosvalores(2);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (descricaoprojeto == '') {
                const notiuser = $("<div></div>").addClass("errodiv").text("Você ainda não informou a descrição do projeto");
                $("#imginput").before(notiuser);
                resetedosvalores(2);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (nomeprojeto.length > 15) {
                const notiuser = $("<div></div>").addClass("errodiv").text("O título do projeto não pode conter mais de 15 carateres");
                $("#imginput").before(notiuser);
                resetedosvalores(2);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else if (descricaoprojeto > 100) {
                const notiuser = $("<div></div>").addClass("errodiv").text("A descrição do projeto não pode conter mais de 100 caracteres");
                $("#imginput").before(notiuser);
                resetedosvalores(2);
                botaofechar(notiuser);
                msgtemp(notiuser, 10000);
            } else {
                if (!divagaprojetover) {
                    var divagadefinitiva = $('<div>').addClass('divagaprojeto');
                    $('.caixainfo').before(divagadefinitiva);
                    divagaprojetover = true;
                }

                var cardprojeto = $('<div>', {
                    class: 'cardprojeto',
                    data: { datanomeprojeto: nomeprojeto, datadescricaoprojeto: descricaoprojeto }
                });
                var cardcabecalho = $('<div>').addClass('cardcabecalho');
                var cardcorpo = $('<div>').addClass('cardcorpo');
                var botaocardiv = $('<div>').addClass('botaocardiv');
                var botaocard = $('<button>').addClass('botaocard').text('Mais Informações');
                botaocardiv.append(botaocard);
                cardcabecalho.append('<p>').text(nomeprojeto);
                cardcorpo.append('<p>').text(descricaoprojeto);
                cardcorpo.append(botaocardiv);
                cardprojeto.append(cardcabecalho, cardcorpo);
                cardprojeto.css("background-image", "url('" + armazenamentoimg + "')");
                if (contadorid == 0) {
                    contadorid += 1
                } else if (contadorid == 1) {
                    contadorid += 1
                } else if (contadorid == 2) {
                    contadorid += 1
                } else if (contadorid == 3) {
                    contadorid = 0
                }
                cardprojeto.attr('id', 'numero' + contadorid)
                $('.divagaprojeto').append(cardprojeto);
                $(divbaseprojeto).remove();
                $('.botaocard').click(function () {
                    var datampliada = $(this).closest('.cardprojeto').data();
                    var baseampliadaprojeto = $('<div>').addClass('baseampliadaprojeto');
                    var ampliadacabecalho = $('<div>').addClass('ampliadacabecalho');
                    var ampliadacorpo = $('<div>').addClass('ampliadacorpo');
                    ampliadacabecalho.append('<p>').text(datampliada.datanomeprojeto);
                    ampliadacorpo.append('<p>').text(datampliada.datadescricaoprojeto);
                    baseampliadaprojeto.append(ampliadacabecalho, ampliadacorpo);
                    $('.caixa_apresentacao').before(baseampliadaprojeto);
                })
            }

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

    function resetedosvalores(selecionadovalor) {

        if (selecionadovalor == 1) {
            $('#moedainputid').val('');
        } else if (selecionadovalor == 2) {
            $('#inputdescricaoprojeto').val('');
            $('#inputnomeprojeto').val('');
            notificacaoinput2.text('0 / 100');
            notificacaoinput.text('0 / 15');
            notificacaoinput.removeClass('superado')
            notificacaoinput2.removeClass('superado')
        }
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