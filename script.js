// 1) Build a function constructor called Question

var Question = function (question, answer, correct_answer) {
  this.question = question;
  this.answer = answer;
  this.correct_answer = correct_answer;
};

// 2) Create a couple of questions using the constructor

var myName = new Question(
    'What is my name?',
    ['Alex', 'Mitch', 'July', 'Mark'],
    'Alex');

var planetName = new Question(
    'What is the name of our planet?',
    ['Pluto', 'Earth', 'Jupiter', 'Mars'],
    'Earth');

var myCar = new Question(
    'What is my car?',
    ['Toyota', 'BMW', 'Benz', 'VW'],
    'VW');

// 3) Store them all inside the array

var questions = [myName, planetName, myCar];

// 4) Select one random question and log it on the console

Question.prototype.rando_question = function() {
    console.log(this.question);
    for(var i = 0; this.answer.length > i; i++) {
        console.log(`${i} ${this.answer[i]}`);
    }
};

// Prototype for answer check

Question.prototype.answer_check = function (answer_number) {
    if(this.answer[answer_number] === this.correct_answer) {
        console.log(this.answer[answer_number]);
        console.log('You are right');
    } else {
        console.log('You are wrong, try again later)');
    }
};


function check_answerOnPrompt(obj) {
    obj.rando_question();
    var yourNumber = prompt('Please enter your number');
    obj.answer_check(yourNumber);
}

check_answerOnPrompt(questions[Math.floor(Math.random() * 2)]);

// 5) Use the prompt to ask the user
/*
(function () {
    var choosen_question = questions[Math.floor(Math.random() * 2)].rando_question();
    console.log(choosen_question);
    var person_answer = prompt(`Please, select the right number`);
    choosen_question.answer_check(person_answer);
})();*/














