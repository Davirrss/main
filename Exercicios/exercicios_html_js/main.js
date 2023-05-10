function compararNumeros() {
    const valorA = parseFloat(document.getElementById("num1").value);
    const valorB = parseFloat(document.getElementById("num2").value);
    
    if (valorB > valorA) {
        alert("Valor B é maior que Valor A.");
    } else {
        alert("Valor A é maior ou igual a Valor B.");
    }
}

    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
    e.preventDefault();
    compararNumeros();
    });