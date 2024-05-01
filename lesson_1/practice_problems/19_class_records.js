let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

const EXAM_WEIGHT = .65;
const EXERCISE_WEIGHT = .35;

function generateClassRecordSummary(scores) {
  return {
    studentGrades: generateStudentGrades(scores),
    exams: generateExamResults(scores)
  };
}

function generateStudentGrades(students) {
  let returnArr = [];
  
  Object.keys(students).forEach(student => {
    let examAverage = calculateExamsAverage(students[student].scores.exams);
    let exerciseTotal = calculateExerciseTotal(students[student].scores.exercises);
    
    let weightedGrade = Math.round(examAverage * EXAM_WEIGHT + exerciseTotal * EXERCISE_WEIGHT);
    
    let letterGrade = determineLetterGrade(weightedGrade);
    
    returnArr.push(weightedGrade + ` (${letterGrade})`);
  });
  
  return returnArr;
}

function calculateExamsAverage(examScores) {
  let examQuantity = examScores.length;
  let examTotal = examScores.reduce((sum, score) => sum + score, 0);
  
  return examTotal / examQuantity;
}

function calculateExerciseTotal(exerciseScores) {
  return exerciseScores.reduce((sum, score) => sum + score, 0);
}

function determineLetterGrade(gradeNumber) {
  if (gradeNumber <= 59) {
    return 'F';
  } else if (gradeNumber <= 68) {
    return 'E';
  } else if (gradeNumber <= 76) {
    return 'D';
  } else if (gradeNumber <= 84) {
    return 'C';
  } else if (gradeNumber <= 92) {
    return 'B';
  } else if (gradeNumber <= 100) {
    return 'A';
  }
}

function generateExamResults(students) {
  let returnArr = [];
  let examQuantity = students[Object.keys(students)[0]].scores.exams.length;
  
  for (let idx = 0; idx < examQuantity; idx += 1) {
    let examNScores = retreiveExamScores(students, idx);
    returnArr.push({
      average: calculateExamsAverage(examNScores).toFixed(1),
      minimum: Math.min(...examNScores),
      maximum: Math.max(...examNScores),
    });
  }
  
  return returnArr;
}

function retreiveExamScores(students, idx) {
  let returnArr = [];
  Object.keys(students).forEach(student => {
    returnArr.push(students[student].scores.exams[idx]);
  });
  
  return returnArr;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }

/*
- create new object
- set studentGrades Property equal to calculate grades function
  - create a blank return array 
  - iterate through each property (which represents a student)
    - calculate their exam average
    - determine letter grade based on exam averate
    - push a string with exam average and letter grade combined into return array
  - return array
- set exams property equal to calculate exams function
  - create a blank array
  - create an exam index which is equal to the number of exams for a given student
  - for each exam create a score array which combines all students nth exam
  - create a return object that contains
    - average of all scores in the array 
    - minimum of all scores in the array
    - maximum of all scores in the array
  - push object into blank return array
*/