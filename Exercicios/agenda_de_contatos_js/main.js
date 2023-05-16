let nome = '', infovar = '';
let num = null;
let infoarray = [];
const botaoenviar = document.getElementById("add");
const tabel = document.getElementById("tabela");
tabel.style.display = "none"
const errovalidacao = document.getElementById("errovalidacao");
errovalidacao.style.display = "none";   

botaoenviar.addEventListener('click', function(e) {
    e.preventDefault();
    nome = document.getElementById("nome").value;
    if (nome == ''){
        errovalidacao.style.display = "block";
        errovalidacao.textContent = "Preencha o nome do contato.";
        resetedosvalores();
    } else if (!parseInt(document.getElementById("numero").value)){
        errovalidacao.style.display = "block";
        errovalidacao.textContent = "Preencha o telefone do contato.";
        resetedosvalores();
    } else if(isNaN(num)){
        errovalidacao.style.display = "block";
        errovalidacao.textContent = "Informe apenas números de telefone.";
        resetedosvalores();
    } else{
        num = parseInt(document.getElementById("numero").value);
        errovalidacao.style.display = "none";
        infovar = nome + " " + num;
        infoarray.push(infovar);
        tabel.innerHTML = ''; 
        for (let i = 0; i < infoarray.length; i++) {
            const linhainfo = document.createElement("tr");
            const retanome = document.createElement("td");
            const retanum = document.createElement("td");
            const [nome, numero] = infoarray[i].split(" ");
            retanome.classList.add("nome-contato");
            retanome.textContent = `Contato ${i + 1} - ${nome}`;
            retanum.classList.add("numero-contato");
            retanum.textContent = `${numero}`;
            linhainfo.appendChild(retanome);
            linhainfo.appendChild(retanum);
            tabel.style.display = "block";
            tabel.appendChild(linhainfo);
        }
        resetedosvalores();
    }
});

function resetedosvalores() {
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
}

