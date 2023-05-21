$(document).ready(function() {
    // Configurações do carrossel
    var intervalo = 3000; // Intervalo de tempo entre as imagens em milissegundos
    var animacaoVelocidade = 1000; // Velocidade da animação em milissegundos

    // Seleciona as imagens do carrossel
    var $imagens = $('#imagens img');
    var quantidadeImagens = $imagens.length;
    var indiceAtual = 0;

    // Oculta todas as imagens, exceto a primeira
    $imagens.hide().eq(indiceAtual).show();

    // Função para exibir a próxima imagem
    function exibirProximaImagem() {
        $imagens.eq(indiceAtual).fadeOut(animacaoVelocidade);
        indiceAtual = (indiceAtual + 1) % quantidadeImagens;
        $imagens.eq(indiceAtual).fadeIn(animacaoVelocidade);
    }

    // Inicia o carrossel
    setInterval(exibirProximaImagem, intervalo);
});
