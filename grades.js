while (true) {
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
            return 'D';
        } else {
            return 'E';
        }
    }

    // This prompts the student to enter their score and parses it into a floating number.
    const studentScore = parseFloat(prompt('Please enter the student\'s score:'));

    // This checks if the inputted score is a number from 0 and 100.
    if (!isNaN(studentScore) && 0 <= studentScore && studentScore <= 100) {
        // This outputs the grade depending on the inserted score. 
        const grade = gradeGenerator(studentScore); 
        console.log(`Grade: ${grade}`);
    } else {
        console.log('Sorry, that is an invalid input, try again with a number from 0 to 100');
        continue; // Skips the rest of the loop if input is invalid
    }

    // This asks the student if they're done or not
    let continuePrompt;
    while (true) {
        continuePrompt = prompt('Are you done?').toLowerCase();
        if (continuePrompt === 'yes' || continuePrompt === 'no') {
            break; // Exit the loop if a valid response is provided
        } else {
            console.log('Please enter either "yes" or "no"');
            // Asks the student to insert a valid response
        }
    }

    if (continuePrompt === 'yes') {
        // Prints 'Thank you for using the grade generator' and exits the loop if the student is done
        console.log("Thank you for using the grade generator");
        break;
    }
}