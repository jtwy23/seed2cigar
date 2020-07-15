// Start of Cigar Talk

function navCharacters(id) {
    const phonetics = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whisky", "xray", "yankee", "zulu"];
        $("[id$='-terms']").hide();
    const elementId = id + '-terms';
        $('#' + elementId).show();
}

// End of Cigar Talk

// Cigar Quiz JS
(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = '#1e7e34';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "How does a cigar begin its journey?",
      answers: {
        a: "When a cigar smoker lights a cigar up",
        b: "When the cigar is being rolled in a factory",
        c: "As a cigar seed to be planted"
      },
      correctAnswer: "c"
    },
    {
      question: "How many days does it take for the planted seed to become a seedling?",
      answers: {
        a: "40 days",
        b: "60 days",
        c: "80 day"
      },
      correctAnswer: "b"
    },
    {
      question: "How long does it take the seedling to mature to a full plant?",
      answers: {
        a: "2 months",
        b: "6 moths",
        c: "12 months"
      },
      correctAnswer: "a"
    },
    {
      question: "In which direction is the tobacco plants matured?",
      answers: {
        a: "From the bottom of the plant upwards",
        b: "From the top of the plant downwards",
        c: "From the centre of the plant outwards"
      },
      correctAnswer: "a"
    },
    {
      question: "Why is freshly cured tobacco not ready to smoke?",
      answers: {
        a: "The leaves are too wet still",
        b: "There are too many bugs on the leaves",
        c: "It has a lot of ammonia and other impurites still in the leaves"
      },
      correctAnswer: "c"
    },
    {
      question: "How heavy are the cigar bales?",
      answers: {
        a: "20lbs",
        b: "2000lbs",
        c: "200lbs"
      },
      correctAnswer: "c"
    },
    {
      question: "What is a humidor?",
      answers: {
        a: "A box (or even a room) used to keep cigars stored in the ideal conditions",
        b: "A cigar that is made only using tobacco from Cuba",
        c: "A type of filler tobacco with a bold flavour. This lead comes from the top of the plant"
      },
      correctAnswer: "a"
    },    
    {
      question: "A torcedor can roll up to 500 cigars a day. But what is the normal amount they roll?",
      answers: {
        a: "150 cigars",
        b: "300 cigars",
        c: "500 cigars"
      },
      correctAnswer: "a"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
