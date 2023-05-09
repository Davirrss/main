const form = document.getElementById('form');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (parseFloat(num2.value) > parseFloat(num1.value)) {
        alert("Sucesso!");
    } else {
        alert("Falhou!");
    }
});
