const question = document.querySelector('.question')
const answer = document.querySelector('.answerText')


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let availableQuestions = []

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



function addQuestion(){
    question.innerHTML = allQuestions[0].question
}
console.log(addQuestion());