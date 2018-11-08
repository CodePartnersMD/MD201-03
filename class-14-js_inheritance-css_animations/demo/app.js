'use strict'

let elForm = document.getElementById('hero-form')
let elCurrentHero = document.getElementById('current-hero')
let elHeroSelect = elForm.heroes 

console.log(elHeroSelect.children)
console.log(elHeroSelect)

elHeroSelect.addEventListener('change', function(event) {
  console.log(event.target.value)
  elCurrentHero.innerText = event.target.value
  if(event.target.value === 'Thanos') {
    let elQuestion = document.createElement('p')
    elForm.appendChild(elQuestion)
    elQuestion.innerText = 'Where is Thanos from?'
    let newSelect = document.createElement('select')
    elForm.appendChild(newSelect)
    let optionOne = document.createElement('option')
    let optionTwo = document.createElement('option')
    newSelect.appendChild(optionOne)
    newSelect.appendChild(optionTwo)
    optionOne.innerText = 'Titan'
    optionTwo.innerText = 'Earth'
  }
})



