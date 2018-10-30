'use strict'

//find the elements in our html that match the corresponding id using the method document.getElementById
let elBody = document.getElementById('my-body')
let elSchoolTable = document.getElementById('school-table')

//declare a variable and assign it the value of an array that will contain all our store hours as strings
let hours = ['6am', '7am', '8am', '9am', '10am', '11am']
let schools = []

//declare a new varable and assign the value of an constructor function which will return a new object
let WizardSchool = function(name, min, max, spells) {
  this.schoolName = name
  this.maxStudents = max
  this.minStudents = min
  this.spellsPerStudent = spells
}

WizardSchool.prototype.spellsCastPerHour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
  return randomNumber * this.spellsPerStudent
}


//intantiating a new instance of the WizardSchool object constructor
let Hogwarts = new WizardSchool('Hogwarts', 5, 20, 2)
let Beauxbatons = new WizardSchool('Beauxbatons', 40, 100, 10)
let Dumstrang = new WizardSchool('Dumstrang', 20, 40, 50)

//push our new instances of our object constructor on to the end of our schools array
schools.push(Hogwarts, Dumstrang, Beauxbatons)

let elHeader = document.createElement('tr')
elSchoolTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'School Name'
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

//create a new row and append it to our table
for(let j = 0; j < schools.length; j++) {
  let elRow = document.createElement('tr')
  elSchoolTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = schools[j].schoolName
  for(let i = 0; i < hours.length; i++) {
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = schools[j].spellsCastPerHour()
  }
}


//display school name in h2
let elHogwartsTitle = document.createElement('h2')
elBody.appendChild(elHogwartsTitle)
elHogwartsTitle.innerText = Hogwarts.schoolName

//display store information into html
let elList = document.createElement('ul')
elBody.appendChild(elList)


// for(let i = 0; i < hours.length; i++) {
//   console.log(hours[i], 'Total number of spells', Hogwarts.spellsCastPerHour())
//   let elListItem = document.createElement('li')
//   elList.appendChild(elListItem)
//   elListItem.innerText = hours[i] + ': ' + Hogwarts.spellsCastPerHour() + ' cast'

// }


