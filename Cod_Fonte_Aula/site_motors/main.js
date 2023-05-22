$(document).ready(function () {
    $('#carrossel_imagens').slick({
        autoplay: true
    })

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })
})