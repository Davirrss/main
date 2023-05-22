$(document).ready(function() {
    var intervalo = 3000; // Intervalo de tempo entre as imagens em milissegundos
    var animacaoVelocidade = 1000; // Velocidade da animação em milissegundos

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
