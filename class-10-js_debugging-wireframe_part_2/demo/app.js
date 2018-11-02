let students = []

let newStudent = function(student){
  let nameOfNewStudent = nameOfStudent(student)
  students.push(nameOfNewStudent)
}

let nameOfStudent = function(student) {
  return `The name of the student is ${student}`
}

console.log(students)
newStudent('Hannah')
newStudent('Simon')
newStudent('Solomon')