$(document).ready(function () {

    $("#consultar").click(function () {
        var altura = $("#altura").val();
        var peso = $("#peso").val();

        if (peso === '') {
            const notiuser = $("<div></div>").addClass("erro").text("Você ainda não informou seu peso.");
            $("form").append(notiuser);
            resetedosvalores();
            msgtemp(notiuser, 3000);
        } else if (altura === '') {
            const notiuser = $("<div></div>").addClass("erro").text("Você ainda não informou sua altura.");
            $("form").append(notiuser);
            resetedosvalores();
            msgtemp(notiuser, 3000);
        } else if (isNaN(peso)) {
            const notiuser = $("<div></div>").addClass("erro").text("Você colocou letras no campo de peso.");
            $("form").append(notiuser);
            resetedosvalores();
            msgtemp(notiuser, 3000);
        } else if (isNaN(altura)) {
            const notiuser = $("<div></div>").addClass("erro").text("Você colocou letras no campo de altura.");
            $("form").append(notiuser);
            resetedosvalores();
            msgtemp(notiuser, 3000);
        } else {
            parseFloat(altura)
            var resultado = (peso / (altura * altura));
            resultado = resultado.toFixed(2);
            var resultadodiv = $('<div></div>').addClass('resultado');
            $(resultadodiv).append(resultado).addClass('dentroresultado');
            $('.col').append(resultadodiv);
            resetedosvalores();
            if (resultado < 17) {
                $('#1').addClass('marcado')
            } else if (resultado >= 17 && resultado <= 18.49) {
                $('#2').addClass('marcado')
            } else if (resultado >= 18.5 && resultado <= 24.99) {
                $('#3').addClass('marcado')
            } else if (resultado >= 25 && resultado <= 29.99) {
                $('#4').addClass('marcado')
            } else if (resultado >= 30 && resultado <= 34.99) {
                $('#5').addClass('marcado')
            } else if (resultado >= 35 && resultado <= 39.99) {
                $('#6').addClass('marcado')
            } else if (resultado > 40) {
                $('#7').addClass('marcado')
            }
        }
    })

    function resetedosvalores() {
        $("#altura").val("");
        $("#peso").val("");
    }

    function msgtemp(conteudo, tempo) {
        setTimeout(() => {
            conteudo.remove();
        }, tempo);
    }

})