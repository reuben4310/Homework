'use strict';

// Q1
function ourEvery(theArray, callback) {


    for (let i = 0; i < theArray.length; i++) {
        if (!callback(theArray[i])) {
            return false;
        }
    }
    return true;



}
const letters = ['A', 'B', 'C'];
const mixedLetters = ['d', 'E', 'f', 'G'];
const lowerCase = ['h', 'i', 'j'];

function isUppercase(letter) {

    return letter === letter.toUpperCase();
}
function isLowerCase(letter) {

    return letter === letter.toLowerCase();
}

console.log('Our every', ourEvery(letters, isUppercase));

console.log('Our every2', ourEvery(mixedLetters, isUppercase));

console.log('Our every3', ourEvery(lowerCase, isUppercase));

console.log('Built in every', letters.every(isUppercase));

console.log('Built in every2', mixedLetters.every(isUppercase));

console.log('Built in every3', lowerCase.every(isUppercase));

console.log('Our every lowercase', ourEvery(letters, isLowerCase));

console.log('Our every lowercase2', ourEvery(mixedLetters, isLowerCase));

console.log('Our every lowercase3', ourEvery(lowerCase, isLowerCase));

console.log('Built in every', letters.every(isLowerCase));

console.log('Built in every2', mixedLetters.every(isLowerCase));

console.log('Built in every3', lowerCase.every(isLowerCase));



// Q2
function ourSome(theArray, callback) {


    for (let i = 0; i < theArray.length; i++) {
        if (callback(theArray[i])) {
            return true;
        }
    }
    return false;



}
console.log('Our some', ourSome(letters, isUppercase));

console.log('Our some2', ourSome(mixedLetters, isUppercase));

console.log('Our some3', ourSome(lowerCase, isUppercase));

console.log('Built in some', letters.some(isUppercase));

console.log('Built in some2', mixedLetters.some(isUppercase));

console.log('Built in some3', lowerCase.some(isUppercase));

console.log('Our some lowercase', ourSome(letters, isLowerCase));

console.log('Our some lowercase2', ourSome(mixedLetters, isLowerCase));

console.log('Our some lowercase3', ourSome(lowerCase, isLowerCase));

console.log('Built in some', letters.some(isLowerCase));

console.log('Built in some2', mixedLetters.some(isLowerCase));

console.log('Built in some3', lowerCase.some(isLowerCase));

// Q3
function onlyIf(theArray, test, action) {

    for (let i = 0; i < theArray.length; i++) {
        if (test(theArray[i])) {
            action(theArray[i]);
        }

    }

}


onlyIf(letters, isUppercase, console.log);

onlyIf(mixedLetters, isUppercase, console.log);

onlyIf(lowerCase, isUppercase, console.log);


// Q4
function action(){
    console.log('Happy Birthday!!!!!');
}

onlyIf(letters, isUppercase, console.log);



const endResult=letters.filter(isUppercase);
endResult.forEach(elment => {
    action();
});
    onlyIf(mixedLetters, isUppercase, console.log);

    const endResult2 = mixedLetters.filter(isUppercase);
    endResult.forEach(elment => {
        action();


    
});
onlyIf(lowerCase, isUppercase, console.log);

const endResult3 = lowerCase.filter(isUppercase);
endResult.forEach(elment => {
    action();


});

onlyIf(lowerCase, isLowerCase, console.log);

const endResult4 = lowerCase.filter(isLowerCase);
endResult.forEach(elment => {
    action();


});
onlyIf(mixedLetters, isLowerCase, console.log);

const endResult5 = mixedLetters.filter(isLowerCase);
endResult.forEach(elment => {
    action();
});

onlyIf(letters, isLowerCase, console.log);

const endResult6 = letters.filter(isLowerCase);
endResult.forEach(elment => {
    action();
});