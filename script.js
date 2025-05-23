import { quizData } from "./quizData.js";
const randomNumber = Math.floor(Math.random() * 30);

console.log("Random number between 0 and 30:", randomNumber)
const Question = quizData[randomNumber-1].question
const option1 = quizData[randomNumber-1].options[0]
const option2 = quizData[randomNumber-1].options[1]
const option3 = quizData[randomNumber-1].options[2]
const option4 = quizData[randomNumber-1].options[3]
const correct = quizData[randomNumber-1].correct_answer
let answer = false; 
let correct_answer = localStorage.getItem('correct_answers') ? JSON.parse(localStorage.getItem('correct_answers')) : 0;
let wrong_answer = localStorage.getItem('wrong_answers') ? JSON.parse(localStorage.getItem('wrong_answers')) : 0;
// console.log(Question);

// console.log(option1 );
// console.log(option2 );
// console.log(option3 );
// console.log(option4 );


function updateScoreDisplay() {
    document.querySelector('.score').innerHTML = `
    
        <div>Correct Answers: ${correct_answer}</div>
        <div>Wrong Answers: ${wrong_answer}</div>
        <div>number of question : ${numberofq}</div>
  
        `;
}

window.check = function(selected) {
    answer = selected === correct;
    if (answer === true) {
        correct_answer += 1;
        localStorage.setItem('correct_answers', JSON.stringify(correct_answer));
    } else {
        wrong_answer += 1;
        localStorage.setItem('wrong_answers', JSON.stringify(wrong_answer));
    }
    updateScoreDisplay();
    if (selected === 1) {
        if (correct === 1) {
            document.querySelector('.option1-3').innerHTML = `
                <button class="option option_correct">${option1}</button>
                <button class="option">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="option">${option2}</button>
                <button class="option">${option4}</button>`
        } else {
            let opt1Class = "option option_incorrect"
            let opt2Class = "option"
            let opt3Class = "option"
            let opt4Class = "option"
            
            if (correct === 2) opt2Class = "option option_correct"
            if (correct === 3) opt3Class = "option option_correct"
            if (correct === 4) opt4Class = "option option_correct"
            
            document.querySelector('.option1-3').innerHTML = `
                <button class="${opt1Class}">${option1}</button>
                <button class="${opt3Class}">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="${opt2Class}">${option2}</button>
                <button class="${opt4Class}">${option4}</button>`
        }
    }
    
    if (selected === 2) {
        if (correct === 2) {
            document.querySelector('.option1-3').innerHTML = `
                <button class="option">${option1}</button>
                <button class="option">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="option option_correct">${option2}</button>
                <button class="option">${option4}</button>`
        } else {
            let opt1Class = "option"
            let opt2Class = "option option_incorrect"
            let opt3Class = "option"
            let opt4Class = "option"
            
            if (correct === 1) opt1Class = "option option_correct"
            if (correct === 3) opt3Class = "option option_correct"
            if (correct === 4) opt4Class = "option option_correct"
            
            document.querySelector('.option1-3').innerHTML = `
                <button class="${opt1Class}">${option1}</button>
                <button class="${opt3Class}">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="${opt2Class}">${option2}</button>
                <button class="${opt4Class}">${option4}</button>`
        }
    }
    
    if (selected === 3) {
        if (correct === 3) {
            document.querySelector('.option1-3').innerHTML = `
                <button class="option">${option1}</button>
                <button class="option option_correct">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="option">${option2}</button>
                <button class="option">${option4}</button>`
        } else {
            let opt1Class = "option"
            let opt2Class = "option"
            let opt3Class = "option option_incorrect"
            let opt4Class = "option"
            
            if (correct === 1) opt1Class = "option option_correct"
            if (correct === 2) opt2Class = "option option_correct"
            if (correct === 4) opt4Class = "option option_correct"
            
            document.querySelector('.option1-3').innerHTML = `
                <button class="${opt1Class}">${option1}</button>
                <button class="${opt3Class}">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="${opt2Class}">${option2}</button>
                <button class="${opt4Class}">${option4}</button>`
        }
    }
    
    if (selected === 4) {
        if (correct === 4) {
            document.querySelector('.option1-3').innerHTML = `
                <button class="option">${option1}</button>
                <button class="option">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="option">${option2}</button>
                <button class="option option_correct">${option4}</button>`
        } else {
            let opt1Class = "option"
            let opt2Class = "option"
            let opt3Class = "option"
            let opt4Class = "option option_incorrect"
            
            if (correct === 1) opt1Class = "option option_correct"
            if (correct === 2) opt2Class = "option option_correct"
            if (correct === 3) opt3Class = "option option_correct"
            
            document.querySelector('.option1-3').innerHTML = `
                <button class="${opt1Class}">${option1}</button>
                <button class="${opt3Class}">${option3}</button>`
            document.querySelector('.option2-4').innerHTML = `
                <button class="${opt2Class}">${option2}</button>
                <button class="${opt4Class}">${option4}</button>`
        }
    }
}

document.querySelector('.question').innerHTML=`${Question}`
document.querySelector('.option1-3').innerHTML=`
    <button value="1" onclick="check(1)" class="option option1">${option1}</button>
    <button value="3" onclick="check(3)" class="option option3">${option3}</button>`
document.querySelector('.option2-4').innerHTML=`
    <button value="2" onclick="check(2)" class="option option2">${option2}</button>
    <button value="4" onclick="check(4)" class="option option4">${option4}</button>`
  
let numberofq = localStorage.getItem('numberqs') ? JSON.parse(localStorage.getItem('numberqs')) : 0;

document.querySelector('.next-btn').addEventListener('click', () => {
    numberofq += 1;  
    localStorage.setItem('numberqs', JSON.stringify(numberofq)); 
    console.log('Updated count:', numberofq);
});

document.querySelector('.reset').addEventListener('click', () => {
    numberofq = 0;
    correct_answer = 0;
    wrong_answer = 0;
    localStorage.setItem('numberqs', JSON.stringify(numberofq));
    localStorage.setItem('correct_answers', JSON.stringify(correct_answer));
    localStorage.setItem('wrong_answers', JSON.stringify(wrong_answer));
    updateScoreDisplay();
    console.log('Reset scores:', { numberofq, correct_answer, wrong_answer });
});
console.log(numberofq);
console.log(answer);


updateScoreDisplay();
