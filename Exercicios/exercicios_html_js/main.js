function compararNumeros() {
    const valorA = parseFloat(document.getElementById("num1").value);
    const valorB = parseFloat(document.getElementById("num2").value);
    
    if (valorB > valorA) {
        alert("Valor B é maior que Valor A.");
    } else if (valorA > valorB){
        alert("Valor A é maior que Valor B.");
    } else {
        alert("Os dois valores são iguais.")
    }
    return [valorA, valorB];
}

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const [valorA, valorB] = compararNumeros();
    form.reset();
});