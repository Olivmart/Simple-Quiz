const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "1-Who invented the car?",
      answers: {
        a: "Karl Benz",
        b: "Sheryl Sandberg",
        c: "Henry Ford"
      },
      correctAnswer: "a"
    },
    {
      question: "2-Which one of these is a JavaScript package manager?",
      answers: {
        a: "Steve Jobs",
        b: "Isaac Newton",
        c: "Vintin Cerf"
      },
      correctAnswer: "c"
    }
  ];

function buildQuiz(){}
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questions) => { //we get the current value and the index
          const answers = []; //saves the posible answers
    
          for(letter in currentQuestion.answers){ //loop will fill the empty array
            answers.push(
              `<label>
                <input type="radio" name="question${questions}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push( //output will show QaA
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join(''); //we show our quiz

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questions) => { //identify which answer was selected
    const answerContainer = answerContainers[questions]; //looking inside the answer container for the current question
    const selector = `input[name=question${questions}]:checked`; //look for the radio but checked
    const userAnswer = (answerContainer.querySelector(selector) || {}).value; //get the value of the answer

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questions].style.color = 'black';
    }
    else{
      answerContainers[questions].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

buildQuiz(); // display quiz
submitButton.addEventListener('click', showResults); // on submit, show results