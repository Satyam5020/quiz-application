//ONLY ADD QUESTIONS AND NOTHING TO CHANGE ADD QUESTION IN const quizDB WITH FOUR OPTION 
//AND GIVE QUESTIONS NUMBER AND ALL THESE THANKU . 


const quizDB = [

    {
        question: " Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Makeup Langauge",
        ans: "ans4"
    },

    {
        question: " Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Casacading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },

    {
        question: " Q3: What is the full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },

    {
        question: " Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },

    {
        question: " Q5: What is the full form of TS?",
        a: "TypeScript",
        b: "TypeSuper",
        c: "TpeyScript",
        d: "TypeShoes",
        ans: "ans1"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer')

const showScore = document.querySelector('#showScore'); 

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    


}

loadQuestion();

const getCheckAnswer = () => {

    let answer;

    answers.forEach((curAnsElem) => {

        if (curAnsElem.checked) {

            answer = curAnsElem.id;

        }

    });

    return answer;

};


submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();

    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };


questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore .innerHTML = `
        <h3> You scored ${score}/${quizDB.length} 👌</h3>

        <button class ="btn" onclick ="location.reload">play Again</button>

        
        `;

        showScore.classList.remove('scoreArea')
       
    }
});