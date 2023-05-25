$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $(".userposi").append(nomeperfil);

    $('#bmostrar').click(function(){
        $('.userconfig').slideToggle();
        var iconeMostrar = $('#iconeMostrar');
        if (iconeMostrar.attr('src') === '/Trabalhos/projeto_principal_jshtmlcss/imagens/app-1646211_1280.png') {
            iconeMostrar.attr('src', '/Trabalhos/projeto_principal_jshtmlcss/imagens/app-1646212_1280.png');
        } else {
            iconeMostrar.attr('src', '/Trabalhos/projeto_principal_jshtmlcss/imagens/app-1646211_1280.png');
        }
    });


});