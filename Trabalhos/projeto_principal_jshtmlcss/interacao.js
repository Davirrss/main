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
            divconteudomoeda.append('<label for="moedainput">Informe o valor que seja depositar</label>', '<input name="moedainput" id="moedainputid">', '<button id="depositar">Deposita</button>', '<button id="cancelar">Cancelar</button>');
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
                }
            })

            $('#cancelar').click(function () {
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

});