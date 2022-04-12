const username = document.querySelector('#usernameBox');
const submitButton = document.querySelector('#submitButton');
const recentScore = localStorage.getItem('recentScore')
const finalScore = document.querySelector('#finalScore');

finalScore.innerHTML = recentScore;

username.addEventListener('keyup', () => {
console.log(username.value);
});

function saveScore (e){
    e.preventDefault();

;}



// 
// 
// 
// 


// 
//     
// });



// // const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// // const maxHighScores = 3

// // finalScore.innerHTML = recentScore

// // function saveHighScore(event){
// //     const score = {
// //         score: recentScore,
// //         name: username.value
// //     }
// //     highScores.push(score)
// //     highScores.sort(function (a,b){
// //     return b.score - a.score
// // })


// // highScores.splice(5)
// // localStorage.setItem('highScores', JSON.stringify(highScores))
// // window.location.assign()
// // }

// // const highScoreList = document.querySelector('#highScoreList')

// // highScoreList.innerHTML = highScores.map(function(score){
// //     return 
// // })