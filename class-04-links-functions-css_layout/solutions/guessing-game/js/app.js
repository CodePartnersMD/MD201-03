'use strict';

var userName = prompt('What is your name?');
console.log('User\'s name is ' + userName);

var correctAnswers = 0;

alert('Hello ' + userName + '! Let\'s see if you can answer these yes/no questions about me. Please type your response as either yes/no or y/n.');

//question one
var question1 = prompt('Is Lee a Swing dancer?').toLowerCase();

if (question1 === 'yes' || question1 === 'y') {
  alert('That\'s right, ' + userName + '! Lee\'s been doing Lindy Hop and other Jazz dances for nine years!');
  correctAnswers++;
} else {
  alert('He mentioned this the first day in class during his introduction. Were you listening,' + userName + ' ? :(');
};

console.log('User\'s response is "' + question1 + '" to question 1.');

//question two
var question2 = prompt('Is Lee a smoker?').toLowerCase();

if (question2 === 'no' || question2 === 'n') {
  alert('That\'s correct, ' + userName + '! Up until about a year and a half ago, he was for the prior 12 years, but he has since quit!');
  correctAnswers++;
} else {
  alert('That is a big negatory,' + userName + '. He used to, but does no longer.');
};

console.log('User\'s response is "' + question2 + '" to question 2.');

//question three
var question3 = prompt('Is Lee playing PokemonGO right now?').toLowerCase();

if (question3 === 'yes' || question3 === 'y') {
  alert('Most likely. Probably just caught a Pikachu, ' + userName + '. Just kidding. It\'s just a Zubat. Of course.');
  correctAnswers++;
} else {
  alert('Interesting thought, ' + userName + '. If he\'s not playing, his phone\'s battery has likely died.');
};

console.log('User\'s response is "' + question3 + '" to question 3.');

//question four
var question4 = prompt('Is Lee\'s hair red?').toLowerCase();

if (question4 === 'no' || question4 === 'n') {
  alert('Really, ' + userName + '? Have you looked at him? It\'s pretty red. :)');
} else {
  alert('That\'s correct, ' + userName + '! Been a ginger his whole life.');
  correctAnswers++;
};

console.log('User\'s response is "' + question4 + '" to question 4.');

//question 5
var question5 = prompt('Was he born in California?').toLowerCase();

if (question5 === 'yes' || question5 === 'y') {
  alert('Yup! In a small town near Lancaster, California, ' + userName + '!');
  correctAnswers++;
} else {
  alert('That is incorrect, ' + userName + '. He was born in northern California ');
};

console.log('User\'s response is "' + question5 + '" to question 5.');

alert('Now for a more difficult question with a number for an answer. Do your best!');

//Question 6

var age = 31;

for (var i = 0; i < 4; i++){
  var ageAnswer = prompt('How old is Lee? Redheads are deceptively difficult to tell with!');
  if (ageAnswer == age) {
    alert('You got it right! Great job, partner. Lee is ' + age + '!')
    console.log('User response is ' + ageAnswer + ' to question 6')
    correctAnswers++;
    break;
  }
  else if (ageAnswer > age) {
    alert('You guessed a bit too high. Does he look that old?');
    console.log('User response is ' + ageAnswer + ' to question ');
  }
  else if (ageAnswer < age) {
    alert('You\'re a bit too low. I realize Lee\'s immature, but not that bad.');
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
  else if (isNaN(ageAnswer) === true) {
    alert('That is not a number. You can\'t do that.');
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
  else if ((i === 3) && (ageAnswer !== age)) {
    alert('You\'ve run out of chances. Lee\'s ' + age + ', for the record!')
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
}

//Question 7
var userCorrect = false;

var pokemon = ['pikachu', 'zubat', 'drowzee', 'onyx', 'charmander', 'snorlax'];

var guesses = 0;

while (guesses < 7) {
  var pokeAnswer = prompt('What Pokemon has Lee caught this week on PokemonGO?').toLowerCase();
  for (var i = 0; i < pokemon.length; i++) {
    if (pokeAnswer === pokemon[i]) {
      alert('You caught the right answer! Nice work! The ones he caught this week are: ' + pokemon);
      console.log('User response is ' + pokeAnswer + ' to question 6');
      guesses = 7;
      correctAnswers++;
      userCorrect = true;
      break;
    }
  }
  if (guesses !== 7) {
    alert('Not that one. You\'re not the very best, but try again!');
    console.log('User response is ' + pokeAnswer + ' to question 6');
  }
  guesses++;
}
if (userCorrect === false) {
  alert('Uh-Oh! You did not get any right. The Pokemon that Lee caught this week are: ' + pokemon);
  console.log('User response is ' + pokeAnswer + ' to question 6');
}

alert(userName + ', you scored a total of ' + correctAnswers + ' out of 7')
console.log(userName + 'scored a total of ' + correctAnswers + ' out of 7')
