// create quiz class

class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// create a question class
class Question {
    constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

// Display questions

function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show questions
        let questionElement = document.getElementById("questions");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        // show options
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

// Guess function 

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// show progress

function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

// show score

function showScores() {
    let quizEndHTML = `
     <h1>Quiz completed</h1>
     <h2 id ="score"> You scored: ${quiz.score} of ${quiz.questions.length} </h2>
     <div class = quiz-repeat>
     <a href = "index.html">Take Quiz Again</a>
     </div>`;

     let quizElement = document.getElementById("quiz");
     quizElement.innerHTML = quizEndHTML;
}

// create quiz questions

let questions = [
    new Question(
        "Which planet is known as the Green Planet?",["Saturn", "Jupiter", "Mars", "Uranus"], "Uranus"
    ),

    new Question(
        "Which country is the most visited country in the world?",["USA", "France", "Germany", "UK"], "France"
    ),

    new Question(
        "Name the company founded by Gordon Moore and Robert Noyce on 18 July, 1968.",["intel", "oracle", "Apple", "IBM"], "intel"
    ),

    new Question(
        "Name the largest mammal.",["Elephant", "Giraffe", "Blue whale", "Gorilla"], "Blue whale"
    ),

    new Question(
        "Name the largest state of the United States.",["Texas", "California", "Alaska", "Florida"], "Alaska"
    ),

    new Question(
        "Which country is Usain Bolt from?",["USA", "Jamaica", "Brazil", "South korea"], "Jamaica"
    ),

    new Question(
        "Name the highest-grossing film of all time.",["Avengers Endgame", "Avatar", "Titanic", "Avengers Infinity war"], "Avatar"
    ),

    new Question(
        "BMW is headquartered in which city?",["Munich", "Rome", "Paris", "Pretoria"], "Munich"
    ),

    new Question(
        "Name the most popular drink in the world that does not have any alcohol content.",["Soda", "coffee", "beer", "water"], "coffee"
    ),

    new Question(
        "In which year was the first-ever model of the iPhone released?",["2010", "2006", "2007", "2009"], "2007"
    ),

    new Question(
        "Name the boxer who was known as 'The Greatest'  and 'The People’s Champion'.",["Mike Tyson", "Floyd Mayweather", "Muhammed Ali", "Manny Pacquiao"], "Muhammed Ali"
    ),

    new Question(
        "What is meant by 'el niño' in Spanish?",["The library", "The ocean", "the boy", "hello"], "the boy"
    ),

    new Question(
        "Who said, 'I came, I saw, I conquered'?",["Julius Caesar", "Alexander the great", "Genghis Khan", "Hercules"], "Julius Caesar"
    ),

    new Question(
        "Name the coldest planet.",["Neptune", "Jupiter", "Mars", "Uranus"], "Neptune"
    ),

    new Question(
        "What is the most common blood group in the world?",["Blood group O", "Blood group B-", "Blood group AB+", "Blood group A+"], "Blood group O"
    ),

    new Question(
        "Name the longest river in the world.",["Nile", "Amazon", "Yangtze", "Congo River"], "Nile"
    ),

    new Question(
        "Which planet has the maximum gravity?",["Saturn", "Jupiter", "Mars", "Uranus"], "Jupiter"
    ),

    new Question(
        "Hot dogs were invented in which European nation?",["France", "Germany", "Finland", "UK"], "Germany"
    ),

    new Question(
        "Which country won the FIFA Women's World Cup in 2019?",["France", "USA", "Brazil", "Nigeria"], "USA"
    ),

    new Question(
        "What is the name of the computer in '2001: A Space Odyssey'?",["IBM", "wally", "HAL", "Zeus"], "HAL"
    ),

    new Question(
        "The FTSE 100 index is located in which country?",["USA", "Mexico", "UK", "Zambia"], "UK"
    ),

    new Question(
        "Which film is credited for popularizing the word 'supercalifragilisticexpialidocious'?",["Transformers", "Alice in wonder-world", "Mary Poppins", "Terminator"], "Mary Poppins"
    ),

    new Question(
        "Who wrote the book 'Da Vinci Code'?",["Sir Isaac Newton", "Dan Brown", "Albert Eistein", "Stephen Hawking"], "Dan Brown"
    ),

    
    new Question(
        "What does BMW stand for?",["Be My Wife", "Bayerische Motoren Werke AG.", "BMW", "NONE"], "Bayerische Motoren Werke AG."
    ),

    new Question(
        "What year did Aston Martin, the iconic luxury British sports car manufacturer, win the French Grand Prix?",["1920", "1980", "1933", "1965"], "1933"
    ),

    new Question(
        "Name the largest continent.",["Africa", "North America", "Asia", "Europe"], "Asia"
    ),

    new Question(
        "A Canary Island has been named after which animal?",["Bear", "dog", "cat", "cow"], "dog"
    ),

    new Question(
        "What do the 100 folds in a chef's hat signify?",["100 ways to cook an egg.", "Fashion sense", "100 ways to cook sauce", "Nothing"], "100 ways to cook an egg."
    ),

    new Question(
        "Which country is notoriously known for the alcohol brand Vodka?",["USA", "Russia", "Germany", "Mexico"], "Russia"
    ),

    new Question(
        "Where is the River Thames located?",["Greece", "Paris", "London", "Berlin"], "London"
    )
];

let quiz = new Quiz(questions);

// display questions
displayQuestion();


// Add a count-down 
let time = 15;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
           clearInterval(quizTimer);
           showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${format(min)} : ${format(sec)}`;
        }
    }, 1000);
}

function format(t) {
    return t < 10? `0${t}` : t;
}

startCountdown();