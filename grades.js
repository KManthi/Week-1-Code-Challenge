// This function returns a grade for certain score inputs.

function gradeGenerator(score) {

// Rounds the score up or down depending on which one is closer.
    const roundedScore = Math.round(score);

    if (79 < roundedScore) {
        return 'A';
    } else if (60 <= roundedScore && roundedScore <= 79) {
        return 'B';
    } else if (50 <= roundedScore && roundedScore <= 59) {
        return 'C';
    } else if (40 <= roundedScore && roundedScore <= 49) {
        return'D';
    } else {
        return 'E';
    }
}

// This prompts the student to enter their score.
const studentScore = window.prompt('Please enter the student\'s score:');

// This checks if the inputed score is between 0 and 100.

if (0 < studentScore && studentScore <= 100) {

    // This outputs the grade depending on the inserted score. 
    const grade = gradeGenerator(studentScore); 
    return `Grade: ${grade}`;
} 
// Displays an error message if the input is invalid.
else {
    return 'Sorry, that is an invalid input, try again with a number from 1 to 100';
}