//incialização de todas as variáveis

const mostrarnota = document.getElementById("show");

mostrarnota.style.display = "none";

const armazenamentonota = [], armazenamento2 = [];

const form = document.getElementById('form');
const formb = document.getElementById('enviarnotas')
formb.style.display = "block"

const mostrarb = document.getElementById('mostrar');
const mostrardiv = document.getElementById('mostrardiv');
mostrardiv.style.display = "none"; 

const ocultar = document.getElementById('ocultar');
ocultar.style.display = "none";

const media = document.getElementById('media');
media.style.display = "none";

const mediashow = document.getElementById('mediashow');
mediashow.style.display = "none";

const aprovacao = document.getElementById('aprovacao');
aprovacao.style.display = "none";

const numeroinput = document.getElementById('numero');
numeroinput.style.display = "block";

const numerolabel = document.getElementById('numerolabel');
numerolabel.style.display = "block";

const recomecar = document.getElementById('recomecar');
recomecar.style.display = "none";

let soma = 0, cont = 0, nota = 0;
let resultadostring = '';

//aqui vai acontecer a mágica
form.addEventListener('submit', function(e) {
    e.preventDefault();
    nota = parseFloat(document.getElementById("numero").value);
    soma += nota;
    if (nota === null || isNaN(nota)) {
        mostrarnota.style.display = "block";
        mostrarnota.textContent = "Nota não informada";
    } else {
        armazenamentonota.push(nota);
        mostrarnota.style.display = "block";
        mostrarnota.textContent = `Sua nota digitada foi: ${nota}`;
        form.reset();
        media.style.display = "block";
    }
});

mostrarb.addEventListener('click', function(e){
    e.preventDefault();
    ocultar.style.display = "block";
    mostrarb.style.display = "none";
    mostrardiv.style.display = "block";
    mostrardiv.innerHTML = '';
    for(let i = 0; i < armazenamentonota.length; i++) {
        armazenamento2[i] = `Nota ${i+1}: ${armazenamentonota[i]}`;
        mostrardiv.textContent += armazenamento2[i] + "\n";
    }
});

ocultar.addEventListener('click', function(e){
    e.preventDefault();
    ocultar.style.display = "none";
    mostrardiv.style.display = "none";
    mostrarb.style.display = "block";
})

media.addEventListener('click', function(e){
    e.preventDefault();
    for(let i = 0; i < armazenamentonota.length; i++) {
        cont += i;
    }
    if(cont == 0){
        mediashow.style.display = "block"
        mediashow.textContent = "Informe dois ou mais valores para receber as médias."
    } else{
        mostrardiv.style.display = "none";
        ocultar.style.display = "none";
        mostrarb.style.display = "none";
        mostrarnota.style.display = "none";
        formb.style.display = "none";
        numerolabel.style.display = "none";
        numeroinput.style.display = "none";
        parseInt(cont+1);
        media.style.display = "none";
        mediashow.style.display = "block";
        mediashow.textContent = `A média de todas as notas foi: ${(soma / cont).toFixed(1)}.`;
        if((soma / cont) < 6){
            aprovacao.style.display = "block";
            aprovacao.textContent = "Reprovado";
        } else if((soma / cont) > 5 && (soma / cont <= 7)){
            aprovacao.style.display = "block";
            aprovacao.textContent = "Aprovado";
        } else {
            aprovacao.style.display = "block";
            aprovacao.textContent = "Aprovado com excelências";
        }
        recomecar.style.display = "block";
    }
})

recomecar.addEventListener('click', function() {
    armazenamento2.length = 0;
    armazenamentonota.length = 0;
    soma = 0;
    cont = 0;
    nota = 0;
    
    mostrarnota.style.display = "none";
    mostrarnota.textContent = "";
    form.reset();
    mostrardiv.style.display = "none";
    mostrardiv.innerHTML = "";
    ocultar.style.display = "none";
    mostrarb.style.display = "block";
    media.style.display = "none";
    mediashow.style.display = "none";
    aprovacao.style.display = "none";
    formb.style.display = "block";
    numerolabel.style.display = "block";
    numeroinput.style.display = "block";
    recomecar.style.display = "none";
});