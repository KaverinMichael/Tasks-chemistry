let tasks =[
    {   theme: '1',
        question: "Как атом имеет 11 электронов?",
        answears: [
            'Na',
            'Li',
            'Ca',
            'Cr',
        ],
        rightAnswer: 1,
    },
    {   theme: '1',
        question: "Как атом имеет 6 электронов?",
        answears: [
            'N',
            'P',
            'C',
            'As',
        ],
        rightAnswer: 3,
    },
    {   theme: '2',
        question: "Как атом имеет 22 электронов?",
        answears: [
            'O',
            'K',
            'Fe',
            'Ti',
        ],
        rightAnswer: 4,
    },
    {   theme: '2',
        question: "Как атом имеет 4 электронов?",
        answears: [
            'Sc',
            'Be',
            'U',
            'Au',
        ],
        rightAnswer: 2,
    },
    {   theme: '3',
        question: "Как атом имеет 9 электронов?",
        answears: [
            'W',
            'V',
            'F',
            'Li',
        ],
        rightAnswer: 3,
    },
    {   theme: '3',
        question: "Как атом имеет 13 электронов?",
        answears: [
            'Al',
            'Ca',
            'I',
            'Cl',
        ],
        rightAnswer: 1,
    },   
    {   theme: '4',
        question: "Как атом имеет 25 электронов?",
        answears: [
            'Ba',
            'Mn',
            'Fe',
            'Cs',
        ],
        rightAnswer: 2,
    },
    {   theme: '4',
        question: "Как атом имеет 16 электронов?",
        answears: [
            'K',
            'S',
            'Ti',
            'Br',
        ],
        rightAnswer: 2,
    },
    {   theme: '5',
        question: "Как атом имеет 10 электронов?",
        answears: [
            'Zn',
            'Kr',
            'Cu',
            'Ne',
        ],
        rightAnswer: 4,
    },
    {   theme: '5',
        question: "Как атом имеет 56 электронов?",
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
let question = document.querySelectorAll('.list__view')

// buttons 
let btnOne = document.querySelector('.task__choise__one');
let btnTwo = document.querySelector('.task__choise__two');
let btnThree = document.querySelector('.task__choise__three');
let btnFour = document.querySelector('.task__choise__four');
let buttons = document.querySelectorAll('.btn');
let btnNext = document.querySelector('.task__next__btn');


let taskParant = document.querySelector('.task');
let taskChoise = document.querySelector('.task__choise');
let taskBtnNextChoice = document.querySelector('.task__next');


// ------------logics--------------------------------

//BtnChoice
function btnChoiceOff(){
    btnOne.disabled = true;
    btnTwo.disabled = true;
    btnThree.disabled = true;
    btnFour.disabled = true;
    taskChoise.style.visibility = 'hidden';
}

function btnChoiceOn(){
    btnOne.disabled = false;
    btnTwo.disabled = false;
    btnThree.disabled = false;
    btnFour.disabled = false;
    taskChoise.style.visibility = 'visible';
}

function btnChoiceAndNextChoiceOff(){
    taskChoise.style.visibility = 'hidden';
    taskBtnNextChoice.style.visibility = 'hidden';
}
//begin state 
function beginState() {
    taskParant.style.backgroundColor = 'rgba(128, 128, 128, 0)';
    outTask.innerHTML = 'Выберите задание';
    taskBtnNextChoice.style.visibility = 'hidden';
    btnChoiceOff()
}

beginState();

function interfaceOff () {
    let list = document.querySelector('.list');
    list.style.display = 'none';
}
function interfaceOn () {
    let list = document.querySelector('.list');
    list.style.display = 'flex';
}




question.forEach(function(btn){
    btn.addEventListener('click', function (){

        taskParant.style.backgroundColor = 'rgba(128, 128, 128, .9)';

        let score = 0;
        let indexQuestion = 0;
        let arrTasks = [];
        
        let valueBtn = function(){
                outTask.innerHTML = arrTasks[indexQuestion].question;
                btnOne.innerHTML = arrTasks[indexQuestion].answears[0];
                btnTwo.innerHTML = arrTasks[indexQuestion].answears[1];
                btnThree.innerHTML = arrTasks[indexQuestion].answears[2];
                btnFour.innerHTML = arrTasks[indexQuestion].answears[3];
        }


        let innerTask = function () {
            let btnAttr = btn.dataset.value;

            for(let i=0; i<tasks.length; i++) {
                if(btnAttr == tasks[i].theme) {
                    arrTasks.push(tasks[i])
                
                } 
            }
        }
        innerTask();
        valueBtn();



        btnChoiceOn()
        interfaceOff ()

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function () {
                if(btn.value == arrTasks[indexQuestion].rightAnswer){
                    result.style.backgroundColor = 'green';
                    outTask.classList.add('task__view__result')
                    outTask.innerHTML = 'Верно'
                    btnChoiceOff()
                    score += 1;
                    taskBtnNextChoice.style.visibility = 'visible';
                    indexQuestion += 1
                    
                }else{
                    result.style.backgroundColor = 'red';
                    outTask.classList.add('task__view__result')
                    outTask.innerHTML=('Неверно');
                    btnChoiceOff()
                    taskBtnNextChoice.style.visibility = 'visible';
                    indexQuestion += 1
                    
                }
            })

        })

        btnNext.onclick = (function(){
                if(indexQuestion  == arrTasks.length ) {
                    let final = function(){
                            taskBtnNextChoice.style.visibility = 'hidden';
                            result.style.backgroundColor = '#fff';
                            outTask.classList.remove('task__view__result')
                            outTask.innerHTML = `Вы ответили правильно на ${score} из ${arrTasks.length} вопросов`;
                            interfaceOn();
                    }
                    final();
                    return;
        
                }else{

                    result.style.backgroundColor = '#fff';
                    outTask.classList.remove('task__view__result')
                    valueBtn()
                    btnChoiceOn()
                    taskBtnNextChoice.style.visibility = 'hidden';
                }
        })
   
   
    })

})







