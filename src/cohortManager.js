const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const cohort = new Cohort(name)
    this.cohorts.push(cohort)
    return cohort
  }

  getCohort(name) {
    // Finds a cohort in the array of cohorts by name
    // Returns the cohort object if found, else returns null to indicate not fund
    for (let i = 0; i < this.cohorts.length; i++) {
      const cohort = this.cohorts[i]
      const myName = cohort.name
      if (name === myName) return cohort
    }
    return null
  }

  addStudentToCohort(cohortName, studentID, name, lastName, gitHubUser, email) {
    // I need to get the cohort
    const cohort = this.getCohort(cohortName)
    // If cohort exists... then I can call addStudent and return the result Return the newly created student
    if (cohort === null) return 'error'
    else return cohort.addStudent(studentID, name, lastName, gitHubUser, email)
    // else returnt 'error'
  }
}

module.exports = CohortManager

// (array.length - 1) - that's always the last element in our array
