$(document).ready(function () {
    $('input[name="cpf"]').mask('000.000.000-00', { reverse: true });
    $('input[name="cep"]').mask('00000-000');
    $('input[name="telefone"]').mask('(00) 0000-0000');
});