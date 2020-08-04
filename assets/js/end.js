// end.js
const username = document.getElementById('username');

const saveScoreBtn = document.getElementById('saveScoreBtn');

const finalScore = document.getElementById('finalScore');

const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// Add event handler to username field to enable/disable save button
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

// Saves only the top 5 highscores to users local storage and taken to highscores page
saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('highscores.html');
};