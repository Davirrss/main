$(document).ready(function() {
    var intervalo = 3000; 
    var animacaoVelocidade = 1000;

    var $imagens = $('#imagens img');
    var quantidadeImagens = $imagens.length;
    var indiceAtual = 0;

    $imagens.hide().eq(indiceAtual).show();
    function exibirProximaImagem() {
        $imagens.eq(indiceAtual).fadeOut(animacaoVelocidade);
        indiceAtual = (indiceAtual + 1) % quantidadeImagens;
        $imagens.eq(indiceAtual).fadeIn(animacaoVelocidade);
    }

    setInterval(exibirProximaImagem, intervalo);
});
