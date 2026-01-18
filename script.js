function finalizarQuiz() {
  const perguntas = document.querySelectorAll(".pergunta");

  perguntas.forEach(pergunta => {
    const correta = pergunta.dataset.correta;
    const selecionada = pergunta.querySelector("input[type='radio']:checked");
    const feedback = pergunta.querySelector(".feedback");

    if (!selecionada) {
      feedback.textContent = "Você não respondeu essa pergunta.";
      feedback.className = "feedback errou";
      return;
    }

    if (selecionada.value === correta) {
      feedback.textContent = "Você acertou ✅";
      feedback.className = "feedback acertou";
    } else {
      feedback.textContent = `Você errou ❌. Resposta correta: alternativa ${correta.toUpperCase()}`;
      feedback.className = "feedback errou";
    }
  });
}

