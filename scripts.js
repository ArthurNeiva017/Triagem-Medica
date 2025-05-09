document.addEventListener("DOMContentLoaded", function () {
    const btnCadastrar = document.querySelector(".btn-cadastrar");
    const listaConsultas = document.querySelector(".consultas-lista");

    btnCadastrar.addEventListener("click", function () {
        const cpf = document.getElementById("cpf").value;
        const nome = document.getElementById("nome-paciente").value;
        const idade = document.getElementById("idade").value;
        const peso = document.getElementById("peso").value;
        const sintomas = document.getElementById("sintomas").value;

        if (!cpf || !nome || !idade || !sintomas) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const urgencia = classificarUrgencia(sintomas);

        const novaConsulta = document.createElement("ul");
        novaConsulta.innerHTML = `
          <li class="fita ${urgencia}">Urgência: ${urgencia.charAt(0).toUpperCase() + urgencia.slice(1)}</li>
          <li><strong>Consulta</strong></li>
          <li>CPF: ${cpf}</li>
          <li>Nome: ${nome}</li>
          <li>Idade: ${idade}</li>
          <li>Peso: ${peso}</li>
          <li>Sintomas: ${sintomas}</li>
      `;

        listaConsultas.appendChild(novaConsulta);

        if (urgencia === "urgente") {
            const divUrgencias = document.querySelector(".urgencias");
            const cloneUrgente = novaConsulta.cloneNode(true);
            divUrgencias.appendChild(cloneUrgente);
        }

        document.getElementById("cpf").value = "";
        document.getElementById("nome-paciente").value = "";
        document.getElementById("idade").value = "";
        document.getElementById("peso").value = "";
        document.getElementById("sintomas").value = "";
    });
});

function classificarUrgencia(sintomas) {
    const texto = sintomas.toLowerCase();

    const palavrasUrgente = [
        "desmaio", "dor no peito", "hemorragia", "inconsciente", "parada cardíaca",
        "convulsão", "choque", "respiração ausente", "traumatismo craniano", "queimadura grave"
    ];

    const palavrasGrave = [
        "falta de ar", "febre alta", "infecção grave", "vômito com sangue", "dor abdominal intensa",
        "sangramento", "pressão alta", "edema", "diarreia com sangue", "alergia grave",
        "taquicardia", "dor nas costas intensa", "visão turva"
    ];

    const palavrasMedio = [
        "dor de cabeça", "tosse", "náusea", "cansaço", "dores no corpo", "febre moderada",
        "garganta inflamada", "dor de ouvido", "tontura leve", "infecção urinária", "enxaqueca",
        "arritmia leve", "asma leve", "diarreia moderada"
    ];

    const palavrasLeve = [
        "espirro", "coriza", "coceira", "tosse leve", "cólica", "manchas na pele",
        "dor muscular leve", "mal-estar", "vermelhidão", "olhos irritados", "fadiga leve"
    ];

    if (palavrasUrgente.some(p => texto.includes(p))) {
        return "urgente";
    } else if (palavrasGrave.some(p => texto.includes(p))) {
        return "grave";
    } else if (palavrasMedio.some(p => texto.includes(p))) {
        return "médio";
    } else {
        return "leve";
    }
}

const campoAcesso = document.getElementById("busca-acesso");

campoAcesso.addEventListener("input", function () {
    const termoBusca = campoAcesso.value.toLowerCase();
    const consultas = document.querySelectorAll(".consultas-lista ul");

    consultas.forEach(consulta => {
        const texto = consulta.textContent.toLowerCase();
        if (texto.includes(termoBusca)) {
            consulta.style.display = "block";
        } else {
            consulta.style.display = "none";
        }
    });
});

const divUrgencias = document.querySelector(".urgencias");

if (urgencia === "urgente") {
    const cloneUrgente = novaConsulta.cloneNode(true);
    divUrgencias.appendChild(cloneUrgente);
}
