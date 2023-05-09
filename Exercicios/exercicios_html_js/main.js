const form = document.getElementById('num1');

const form = document.getElementById('num2');

form.addEventListener('submit', function(e){
    if (num2 > num1){
        alert('Sucesso!')
    }else {
        alert('Falhou!')
    }
})