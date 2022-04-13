const question = document.querySelector('.question')
const answers = Array.from(document.querySelectorAll('.answerText'))//turn answerTexts into array to pull form when inserting in function
const scoreText = document.querySelector('#score')
const questionNumber = document.querySelector('#questionNumber')
const scorePoints = 100
const negScorePoints = 50
const maxQuestions = 5
const questionLogInput = document.querySelector('#questionNum')
const scoreInput = document.querySelector('#score')



console.log(answers);


let currentQuestion = {} // set equal to empty object
let acceptingAnswers = true 
let score = 0
let nextQuestion = []
let questionLog = 0

let allQuestions = [
    {question: "What was the bestselling video game console of the 1990's?",
    answer1: "Game Boy Color",
    answer2: "Nintendo64",
    answer3: "Playstation",
    answer4: "Dreamcast",
    correct: 3,
},
    {question: "What was the highest grossing film of the 90's?", 
    answer1: "Titanic",
    answer2: "Star Wars",
    answer3: "Jurassic Park",
    answer4: "Forrest Gump",
    correct: 1
},
    {question: "What was the most popular way to communicate in the 90's?",
    answer1: "E-mail",
    answer2: "Pagers",
    answer3: "Talk Over The Phone",
    answer4: "Hand-Written Mail",
    correct: 2
},
    {question: "When was the World Wide Web first introduced?",
    answer1: "1990", 
    answer2: "1991", 
    answer3: "1992", 
    answer4: "1993",
    correct: 2
},
    {question: "Which toy was originally feared to be a tool for foreign spies?",
    answer1: "Talk Boy",
    answer2: "Tickle Me Elmo",
    answer3: "Game Boy Color",
    answer4: "Furby", 
    correct: 4
}
]

function startGame(){//set function to start game when button is clicked
    questionLog = 0; //question number starts at 0
    score = 0;
    nextQuestion =[...allQuestions];//use spread operator to copy in questions from allQuestions object and put into new array
    console.log(nextQuestion);
    addQuestion(); // this function will add questions to game when game is started
};

function addQuestion(){// this function will insert question into question box 

if (nextQuestion.length === 0 || questionLog>= maxQuestions){
    
    return window.location.assign("/finalpage.html");// opens new window when quiz is over
}

    questionLog ++;//increments questions when game is started 
    questionLogInput.innerHTML = questionLog + "/" + maxQuestions; // increments the question log so will count questions as game is played

    const questionIndex = Math.floor(Math.random() * nextQuestion.length); // selects index randomly out of question array; set equal to variable
    currentQuestion = nextQuestion[questionIndex];// set current question equal to the index of the random generated index from question index variable
    question.innerHTML = currentQuestion.question; // insert the text of the question object key into the question paragraph

    answers.forEach(function(answer){//insert answer into answer boxes: use for each to iterate over every element in answers array
        const number = answer.dataset["number"]// for each parameter in array , access to dataset number assigned to it
        answer.innerText = currentQuestion["answer" + number]//set paragraph text equal to each answer using dataset number 
        answer.parentElement.classList.remove('correct','incorrect')

        console.log(answer);
    });

    nextQuestion.splice(questionIndex, 1); // removes question from question index so that it doesn't repeat in quiz
    console.log(nextQuestion);
    acceptingAnswers = true;
    };



answers.forEach(function(answer){//when clicked this will all happen using the forEach iteration
  answer.addEventListener('click', function(e){
        
    if(!acceptingAnswers) return ; // ! is the not operator
    acceptingAnswers = false;

    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"];

    let setAs = 'incorrect'; // sets up choice click colors
    if(selectedAnswer == currentQuestion.correct){
        setAs = 'correct';
    } 
    console.log(setAs);

    if (setAs == 'correct'){//calls function from below to add or subtract score
        addScore(scorePoints);
    } else {subScore(negScorePoints)}
    
selectedChoice.parentElement.classList.add(setAs);// adds .incorrect and .correct as classes, then in css set class background colors so when clicked it will change accordingly
setTimeout(addQuestion, 1000)



    });

});
//adding subtracting score!
function addScore(num){
    score += num;
    scoreText.innerHTML = score
}
function subScore(num){
    score -= num;
    scoreText.innerHTML = score
}


startGame();


