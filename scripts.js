document.addEventListener("DOMContentLoaded", function () {
    const btnCadastrar = document.querySelector(".btn-cadastrar");
    const listaConsultas = document.querySelector(".consultas-lista");
  
    btnCadastrar.addEventListener("click", function () {
      const cpf = document.getElementById("cpf").value;
      const nome = document.getElementById("nome-paciente").value;
      const idade = document.getElementById("idade").value;
      const sintomas = document.getElementById("sintomas").value;
  
      if (!cpf || !nome || !idade || !sintomas) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }

      const novaConsulta = document.createElement("ul");
      novaConsulta.innerHTML = `
        <li><strong>Consulta</strong></li>
        <li>CPF: ${cpf}</li>
        <li>Nome: ${nome}</li>
        <li>Idade: ${idade}</li>
        <li>Sintomas: ${sintomas}</li>
      `;
  
      listaConsultas.appendChild(novaConsulta);
  
      document.getElementById("cpf").value = "";
      document.getElementById("nome-paciente").value = "";
      document.getElementById("idade").value = "";
      document.getElementById("peso").value = "";
      document.getElementById("sintomas").value = "";
    });
});

const campoAcesso = document.getElementById("busca-acesso");

campoAcesso.addEventListener("input", function () {
    const termoBusca = campoAcesso.value.tolowerCase();
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