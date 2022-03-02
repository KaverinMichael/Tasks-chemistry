let tasks =[
    {   question: "Как атом имеет 11 электронов?",
        answears: [
            'Na',
            'Li',
            'Ca',
            'Cr',
        ],
        rightAnswer: 1,
    },
    {   question: "Как атом имеет 6 электронов?",
        answears: [
            'N',
            'P',
            'C',
            'As',
        ],
        rightAnswer: 3,
    },
    {   question: "Как атом имеет 22 электронов?",
        answears: [
            'O',
            'K',
            'Fe',
            'Ti',
        ],
        rightAnswer: 4,
    },
    {   question: "Как атом имеет 4 электронов?",
        answears: [
            'Sc',
            'Be',
            'U',
            'Au',
        ],
        rightAnswer: 2,
    },
    {   question: "Как атом имеет 9 электронов?",
        answears: [
            'W',
            'V',
            'F',
            'Li',
        ],
        rightAnswer: 3,
    },
    {   question: "Как атом имеет 13 электронов?",
        answears: [
            'Al',
            'Ca',
            'I',
            'Cl',
        ],
        rightAnswer: 1,
    },
    {   question: "Как атом имеет 25 электронов?",
        answears: [
            'Ba',
            'Mn',
            'Fe',
            'Cs',
        ],
        rightAnswer: 2,
    },
    {   question: "Как атом имеет 16 электронов?",
        answears: [
            'K',
            'S',
            'Ti',
            'Br',
        ],
        rightAnswer: 2,
    },
    {   question: "Как атом имеет 10 электронов?",
        answears: [
            'Zn',
            'Kr',
            'Cu',
            'Ne',
        ],
        rightAnswer: 4,
    },
    {   question: "Как атом имеет 56 электронов?",
        answears: [
            'Ba',
            'I',
            'S',
            'V',
        ],
        rightAnswer: 1,
    },
]
// out
let outTask = document.querySelector('.task__view__outq');
//yes/no
let result = document.querySelector('.task__view');


// choiseTask
let question = document.getElementById('list__view__task__1.1');

// buttons 
let btnOne = document.querySelector('.task__choise__one');
let btnTwo = document.querySelector('.task__choise__two');
let btnThree = document.querySelector('.task__choise__three');
let btnFour = document.querySelector('.task__choise__four');
let buttons = document.querySelectorAll('.btn');
let btnNext = document.querySelector('.task__next__btn');

// logics
let arrScore = [];
let score = 0;
const options = {"once":true};
let indexQuestion = 0;

btnOne.disabled = true;
btnTwo.disabled = true;
btnThree.disabled = true;
btnFour.disabled = true;
btnNext.disabled = true;

function start() {
    outTask.innerHTML = tasks[indexQuestion].question;
    btnOne.innerHTML = tasks[indexQuestion].answears[0];
    btnTwo.innerHTML = tasks[indexQuestion].answears[1];
    btnThree.innerHTML = tasks[indexQuestion].answears[2];
    btnFour.innerHTML = tasks[indexQuestion].answears[3];
    btnOne.disabled = false;
    btnTwo.disabled = false;
    btnThree.disabled = false;
    btnFour.disabled = false;
    question.style.backgroundColor = '#f65649';
}

question.addEventListener('click', start, options);



buttons.forEach(function(btn) {

    btn.addEventListener('click', function () {
        if(btn.value == tasks[indexQuestion].rightAnswer){
            result.style.backgroundColor = 'green';
            outTask.classList.add('task__view__result')
            outTask.innerHTML = 'Верно'
            btnOne.disabled = true;
            btnTwo.disabled = true;
            btnThree.disabled = true;
            btnFour.disabled = true;
            btnNext.disabled = false;
            arrScore.push(1);
            
        }else{
            result.style.backgroundColor = 'red';
            outTask.classList.add('task__view__result')
            outTask.innerHTML=('Неверно');
            btnOne.disabled = true;
            btnTwo.disabled = true;
            btnThree.disabled = true;
            btnFour.disabled = true;
            btnNext.disabled = false;
            arrScore.push(0);
            
        }
    },)

})



function final() {
    for(let i=0; i<arrScore.length; i++){
        if(arrScore[i] == 1){
            score += 1;
        }
    }
    btnNext.disabled = true;
    result.style.backgroundColor = '#fff';
    outTask.classList.remove('task__view__result')
    outTask.innerHTML = `Вы ответили правильно на ${score} из ${tasks.length} вопросов`;
    btnOne.innerHTML = '';
    btnTwo.innerHTML = '';
    btnThree.innerHTML = '';
    btnFour.innerHTML = '';
}


function next() {
    if(indexQuestion  == (tasks.length-1)) {
        final();
        return;
    }
    indexQuestion += 1;
    result.style.backgroundColor = '#fff';
    outTask.classList.remove('task__view__result')
    outTask.innerHTML = tasks[indexQuestion].question;
    btnOne.innerHTML = tasks[indexQuestion].answears[0];
    btnTwo.innerHTML = tasks[indexQuestion].answears[1];
    btnThree.innerHTML = tasks[indexQuestion].answears[2];
    btnFour.innerHTML = tasks[indexQuestion].answears[3];
    btnOne.disabled = false;
    btnTwo.disabled = false;
    btnThree.disabled = false;
    btnFour.disabled = false;
    btnNext.disabled = true;
}

btnNext.addEventListener('click', next)


console.log(question)
