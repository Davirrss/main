$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $(".topo").append(nomeperfil);

    const badicionar = $("#badicionar");
    badicionar.on('click', function () {
        const caixa = $("<div></div>").addClass("projetouser");;
        const inputnome = $("<input>").addClass("inputnome");
        $(caixa).append(inputnome);
        $(".container").append(caixa);
    });
});