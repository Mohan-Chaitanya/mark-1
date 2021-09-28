var readlineSync = require('readline-sync')

var playerName=readlineSync.question('Name your name my buddy..');

console.log('Welcome '+playerName+'. This is know your friend. So be careful before answering')

var score =0;
function quiz(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase()){
    console.log('Correct');
    score+=1;
  }else{
    console.log('Wrong')
  }
}

var questions= [{
  question: 'My favourite food?',
  answer: 'Pulihora'
},{
  question: 'where do I live?',
  answer: 'Madras'
},{
  question: 'Favourite color?',
  answer: 'yellow'
},
{
  question: 'My first crush?',
  answer: 'Soundarya'
},
{
  question: 'My favourite programming language?',
  answer: 'Javascript'
}]

for(i=0; i<questions.length; i++){
  quiz(questions[i].question,questions[i].answer)
}

console.log('Final Score is: '+score);