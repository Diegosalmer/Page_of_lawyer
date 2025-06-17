document.getElementById('btnCalificar').addEventListener('click', function () {
  const respuestasCorrectas = {
    q1: 'b',
    q2: 'b',
    q3: 'c',
    q4: 'a',
    q5: 'b',
    q6: 'a',
    q7: 'a',
    q8: 'b',
    q9: 'c',
    q10: 'b'
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
  document.getElementById('result').textContent = '';
});
