'use strict'

let elBody = document.getElementById('myBody')

let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let schools = []

let Hogwarts = {
  schoolName: 'Hogwarts',
  minStudents: 5,
  maxStudents: 20,
  spellsPerStudent: 2,
  spellsCastPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
    return randomNumber * this.spellsPerStudent
  }
}

let Beauxbatons = {
  schoolName: 'Beauxbatons',
  minStudents: 40,
  maxStudents: 100,
  spellsPerStudent: 10,
  spellsCastPerHour: function() {
    let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
    return randomNumber * this.spellsPerStudent
  }
}

// schools.push(Hogwarts, Beauxbatons)

//display school name in h2
let elHogwartsTitle = document.createElement('h2')
elBody.appendChild(elHogwartsTitle)
elHogwartsTitle.innerText = Hogwarts.schoolName

//display store information into html
let elList = document.createElement('ul')
elBody.appendChild(elList)


for(let i = 0; i < hours.length; i++) {
  console.log(hours[i], 'Total number of spells', Hogwarts.spellsCastPerHour())
  let elListItem = document.createElement('li')
  elList.appendChild(elListItem)
  elListItem.innerText = hours[i] + ': ' + Hogwarts.spellsCastPerHour() + ' cast'

}


