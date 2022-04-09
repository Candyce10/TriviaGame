const questionText = document.querySelector('.questionText') // this will create my question variable so I can insert the question
const answers = Array.from(document.querySelector('.answerText')) // answer variable to insert answer,
const scoreText = document.querySelector('.scoreBoard')// where my score text will go
const scorePoints = 100
const startButton = document.querySelector("#start")

let currentQuestion = {} //
let takeAnswer = true // creates delay before they can answer again
let score = 0 
let numQuestion = 0 // what question are you on
let availableQuestions = [] // take questions out of array as we use them so questions are always unique


let questions = [
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
    answer4: "Hand-written Mail",
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

const addedPoints = 100
const maxQuestions = 5




function startGame(){
    numQuestion = 0;
    scoreText.innerHTML = questions.length * 100;
    questionText.innerHTML = questions[numQuestion].question;

}



function addNextQuestion(){}

function selectAnswer(){}
