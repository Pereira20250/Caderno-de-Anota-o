const textarea = document.getElementById("anotacoes");

// Carrega anotações salvas
window.onload = () => {
  const textoSalvo = localStorage.getItem("cadernoAnotacoes");
  if (textoSalvo) {
    textarea.value = textoSalvo;
  }
};

// Salva automaticamente a cada digitação
textarea.addEventListener("input", () => {
  localStorage.setItem("cadernoAnotacoes", textarea.value);
});

// Botão de salvar (extra)
function salvarAnotacoes() {
  localStorage.setItem("cadernoAnotacoes", textarea.value);
  alert("Anotações salvas!");
}

// Botão de limpar
function limparAnotacoes() {
  if (confirm("Tem certeza que deseja apagar todas as anotações?")) {
    textarea.value = "";
    localStorage.removeItem("cadernoAnotacoes");
  }
}
