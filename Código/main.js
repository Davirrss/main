function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split('');
    return nomeComArray.length >= 2;
}

let formValido = false;

const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){

    e.preventDefault();
    
    const nomeBeneficiario = document.getElementById('username');
    const numeroTelefone = document.getElementById('phone');
    const numeroSenha = document.getElementById('password');
    const mensagemSucesso = 'Só alegrias' 
    // 'sua senha é: $(numeroSenha.value) foi depositado para o client $(nomeBeneficiario.value)'
    formValido = validaNome(nomeBeneficiario.value);

    if(formValido){
        alert(mensagemSucesso)
        nomeBeneficiario.value = ''
        numeroTelefone.value = ''
        numeroSenha.value = ''
    }else{
        alert('Falhou')
    }
})

