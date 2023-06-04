$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');
    let arrayteste = [];
    arrayteste.length = 3;

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $('.infouser').append(nomeperfil);

    $('#voltarb').click(function () {
        voltar();
    })

    $('.funcaorede').click(function () {
        let idiv = $(this).attr('id');

        if (idiv == '1') {
            if (arrayteste[0]) {
                $(this).next('.conteudodentrorede').attr('hidden', 'hidden');
                arrayteste[0] = false;
            } else {
                $(this).next('.conteudodentrorede').removeAttr('hidden');
                arrayteste[0] = true;
                $(this).next('.conteudodentrorede').click(function () {
                    window.location.href = "https://www.instagram.com";
                })
            }
        } else if (idiv == '2') {
            if (arrayteste[1]) {
                $(this).next('.conteudodentrorede').attr('hidden', 'hidden');
                arrayteste[1] = false;
            } else {
                $(this).next('.conteudodentrorede').removeAttr('hidden');
                arrayteste[1] = true;
                $(this).next('.conteudodentrorede').click(function () {
                    window.location.href = "https://www.youtube.com";
                })
            }
        } else if (idiv == '3') {
            if (arrayteste[2]) {
                $(this).next('.conteudodentrorede').attr('hidden', 'hidden');
                arrayteste[2] = false;
            } else {
                $(this).next('.conteudodentrorede').removeAttr('hidden');
                arrayteste[2] = true;
                $(this).next('.conteudodentrorede').click(function () {
                    window.location.href = "https://www.facebook.com";
                })
            }
        } else if (idiv == '4') {
            if (arrayteste[3]) {
                $(this).next('.conteudodentrorede').attr('hidden', 'hidden');
                arrayteste[3] = false;
            } else {
                $(this).next('.conteudodentrorede').removeAttr('hidden');
                arrayteste[3] = true;
                $(this).next('.conteudodentrorede').click(function () {
                    window.location.href = "https://www.gmail.com";
                })
            }
        }
    });

function voltar() {
    window.history.back();
}

});