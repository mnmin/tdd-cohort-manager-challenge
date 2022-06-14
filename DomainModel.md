- Cohort
  - Properties
    - cohortName: string
    - students: [] of JS Object (or possibly StudentDetails? see below)
  - Methods
    - findStudent( studentName )
      - returns StudentDetails for student with `studentName`
      - returns ERROR Student not found if `studentName` does not exist
    - addStudent( studentDetails )
      - adds studentDetails if student does not already exist and returns true
      - returns ERROR Student already exists otherwise

- CohortManager
  - Properties
    - cohorts: [] of Cohort
  - Methods
    - addStudent( cohortName, studentDetails )
      - adds studentDetails to Cohort with `cohortName` if Cohort exists and student has not already been added
        - returns true if successful
        - returns ERROR Cohort not found if `cohortName` is not a valid Cohort
        - returns ERROR Student already exists if student already added

- StudentDetails ?? We could consider making this a class rather than just using a JS Object



REMOVE A COHORT BY COHORT NAME
- I need to create a new cohort (I have this function)
- The new cohort will be pushed to the cohorts array (I have this function)
- I need to find a cohort by cohort name, use getCohots (I have this function)
- I remove the cohort from the array of cohorts (splice) this.cohort.splice(cohortIndex, 1)
- else return cohort