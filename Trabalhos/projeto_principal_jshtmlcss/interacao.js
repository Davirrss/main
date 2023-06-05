$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $(".userposi").append(nomeperfil);

    $('#bmostrar').click(function () {
        $('.userconfig').slideToggle();
        $(this).toggleClass('ativadomostrar');
    });

    $('.userconfig').click(function () {
        var buttons = $(this).find('button');
        let idiv = $(buttons).attr('id');

        if (idiv == 'bmoeda') {
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
                    const notiuser = $("<div></div>").addClass("certodiv").text("tudo deu certo!");
                    $('#moedainputid').before(notiuser);
                    resetedosvalores();
                    botaofechar(notiuser);
                    msgtemp(notiuser, 10000);
                }
            
            })

            $('#fechar').click(function () {
                $(divbasemoeda).remove();
            })
        }
    })

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