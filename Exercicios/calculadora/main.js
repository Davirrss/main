$(document).ready(function () {
    let valor = []
    let cravar = 0
    let numerostringantes = ''
    let numerostringdepois = ''


    $('#resultado').click(function () {
        for (let i = 0; i < valor.length; i++) {
            if (valor[i] === "divisao") {
                cravar = i;
                for (let j = cravar - 1; j >= 0; j--) {
                    numerostringantes = valor[j] + numerostringantes;
                }
                for (let k = cravar + 1; k < valor.length; k++) {
                    numerostringdepois += valor[k];
                }
                let resultado = parseFloat(numerostringantes) / parseFloat(numerostringdepois);
                $('.resultado2').text(resultado);
                break;
            }else if (valor[i] === "multipicacao") {
                cravar = i;
                for (let j = cravar - 1; j >= 0; j--) {
                    numerostringantes = valor[j] + numerostringantes;
                }
                for (let k = cravar + 1; k < valor.length; k++) {
                    numerostringdepois += valor[k];
                }
                let resultado = parseFloat(numerostringantes) * parseFloat(numerostringdepois);
                $('.resultado2').text(resultado);
                break;
            }else if (valor[i] === "subtracao") {
                cravar = i;
                for (let j = cravar - 1; j >= 0; j--) {
                    numerostringantes = valor[j] + numerostringantes;
                }
                for (let k = cravar + 1; k < valor.length; k++) {
                    numerostringdepois += valor[k];
                }
                let resultado = parseFloat(numerostringantes) - parseFloat(numerostringdepois);
                $('.resultado2').text(resultado);
                break;
            }else if (valor[i] === "adicao") {
                cravar = i;
                for (let j = cravar - 1; j >= 0; j--) {
                    numerostringantes = valor[j] + numerostringantes;
                }
                for (let k = cravar + 1; k < valor.length; k++) {
                    numerostringdepois += valor[k];
                }
                let resultado = parseFloat(numerostringantes) + parseFloat(numerostringdepois);
                $('.resultado2').text(resultado);
                break;
            }
        }
    });

    $('#clear').click(function () {
        $('.ixibicao').remove();
        $('.resultado2').remove();
        const novoresultado = $('<div class="resultado2"></div>');
        const novaixibicao = $('<div class="ixibicao"></div>');
        $('.vaga').append(novaixibicao, novoresultado);
        valor = [];
        numerostringantes = '';
        numerostringdepois = '';
    })

    $('#divisao').click(function () {
        valor.push("divisao");
        $('.ixibicao').append("/");
    })

    $('#multipicacao').click(function () {
        valor.push("multipicacao");
        $('.ixibicao').append("*");
    })

    $('#subtracao').click(function () {
        valor.push("subtracao");
        $('.ixibicao').append("-");
    })

    $('#adicao').click(function () {
        valor.push("adicao");
        $('.ixibicao').append("+");
    })

    $('#decimal').click(function () {
        valor.push("decimal");
        $('.ixibicao').append(".");
    });

    $('#zero').click(function () {
        valor.push(0);
        $('.ixibicao').append(0);
    });

    $('#um').click(function () {
        valor.push(1);
        $('.ixibicao').append(1);
    });

    $('#dois').click(function () {
        valor.push(2);
        $('.ixibicao').append(2);
    });

    $('#tres').click(function () {
        valor.push(3);
        $('.ixibicao').append(3);
    });

    $('#quatro').click(function () {
        valor.push(4);
        $('.ixibicao').append(4);
    });

    $('#cinco').click(function () {
        valor.push(5);
        $('.ixibicao').append(5);
    });

    $('#seis').click(function () {
        valor.push(6);
        $('.ixibicao').append(6);
    });

    $('#sete').click(function () {
        valor.push(7);
        $('.ixibicao').append(7);
    });

    $('#oito').click(function () {
        valor.push(8);
        $('.ixibicao').append(8);
    });

    $('#nove').click(function () {
        valor.push(9);
        $('.ixibicao').append(9);
    });

})