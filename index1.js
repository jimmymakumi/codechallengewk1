//This function automatically generates a grade depending on the student's score
function gradeGenerator(grade){
    if (grade > 79) {
        return 'A'
    } else if (grade >= 60 && grade <= 79) {
        return 'B'
    } else if (grade >= 49 && grade <= 59){
        return 'C'
    } else if (grade >= 40 && grade <= 48){
        return 'D'
    } else if (grade < 40){
        return 'E'
    }
}
//Input the score to generate the student's grade
console.log (gradeGenerator(45));