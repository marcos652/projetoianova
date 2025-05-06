const inputMensagem = document.getElementById("mensagemInput");
const botaoEnviar = document.getElementById("enviarBtn");
const listaHistorico = document.getElementById("historicoLista");

function carregarHistorico() {
  const historico = JSON.parse(localStorage.getItem("historico")) || [];
  listaHistorico.innerHTML = "";
  historico.forEach(mensagem => {
    const itemLista = document.createElement("li");
    itemLista.innerHTML = `<a href="#">${mensagem}</a>`;
    listaHistorico.appendChild(itemLista);
  });
}

function salvarNoHistorico(mensagem) {
  const historico = JSON.parse(localStorage.getItem("historico")) || [];
  historico.push(mensagem);
  localStorage.setItem("historico", JSON.stringify(historico));
}

botaoEnviar.addEventListener("click", () => {
  const mensagem = inputMensagem.value.trim();
  if (mensagem !== "") {
    salvarNoHistorico(mensagem);
    carregarHistorico();
    inputMensagem.value = "";
  }
});

inputMensagem.addEventListener("keydown", evento => {
  if (evento.key === "Enter") {
    botaoEnviar.click();
  }
});

carregarHistorico();
