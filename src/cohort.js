const Student = require('./student')

class Cohort {
  constructor(name) {
    this.name = name
    this.students = []
  }

  get() {
    return this
  }

  addStudent(studentID, name, lastName, gitHubUser, email) {
    const student = new Student(studentID, name, lastName, gitHubUser, email)
    this.students.push(student)
    return student
  }
}

module.exports = Cohort
