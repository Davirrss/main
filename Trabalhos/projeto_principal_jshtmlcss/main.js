let nameuser = '', passworduser = '';
const bentrar = document.getElementById("botaoentrar");

bentrar.addEventListener('click', function() {
    nameuser = document.getElementById("nome").value;
    passworduser = document.getElementById("senha").value;
    if (nameuser == '' && passworduser == '') {
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "Você ainda não informou o nome e senha"
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    } else if (nameuser == '') {
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "Nome de usuário não informado";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    }else if (passworduser == '') {
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "Senha não informada";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    }else if(verificacaoespaco(nameuser)){
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "O nome de usuário não pode conter espaços";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    }else if (nameuser.length <= 4) {
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "Seu nome de usuário não pode conter menos de 4 digitos.";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    }else if (caraespecial(nameuser)) {
        const notiuser = document.createElement("div");
        notiuser.classList = ("errodiv");
        notiuser.textContent = "O nome de usuário não pode conter números ou caracteres especiais";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 3000);
    }else {
        const notiuser = document.createElement("div");
        notiuser.classList = ("certodiv");
        notiuser.textContent = "sucesso";
        document.body.appendChild(notiuser);
        resetedosvalores();
        msgtemp(notiuser, 4000);
        const blink = document.createElement("button");
        blink.textContent = "botão";
        blink.id = "botaoredi";
        document.body.appendChild(blink);
        blink.addEventListener('click', function() {
            window.location.href = "www.google.com";
        })
    }
})

function resetedosvalores() {
    document.getElementById("nome").value = "";
    document.getElementById("senha").value = "";
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