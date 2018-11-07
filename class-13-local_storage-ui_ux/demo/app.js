'use strict'

let elKesete = document.getElementById('kesete')
let elEyasu = document.getElementById('eyasu')
let elHannah = document.getElementById('hannah')

let students = []

let Student = function(name, language) {
  this.name = name
  this.language = language
}

// JSON.parse(localStorage.getItem('studentsArray'))

let parseStudents = localStorage.getItem('studentsArray')
students = JSON.parse(parseStudents)



elHannah.addEventListener('change', (event) => {
  students[2].language = event.target.value
  localStorage.setItem('studentsArray', JSON.stringify(students))
})


elKesete.addEventListener('change', (event) => {
  students[0].language = event.target.value
})


elEyasu.addEventListener('change', (event) => {
  students[1].language = event.target.value
})