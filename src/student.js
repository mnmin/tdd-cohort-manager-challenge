class Student {
  constructor(studentID, name, lastName, gitHubUser, email) {
    this.studentID = studentID
    this.name = name
    this.lastName = lastName
    this.gitHubUser = gitHubUser
    this.email = email
  }

  // (array.length - 1) - that's always the last element in our array

  get() {
    return this
  }
}

module.exports = Student
