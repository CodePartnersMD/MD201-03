'use strict'

//declare variable called favorite Hero and assign it a vlue, that value will be the value that is returned from invoking/calling the prompt function
let favoriteHero = prompt('Who is your favorite Hero?')

console.log('My favorite Hero is ', favoriteHero)


if(favoriteHero.toLowerCase() === 'thanos' || favoriteHero.toUpperCase() === 'THANO') {
  alert(favoriteHero + ' is my favorite hero too!')
} else {
  alert('that\'s too bad, my fovorite hero is Thanos')
}

// let universe = confirm('Do you follow Marvel?')
//if universe evaluates to true, run the first code block
// if(universe) {
//   alert('My favorite hero is ' + favoriteHero + ' and I follow Marvel')
//   //if universe evaluates to false, run the 2nd code block
// } else {
//   alert('My favorite hero is ' + favoriteHero + ' and hate Marvel because I\'m a terrible person')
// }



