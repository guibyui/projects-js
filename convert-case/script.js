document.getElementById('lower-case').addEventListener('click', lowerCaseText);
document.getElementById('upper-case').addEventListener('click', upperCaseText);
document.getElementById('capitalize').addEventListener('click', capitalizeCaseText);
document.getElementById('first-letter').addEventListener('click', firstLetterCaseText);

// lower
// case
// All letters in a sentence lower cased.The minuscule or small letters(a, b, c, as opposed to the uppercase or capital letters, A, B, C).The ordinary small form in which letters are written or printed.Big letters like those at the beginning of a sentence or name are called upper
// case or capital letters

// this is an example of lower
// case inuse.
function lowerCaseText() {    
    let text = document.querySelector('#myText').textContent;

    lower = text.toLowerCase()

    document.querySelector('#myText').innerHTML = lower;

    console.log(lower);

}

// UPPER CASE
// Capitalization of all letters in a sentence.The majuscule or big letters(A, B, C as opposed to the lowercase or small letters, a, b, c).One of the large alphabetic characters used as the first letter in writing or printing proper names and sometimes
// for emphasis.

// THIS IS AN EXAMPLE OF UPPER CASE IN USE.
function upperCaseText() {
    let text = document.querySelector('#myText').textContent;

    upper = text.toUpperCase();

    document.querySelector('#myText').innerHTML = upper;

    console.log(upper);
}


// Capitalized Case
// Capitalized Case is writing a word with its first letter as a capital letter(uppercase letter) and the remaining letters in lower
// case, in writing systems with a
// case distinction.

// This Is An Example Of Capitalized Case In Use.
function capitalizeCaseText() {
    let text = document.querySelector('#myText').textContent;

    var capitalizeString = (string => string[0].toUpperCase() + string.slice(1).toLowerCase());

    var capitalizeSentence = (string => string.split(' ').map(capitalizeString).join(' '));

    console.log(capitalizeSentence(text));

    document.querySelector('#myText').innerHTML = capitalizeSentence(text);
}


// Sentence case
// Capitalization of only the first word, proper nouns and as dictated by other specific English rules.

// This is an example of sentence case inuse.
function firstLetterCaseText() {
    let text = document.querySelector('#myText').textContent;
    let firstLetterCaseText = text[0].toUpperCase() + text.slice(1).toLowerCase();

    document.querySelector('#myText').innerHTML = firstLetterCaseText;

    console.log(firstLetterCaseText);

}