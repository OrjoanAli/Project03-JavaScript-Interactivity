const score = Number(prompt('Please enter your score:'));

function checkGrade(score) {
    if (score < 0 || score > 100 || typeof score !== "number" || Number.isNaN(score)) {
        console.log('Invalid score. Please enter a valid score.');
    } else if (score >= 90) {
        console.log('Your grade is A');
    } else if (score >= 80) {
        console.log('Your grade is B');
    } else if (score >= 70) {
        console.log('Your grade is C');
        return 'Your grade is C';
    } else if (score >= 60) {
        console.log('Your grade is D');
    } else {
        console.log('Your grade is F');
    }
}
checkGrade(score);
/*--------------------------------------*/
const userInput2 = Number(prompt('Please enter your age:'));
const hasTicket = prompt('Do you have a ticket?') === 'yes';

function checkAge(age) {
    if (typeof age !== "number" || Number.isNaN(age)) {
        console.log('please enter a valid age.');
    } else if (age >= 18 && hasTicket === true) {
        console.log('You are allowed to enter the concert.');
    } else if (age >= 18 && hasTicket === false) {
        console.log('You are not allowed to enter the concert. You need a ticket.');
    } else {
        console.log('You are not allowed to enter the concert.');
    }
}
checkAge(userInput2);