//incialização de todas as variáveis

const mostrarnota = document.getElementById("show");
mostrarnota.style.display = "none";
const armazenamentonota = [];
const form = document.querySelector('form');
const mostrarb = document.getElementById('mostrar');
const mostrardiv = document.getElementById('mostrardiv');
mostrardiv.style.display = "none";
const ocultar = document.getElementById('ocultar');
ocultar.style.display = "none";
const media = document.getElementById('media');
media.style.display = "none";
const mediashow = document.getElementById('mediashow');
mediashow.style.display = "none";
let soma = 0, cont = 0

//aqui vai acontecer a mágica
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let nota = parseFloat(document.getElementById("numero").value);
    soma += nota
    armazenamentonota.push(nota);
    mostrarnota.style.display = "block";
    mostrarnota.textContent = `Sua nota digitada foi: ${nota}`;
    form.reset()
    media.style.display = "block";
});

mostrarb.addEventListener('click', function(){
    ocultar.style.display = "block";
    mostrarb.style.display = "none";
    mostrardiv.style.display = "block";
    mostrardiv.innerHTML = ''; 
    for(let i = 0; i < armazenamentonota.length; i++) {
        mostrardiv.innerHTML += `Nota ${i+1}: ${armazenamentonota[i]}<br>`;
    }
});

ocultar.addEventListener('click', function(){
    ocultar.style.display = "none";
    mostrardiv.style.display = "none";
    mostrarb.style.display = "block";
})

media.addEventListener('click', function(){
    for(let i = 0; i < armazenamentonota.length; i++) {
        cont += i;
    }
    parseInt(cont+1);
    media.style.display = "none"
    mediashow.style.display = "block";
    mediashow.textContent = `As médias de todas as notas foi: ${soma / cont}.`;
})