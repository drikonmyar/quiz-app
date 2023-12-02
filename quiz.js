const quesJSON = [
  {
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;



const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const skipEl = document.getElementById("skip");

showQuestion();

skipEl.addEventListener("click", () => {
  scoreEl.textContent = `Score: ${score} / ${totalScore}`;
  nextQuestion();
});

function showQuestion() {
  const { correctAnswer, options, question } = quesJSON[currentQuestion];
  questionEl.textContent = question;
  const shuffledOptions = shuffleOptions(options);
  shuffledOptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      }
      else {
        score = score - 0.25;
      }
      scoreEl.textContent = `Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  });
}

function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= quesJSON.length) {
    questionEl.textContent = "Quiz completed!!";
    skipEl.remove();
  }
  else {
    showQuestion();
  }
}

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}
