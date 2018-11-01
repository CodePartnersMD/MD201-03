'use strict'

//find the elements in our html that match the corresponding id using the method document.getElementById
let elSchoolTable = document.getElementById('school-table')
let elForm = document.getElementById('school-form')

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

//create a prototype method on our wizardschool constructor that will return a random number between the min and max students multiply that by number of spells cast per student
WizardSchool.prototype.spellsCastPerHour = function() {
  let randomNumber = Math.ceil(Math.random() * (this.maxStudents - this.minStudents) + this.minStudents)
  return randomNumber * this.spellsPerStudent
}


//instantiating a new instance of the WizardSchool object constructor
let Hogwarts = new WizardSchool('Hogwarts', 5, 20, 2)
let Beauxbatons = new WizardSchool('Beauxbatons', 40, 100, 10)
let Dumstrang = new WizardSchool('Dumstrang', 20, 40, 50)

//push our new instances of our object constructor on to the end of our schools array
schools.push(Hogwarts, Dumstrang, Beauxbatons)

//create a new row for our header that will contain our column titles
let elHeader = document.createElement('tr')
elSchoolTable.appendChild(elHeader)
let elTh = document.createElement('th')
elHeader.appendChild(elTh)
elTh.innerText = 'School Name'
//loop through our hours array and display each hour as a table header element
for(let i = 0; i < hours.length; i++) {
  let elTh = document.createElement('th')
  elHeader.appendChild(elTh)
  elTh.innerText = hours[i]
}

//create a prototype method on our wizardschool constructor which will generate a new row for each school and populate the row with the random number returned from our spellscastperhour method
WizardSchool.prototype.renderNewSchool = function() {
  let elRow = document.createElement('tr')
  elSchoolTable.appendChild(elRow)
  let elTh = document.createElement('th')
  elRow.appendChild(elTh)
  elTh.innerText = this.schoolName
  for(let i = 0; i < hours.length; i++) {
    let elTd = document.createElement('td')
    elRow.appendChild(elTd)
    elTd.innerText = this.spellsCastPerHour()
  }
}

//loop through our schools array and invoke our rendernewschool method for each one to generate a new row on our table
for(let j = 0; j < schools.length; j++) {
  schools[j].renderNewSchool()
}

//access our inputs on our form through dot notation
let elNameOfSchool = elForm.nameOfSchool 
let elMinStudents = elForm.minStudents

//create an event listener that will listen for a submit event and create a new instance of our constructor function using the values collected from our form
elForm.addEventListener('submit', function(event) {
  event.preventDefault()
  let newSchool = new WizardSchool(elNameOfSchool.value, parseInt(elMinStudents.value), 20, 4)
  schools.push(newSchool)
  //invoke our rendernewschool method on our new school to generate a new row on our table. 
  newSchool.renderNewSchool()
})




