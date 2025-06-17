document.getElementById('btnCalificar').addEventListener('click', function () {
  const respuestasCorrectas = {
    q1: 'c',
    q2: 'b',
    q3: 'c',
    q4: 'c',
    q5: 'b',
    q6: 'c',
    q7: 'b',
    q8: 'a',
    q9: 'c',
    q10: 'c'
  };

  let score = 0;
  const total = Object.keys(respuestasCorrectas).length;

  for (const [key, correctValue] of Object.entries(respuestasCorrectas)) {
    const opciones = document.getElementsByName(key);
    for (const opcion of opciones) {
      if (opcion.checked) {
        if (opcion.value === correctValue) {
          score++;
        }
        break;
      }
    }
  }

  const porcentaje = (score / total) * 100;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Obtuviste ${score} de ${total} respuestas correctas (${porcentaje}%).`;

  if (porcentaje === 100) {
    resultDiv.textContent += " ¡Excelente!";
  } else if (porcentaje >= 70) {
    resultDiv.textContent += " Buen trabajo, sigue practicando.";
  } else {
    resultDiv.textContent += " Necesitas repasar más.";
  }
});

document.getElementById('btnReiniciar').addEventListener('click', function () {
  const form = document.getElementById('quizForm');
  form.reset();
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = '';
});
