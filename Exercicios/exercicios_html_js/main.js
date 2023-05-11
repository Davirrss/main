function compararNumeros() {
    const valorA = parseFloat(document.getElementById("num1").value);
    const valorB = parseFloat(document.getElementById("num2").value);

    if (valorB > valorA) {
        resultadoDiv.textContent = "Valor B é maior que Valor A.";
    } else if (valorA > valorB){
        resultadoDiv.textContent = "Valor A é maior que Valor B.";
    } else {
        resultadoDiv.textContent = "Os dois valores são iguais.";
    }

    return [valorA, valorB, resultadoDiv];
}

const form = document.querySelector('form');
const attempts = document.getElementById("tentativas");
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.style.display = "none";
attempts.style.display = "none";

let tenta = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    tenta += 1;
    attempts.style.display = "block";
    attempts.textContent = `Quantidade de vezes que você fez os testes nesses turnos: ${tenta}`;
    const [valorA, valorB, resultadoDiv] = compararNumeros();
    resultadoDiv.style.display = "block";
    form.reset();
});