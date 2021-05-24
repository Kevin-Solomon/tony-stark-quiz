var readlineSync = require('readline-sync');
var chalk = require('chalk');
if (readlineSync.keyInYN('Do you want to play this game?')) {
  var userName = readlineSync.question("Hi May i know your Name: ");
console.log(`Welcome ${userName} How well DO YOU KNOW Tony Stark!!`);

var questionArray = [
  {
    question:"Who is "+chalk.red("Tony Stark's")+ " Best Friend?? ",
    answer:"Captain Rhodes"
  }
  ,{
    question:"What was his"+ chalk.blue("first suit called")+ "?? ",
    answer:"Mark 1"
  },
  {
    question:"Who is Tony's love interest?? ",
    answer:"Pepper Potts"
  },
  {
    question:"Which team did " +chalk.underline.bgRed("Tony")+ "join in 2012? ",
    answer:"Avengers"
  },
  {
    question:"Did Tony sign the Sokovia Accords?? (Yes/No)",
    answer:"Yes"
  },
  {
    question:"What is his password (Hint : Its the name of Virtual assistant",
    answer:"Jarvis"
  }
]
var score=0;
var highScore = [
  {
    name:"Pepper",
    score:10
  },
  {
    name:"Rhodes",
    score:10
  }
]

function askQuestion(question,answer)
{
  var userAnswer = readlineSync.question(question,{hideEchoBack:true})
  if(userAnswer === answer){
    score++;
  }else{
    score--
  }
  console.log("Your score is: ",score)
}

for(var i=0;i<questionArray.length;i++){
  var currentQuestion = questionArray[i];
  askQuestion(currentQuestion.question,currentQuestion.answer);
}
console.log("Congratulations you scored: ",score)

for(var i=0;i<highScore.length;i++){
  var currentScore = highScore[i];
  console.log("High Score: ",currentScore.score, " By ",currentScore.name  )
}



} else {
  console.log("Have A Nice Day")
}