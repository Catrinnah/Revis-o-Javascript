function Inserir(){

    let nomeAluno= document.getElementById("nomeAluno").value;
    let notaAluno= document.getElementById("notaAluno").value;
    let tr = document.createElement("tr");

    tr.innerHTML = "<td>" + nomeAluno + "</td><td>" + notaAluno + "</td>";

    tabela.appendChild(tr);

    }