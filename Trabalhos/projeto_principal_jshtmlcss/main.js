$(document).ready(function () {
    const bvisivel = $("#visivel");

    bvisivel.on('click', function () {
        const inputsenha = $("#senha");
        inputsenha.toggleClass('ativado');
    })

    let nameuser = '', passworduser = '';
    const bentrar = $("#botaoentrar");

    bentrar.on('click', function () {
        nameuser = $("#nome").val();
        passworduser = $("#senha").val();

        if (nameuser === '' && passworduser === '') {
            const notiuser = $("<div></div>").addClass("errodiv").text("Você ainda não informou o nome e senha");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (nameuser === '') {
            const notiuser = $("<div></div>").addClass("errodiv").text("Nome de usuário não informado");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (passworduser === '') {
            const notiuser = $("<div></div>").addClass("errodiv").text("Senha não informada");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (verificacaoespaco(nameuser)) {
            const notiuser = $("<div></div>").addClass("errodiv").text("O nome de usuário não pode conter espaços");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (nameuser.length > 10) {
            const notiuser = $("<div></div>").addClass("errodiv").text("Seu nome de usuário não pode conter mais de 10 caracteres.");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (passworduser.length <= 4) {
            const notiuser = $("<div></div>").addClass("errodiv").text("Sua senha não pode conter menos de 4 digitos.");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (nameuser.length <= 3) {
            const notiuser = $("<div></div>").addClass("errodiv").text("Seu nome de usuário não pode conter menos de 4 digitos.");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else if (caraespecial(nameuser)) {
            const notiuser = $("<div></div>").addClass("errodiv").text("Seu nome de usuário não pode conter números ou caracteres especiais");
            $(".logindireita").append(notiuser);
            resetedosvalores();
            botaofechar(notiuser);
            msgtemp(notiuser, 10000);
        } else { 
            window.location.href = "interacao.html?usuario=" + nameuser;
            resetedosvalores();
        }
    });

    function resetedosvalores() {
        $("#nome").val("");
        $("#senha").val("");
    }

    function caraespecial(usuario) {
        return /[^\w\s]/.test(usuario);
    }

    function msgtemp(conteudo, tempo) {
        setTimeout(() => {
            conteudo.remove();
        }, tempo);
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

    function botaofechar(notificacao) {
        const bnotiuser = $("<button></button>").addClass("bfecharnoti").text("X");
        notificacao.append(bnotiuser);
        bnotiuser.on('click', function () {
            notificacao.addClass('temporemocao');
            notificacao.on('transitionend', function() {
                notificacao.remove();
            })
        })
    }
})