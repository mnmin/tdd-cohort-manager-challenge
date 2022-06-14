const CohortManager = require('../src/cohortManager')

describe('Cohort', () => {
  let cohortManager
  beforeEach(() => {
    cohortManager = new CohortManager()
  })

  it('can create a cohort with a cohort name', () => {
    const expected = {
      name: 'Cohort 01',
      students: []
    }
    const result = cohortManager.createCohort(expected.name)
    expect(result.name).toEqual(expected.name)
    expect(result.students).toEqual(expected.students)
  })
  it('can search a cohort by cohort name', () => {
    const expected = 'Cohort 01'

    const result = cohortManager.createCohort(expected.name)
    expect(result.name).toEqual(expected.name)
  })
  it('can add student to a specific cohort', () => {
    // Set Up
    // Create a cohort with a specific name
    const cohortName = 'Cohort 01'
    const newCohort = cohortManager.createCohort(cohortName)
    // Execute
    const student = cohortManager.addStudentToCohort(
      cohortName,
      1,
      'Student One',
      'Student One',
      'St01',
      'Student01@test.co.uk'
    )

    // Match expectations
    expect(newCohort.name).toEqual(cohortName)
    expect(newCohort.students[0].studentID).toEqual(student.studentID)
    expect(newCohort.students[0].name).toEqual(student.name)
    expect(newCohort.students[0].lastName).toEqual(student.lastName)
    expect(newCohort.students[0].gitHubUser).toEqual(student.gitHubUser)
    expect(newCohort.students[0].email).toEqual(student.email)
  })
  it('can remove a cohort by cohort name', () => {
    // Set up
    const cohort1 = cohortManager.createCohort('Cohort 01')
    const cohort2 = cohortManager.createCohort('Cohort 02')
    // Execute
    cohortManager.removeCohort('Cohort 02')
    // Verify

   expect(cohortManager.cohorts).toEqual([cohort1])
 })
})
