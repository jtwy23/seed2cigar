$(".nav-link").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
         scrollTop: $($(this).attr("href")).offset().top - 100
     }, 400);
     $(".nav-link").removeClass("active")
     $(this).addClass("active");
} )

// Start of Cigar Talk

function navCharacters(id) {
    const phonetics = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel", "india", "juliet", "kilo", "lima", "mike", "november", "oscar", "papa", "quebec", "romeo", "sierra", "tango", "uniform", "victor", "whisky", "xray", "yankee", "zulu"];
        $("[id$='-terms']").hide();
    const elementId = id + '-terms';
        $('#' + elementId).show();
}

// End of Cigar Talk

// Start of Cigar Quiz JS
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // Show Question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // Show Options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'>Well done your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// Create Questions Here
var questions = [
    new Question("How does a cigar begin its journey?", ["When a cigar smoker lights a cigar up", "When the cigar is being rolled in a factory","As a cigar seed to be planted"], "As a cigar seed to be planted"),
    new Question("How many days does it take for the planted seed to become a seedling?", ["40 Days", "60 Days", "80 Days"], "60 Days"),
    new Question("How long does it take the seedling to mature to a full plant?", ["2 Months", "6 Months","12 Months"], "2 Months"),
    new Question("In which direction is the tobacco plants matured?", ["Bottom, upwards", "Top, downwards", "Center, outwards"], "Bottom, upwards"),
    new Question("How heavy are the cigar bales?", ["20lbs", "2000lbs", "200lbs"], "200lbs"),
    new Question("What is a humidor?", ["A box to keep cigars", "A Cuban box", "Type of filler tobacco"], "A box to keep cigars"),
    new Question("A torcedor can roll up to 500 cigars a day. But what is the normal amount they roll?", ["150 Cigars", "300 Cigars", "500 Cigars"], "150 Cigars"),
    new Question("Why is freshly cured tobacco not ready to smoke?", ["The leaves are too wet", "Too many bugs", "Too much ammonia"], "Too much ammonia")
];
 
// Create Quiz
var quiz = new Quiz(questions);
 
// Display Quiz
populate();

// End of Cigar Quiz

