const questions = [
  {
    integrand: '\\left( x^2 + 3x \\right)',
    correctAnswer: '\\frac{1}{3}x^3 + \\frac{3}{2}x^2 + C',
    incorrectAnswers: [
      '\\frac{1}{2}x^2 + 3x + C',
      '2x + 3 + C',
      '\\frac{1}{3}x^3 + 3x + C',
      '\\frac{1}{2}x^2 + \\frac{3}{2}x^2 + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( 5x^{-\\frac{1}{2}} + 2 \\right)',
    correctAnswer: '10x^{\\frac{1}{2}} + 2x + C',
    incorrectAnswers: [
      '5x^{\\frac{1}{2}} + 2x + C',
      '10x^{-\\frac{1}{2}} + 2x + C',
      '5x^{-\\frac{1}{2}} + 2x + C',
      '10x^{\\frac{3}{2}} + 2x + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\sin(x)',
    correctAnswer: '-\\cos(x) + C',
    incorrectAnswers: [
      '\\cos(x) + C',
      '\\sin(x) + C',
      '-\\sin(x) + C',
      '\\tan(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{3}{x}',
    correctAnswer: '3\\ln|x| + C',
    incorrectAnswers: [
      '\\frac{3}{2}x^2 + C',
      '3x^{-1} + C',
      '3\\ln(x) + C',
      '3x + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( 4x^3 - 2x + 1 \\right)',
    correctAnswer: 'x^4 - x^2 + x + C',
    incorrectAnswers: [
      'x^4 - x + 1 + C',
      'x^4 - x^2 + C',
      '4x^4 - x^2 + x + C',
      '\\frac{4}{3}x^3 - x^2 + x + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\cos(x)',
    correctAnswer: '\\sin(x) + C',
    incorrectAnswers: [
      '-\\sin(x) + C',
      '-\\cos(x) + C',
      '\\cos(x) + C',
      '\\tan(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( x^{-\\frac{2}{3}} + 5 \\right)',
    correctAnswer: '3x^{\\frac{1}{3}} + 5x + C',
    incorrectAnswers: [
      '\\frac{3}{2}x^{\\frac{1}{3}} + 5x + C',
      '3x^{-\\frac{1}{3}} + 5x + C',
      'x^{\\frac{1}{3}} + 5x + C',
      '3x^{\\frac{2}{3}} + 5x + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\sec^2(x)',
    correctAnswer: '\\tan(x) + C',
    incorrectAnswers: [
      '-\\tan(x) + C',
      '\\sec(x) + C',
      '\\cos(x) + C',
      '\\sin(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( 7x^{-1} + 3x^2 \\right)',
    correctAnswer: '7\\ln|x| + x^3 + C',
    incorrectAnswers: [
      '\\frac{7}{x} + x^3 + C',
      '7x^{-1} + \\frac{3}{2}x^2 + C',
      '7\\ln(x) + x^3 + C',
      '7x + x^3 + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{5}{1 + x^2}',
    correctAnswer: '5\\arctan(x) + C',
    incorrectAnswers: [
      '5\\ln|x| + C',
      '5\\arcsin(x) + C',
      '5\\ln(1 + x^2) + C',
      '5\\tan^{-1}(x^2) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( 2x^{\\frac{1}{2}} + 4 \\right)',
    correctAnswer: '\\frac{4}{3}x^{\\frac{3}{2}} + 4x + C',
    incorrectAnswers: [
      'x^{\\frac{3}{2}} + 4x + C',
      '4x^{\\frac{3}{2}} + 4x + C',
      '\\frac{3}{2}x^{\\frac{3}{2}} + 4x + C',
      '\\frac{4}{3}x^{\\frac{1}{2}} + 4x + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( \\frac{3}{x} + \\sin(x) \\right)',
    correctAnswer: '3\\ln|x| - \\cos(x) + C',
    incorrectAnswers: [
      '3x^{-1} - \\cos(x) + C',
      '3\\ln|x| + \\cos(x) + C',
      '3\\ln(x) - \\sin(x) + C',
      '-\\frac{3}{2}x^{-2} - \\cos(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\csc^2(x)',
    correctAnswer: '-\\cot(x) + C',
    incorrectAnswers: [
      '\\cot(x) + C',
      '-\\csc(x) + C',
      '\\tan(x) + C',
      '-\\tan(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\sec(x) \\tan(x)',
    correctAnswer: '\\sec(x) + C',
    incorrectAnswers: [
      '\\tan(x) + C',
      '-\\sec(x) + C',
      '\\cos(x) + C',
      '-\\cos(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\left( 4x^{-1} + \\frac{2}{1 + x^2} \\right)',
    correctAnswer: '4\\ln|x| + 2\\arctan(x) + C',
    incorrectAnswers: [
      '4\\ln(x) + 2\\arctan(x) + C',
      '4x^{-1} + 2\\arctan(x) + C',
      '4\\ln|x| + 2\\ln(1 + x^2) + C',
      '4\\ln|x| + 2\\arcsin(x) + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{x^2 + 3x}{x}',
    correctAnswer: '\\frac{1}{2}x^2 + 3x + C',
    incorrectAnswers: [
      '\\ln|x| + 3x + C',
      'x + 3x + C',
      'x^2 + 3x + C',
      '\\frac{1}{2}x^2 + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{2x^3 - x}{x^2}',
    correctAnswer: 'x^2 - \\ln|x| + C',
    incorrectAnswers: [
      '2x^2 - x + C',
      '\\ln|x| + C',
      '2x - \\ln|x| + C',
      '2x + \\ln|x| + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{5x^{-3} + 3}{x^{-1}}',
    correctAnswer: '-5x^{-1} + \\frac{3}{2}x^2 + C',
    incorrectAnswers: [
      '5x^{-1} + 3x^2 + C',
      '5x^{-3} + \\frac{3}{2}x^2 + C',
      '5x^{-1} + 3x + C',
      '-5x^{-1} + \\frac{3}{2}x^{-2} + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{x^{\\frac{1}{2}} + x^{\\frac{3}{2}}}{x}',
    correctAnswer: '2x^{\\frac{1}{2}} + \\frac{2}{3}x^{\\frac{3}{2}} + C',
    incorrectAnswers: [
      '2x^{\\frac{3}{2}} + \\frac{2}{3}x^{\\frac{5}{2}} + C',
      '\\ln|x| + x^{\\frac{3}{2}} + C',
      'x^{\\frac{1}{2}} + x^{\\frac{3}{2}} + C',
      '2x^{\\frac{1}{2}} + x^{\\frac{3}{2}} + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{6x + 4 -4x^{-1}}{2x}',
    correctAnswer: '3x + 2\\ln|x| + 2x^{-1} + C',
    incorrectAnswers: [
      '3x^2 + 2\\ln|x| + 2x^{-1} + C',
      '3x + 2x + 2x^{-1} + C',
      '3x + 2\\ln|x| + C',
      '3x + 2x^{-1} + C',
      '\\text{Cannot be integrated}'
    ]
  },
  {
    integrand: '\\frac{x^3 - x}{x^2}',
    correctAnswer: '\\frac{1}{2}x^2 - \\ln|x| + C',
    incorrectAnswers: [
      'x^2 - x + C',
      '\\ln|x| + x^2 + C',
      '\\frac{1}{2}x^2 + C',
      'x - \\ln|x| + C',
      '\\text{Cannot be integrated}'
    ]
  },
{
  integrand: '\\frac{4x^{-1} + 2x}{x^{-2}}',
  correctAnswer: '2x^{2} + \\frac{1}{2} x^{4} + C',
  incorrectAnswers: [
    '2x^{3} + x^{4} + C',
    '2x^{2} + x^{3} + C',
    '2x^{2} + x^{4} + C',
    '2x^{3} + x^{2} + C',
    '\\text{Cannot be integrated}'
  ]
},

 {
  integrand: '\\frac{x^2 + 1}{x^3}',
  correctAnswer: '\\ln|x| - \\frac{1}{2}x^{-2} + C',
  incorrectAnswers: [
    '-\\frac{1}{2}x^{-2} - x^{-1} + C',
    '\\frac{1}{2}x^{-2} + x^{-1} + C',
    '-x^{-2} + x^{-1} + C',
    '\\ln|x| + \\frac{1}{2}x^{-2} + C',
    '\\text{Cannot be integrated}'
  ]
},

  {
  integrand: '\\frac{3x + 6}{x^{\\frac{1}{2}}}',
  correctAnswer: '2x^{\\frac{3}{2}} + 12x^{\\frac{1}{2}} + C',
  incorrectAnswers: [
    '6x^{\\frac{1}{2}} + 12x^{\\frac{1}{2}} + C',
    '6x^{\\frac{3}{2}} + 12x^{\\frac{1}{2}} + C',
    '2x^{\\frac{3}{2}} + 6x^{\\frac{1}{2}} + C',
    '2x^{\\frac{3}{2}} + 12x^{-\\frac{1}{2}} + C',
    '\\text{Cannot be integrated}'
  ]
},

  {
    integrand: '\\frac{2x^2 - 3}{x}',
    correctAnswer: 'x^2 - 3\\ln|x| + C',
    incorrectAnswers: [
      '2x - 3\\ln|x| + C',
      'x^2 - 3x^{-1} + C',
      '2x^2 - 3x + C',
      'x^2 - \\frac{3}{x} + C',
      '\\text{Cannot be integrated}'
    ]
  }
];

let score = 0;
let previousQuestion = null;
let answered = false;
let questionIndex = 0;
let testingMode = false; // Initialize testingMode to false

// DOM Elements
const modeSelection = document.getElementById('modeSelection');
const testingModeBtn = document.getElementById('testingModeBtn');
const randomModeBtn = document.getElementById('randomModeBtn');
const gameContainer = document.getElementById('gameContainer');
const questionText = document.getElementById('questionText');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const optionsContainer = document.getElementById('options');
const scoreSheetBody = document.querySelector('#scoreSheet tbody');
const endGameBtn = document.getElementById('endGameBtn');

// Event Listeners
testingModeBtn.addEventListener('click', () => {
  testingMode = true;
  startGame();
});

randomModeBtn.addEventListener('click', () => {
  testingMode = false;
  startGame();
});

nextQuestionBtn.addEventListener('click', setupQuestion);

endGameBtn.addEventListener('click', endGame);

// Functions
function startGame() {
  // Reset variables
  score = 0;
  questionIndex = 0;
  previousQuestion = null;
  answered = false;
  scoreSheetBody.innerHTML = '';

  // Hide mode selection and show game container
  modeSelection.style.display = 'none';
  gameContainer.style.display = 'flex';

  setupQuestion();
}

function endGame() {
  // Hide game container and show mode selection
  gameContainer.style.display = 'none';
  modeSelection.style.display = 'block';
}

function setupQuestion() {
  let currentQuestion;

  if (testingMode) {
    if (questionIndex >= questions.length) {
      alert('You have completed all the questions.');
      endGame();
      return; // Exit the function
    }
    currentQuestion = questions[questionIndex];
    questionIndex++;
  } else {
    do {
      currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    } while (currentQuestion === previousQuestion && questions.length > 1);
  }

  previousQuestion = currentQuestion;
  answered = false;

  nextQuestionBtn.style.display = 'none';
  
if (testingMode){
    questionText.innerHTML = `DEBUG MODE: Find the antiderivative: \\( \\displaystyle{\\int} ${currentQuestion.integrand} \\, dx \\)`;
} else {
  
   questionText.innerHTML = `Find the antiderivative: \\( \\displaystyle{\\int} ${currentQuestion.integrand} \\, dx \\)`; 
}
  
  generateOptions(currentQuestion);
  MathJax.typesetPromise();
}

function generateOptions(currentQuestion) {
  optionsContainer.innerHTML = '';

  const options = [...currentQuestion.incorrectAnswers];
  options.push(currentQuestion.correctAnswer);
  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = `\\(${option}\\)`;
    button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer, button);
    optionsContainer.appendChild(button);
  });

  MathJax.typesetPromise();
}

function checkAnswer(selectedOption, correctAnswer, button) {
  if (answered) return; // Prevent multiple answers
  answered = true;

  const row = document.createElement('tr');
  const answerCell = document.createElement('td');
  const changeCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  answerCell.innerHTML = `\\(${correctAnswer}\\)`;

  if (selectedOption === correctAnswer) {
    score += 20;
    changeCell.textContent = '+20';
    changeCell.className = 'green';
    button.style.backgroundColor = '#4CAF50'; // Correct answer
  } else {
    score = Math.max(0, score - 5);
    changeCell.textContent = '-5';
    changeCell.className = 'red';
    button.style.backgroundColor = 'red'; // Incorrect answer
  }

  scoreCell.textContent = score;
  scoreCell.className = 'score';
  row.appendChild(answerCell);
  row.appendChild(changeCell);
  row.appendChild(scoreCell);
  scoreSheetBody.appendChild(row);

  // Typeset LaTeX for correct answer
  MathJax.typesetPromise([answerCell]);

  if (scoreSheetBody.rows.length > 8) scoreSheetBody.deleteRow(0); // Keep 8 rows
  nextQuestionBtn.style.display = 'inline'; // Show "Next Question" button
}
