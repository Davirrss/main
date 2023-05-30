$(document).ready(function () {
    var params = new URLSearchParams(window.location.search);
    var username = params.get('usuario');

    const nomeperfil = $("<div></div>").addClass("nomediv").text(username);
    $(".userposi").append(nomeperfil);

    $('#bmostrar').click(function () {
        $('.userconfig').slideToggle();
        $(this).toggleClass('ativadomostrar');
    });

    $('.ophistoriabotao button').click(function () {
        var btarget = $(this).data('target');
        var reptarget = $('.' + btarget);

        if (reptarget.is(':visible')) {
            reptarget.addClass('text-blur-out');
            setTimeout(function(){
                reptarget.hide();
            }, 1500)
        } else {
            $('.opativado > div').hide();
            reptarget.removeClass('text-blur-out');
            reptarget.show().addClass('text-focus-in');
        }
    });

});