'use strict'

//declare variable called favorite Hero and assign it a vlue, that value will be the value that is returned from invoking/calling the prompt function
let favoriteHero = prompt('Who is your favorite Hero?')

console.log('My favorite Hero is ', favoriteHero)


if(favoriteHero.toLowerCase() === 'thanos' || favoriteHero.toUpperCase() === 'THANO') {
  alert(favoriteHero + ' is my favorite hero too!')
} else {
  alert('that\'s too bad, my fovorite hero is Thanos')
}

let universe = confirm('Do you follow Marvel?')
// if universe evaluates to true, run the first code block
if(universe) {
  alert('My favorite hero is ' + favoriteHero + ' and I follow Marvel')
  //if universe evaluates to false, run the 2nd code block
} else {
  alert('My favorite hero is ' + favoriteHero + ' and hate Marvel because I\'m a terrible person')
}

let counter = 0
//these three lines all do the exact same thing, adding 1 to counter and reassigning the value, i.e. counter equals 0 becomes 1
// counter = counter + 1
// counter += 1
// counter++

let correctAnswer;

// !correctAnswer is the same as correctAnswer === false || null || undefined

//while correctAnswer is === null, undefined, or false, run this while loop
while(!correctAnswer) {
  let thanosBirthPlace = confirm('Is Thanos from Titan')
  //conditional to check if user answers no or yes, i.e. thanosBirthPlace returns true or false
  if(thanosBirthPlace === true) {
    alert('Good job, Thanos is a Titan')
    correctAnswer = true
  } else {
    alert('Sorry Try again')
  }
}

let heroArray = ['Thanos', 'Hulk', 'Thor', 'Black Panther', 'Iron Man']

//create a loop that will run as many times as there are values in our hero array
for(let i = 0; i < heroArray.length; i++) {
  let villian = prompt('Who is the most evil Villian?')
  //Check if the prompt returns thanos, if it does, alert he user they are correct and break the for loop
  if(villian.toLowerCase() === 'thanos') {
    alert('Great Job! ' + heroArray[0] + ' is the most evil villian')
    break
    //else alert the user they are wrong and how many chances they have left determined by subtracting the current value of i from the length of the hero array
  } else {
    alert('Sorry Try again, you have ' + ((heroArray.length - 1) - (i)) + ' more tries')
  }
  console.log('index is now ', i)
  console.log(heroArray[i])
}


