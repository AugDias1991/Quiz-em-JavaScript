function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};

 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;  };


// create questions here
var questions = [
    new Question("Em que ano foi lançado Harry Potter e a Pedra Filosofal?", ["2001", "2003","1999", "2005"], "2001"),
    new Question("Qual o nome do melhor amigo do Harry?", ["Rony", "Ronaldo", "Sirius", "Lupin"], "Rony"),
    new Question("De qual filme é esta frase: 'Que a força esteja com você!'?", ["Star Trek", "Minions","Star Wars", "O Rei Leão"], "Star Wars"),
    new Question("No filme 'IT A Coisa' qual a cor do casaco do George?", ["Azul", "Vermelho", "Laranja", "Amarelo"], "Amarelo"),
    new Question("Em 'Como treinar o seu dragão', qual é o nome do dragão do Soluço?", ["Pedrinho", "Banguela", "Sem dente", "Bengala"], "Banguela"),
    new Question("Qual a cor do sabre de luz do Darth Vader?", ["Verde", "Vermelho","Roxo", "Azul"], "Vermelho"),
    new Question("Em que ano foi lançado o filme O Rei Leão?", ["1996", "1999", "1994", "2000"], "1994"),
    new Question("Em 'Harry Potter', qual a magia que abre portas?", ["Alohomora", "Alouca","Accio", "Expeliarmus"], "Alohomora"),
    new Question("Qual o nome do palhaço do filme 'IT A Coisa'?", ["PennyLane", "Pennywise", "Pepino", "Pedro"], "Pennywise"),
    new Question("Qual o nome do personagem que é considerado 'Deus do Trovão'?", ["Kratos", "Loki", "Thor", "Odin"], "Thor"),
    new Question("Qual o personagem mais forte dos Vingadores?", ["Homem de Ferro", "Thor","Viuva Negra", "Hulk"], "Hulk"),
    new Question("Qual o nome do principal vilão dos Vingadores?", ["Dormmamu", "Thanos", "Venom", "Nick Fury"], "Thanos"),
    new Question("Qual o nome verdadeiro do Homem Aranha?", ["Pedro Pato", "Pepper Pack","Peter Parker", "Stan Lee"], "Peter Parker"),
    new Question("No jogo 'God of War' qual o nome do personagem principal?", ["Loki", "Klaiton", "Thor", "Kratos"], "Kratos"),
    new Question("Em que ano o jogo 'God of War 4' foi considerado o melhor jogo do ano?", ["2018", "2009", "2019", "2015"], "2018")
    
];



// create quiz
var quiz = new Quiz(questions);

 
// display quiz

populate();