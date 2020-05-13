function clickMe() {
    var birthYear = prompt("Hi! What year were you born?")
    var date = new Date();
    var year = date.getFullYear();

    var yourAge = year - birthYear;
    var yourAgeInDays = (year - birthYear) * 365;
    var yourAgeInHours = yourAgeInDays * 24;

    var h1 = document.createElement('h1');
    var h3 = document.createElement('h3');
    var h5 = document.createElement('h5');

    var answer1 = document.createTextNode("You are " + yourAge + " years, \n");
    var answer2 = document.createTextNode(yourAgeInDays + " days, ")
    var answer3 = document.createTextNode("And " + yourAgeInHours + " hours old!")

    h1.setAttribute('id', 'yourAge');
    h3.setAttribute('id', 'yourAgeInDays');
    h5.setAttribute('id', 'yourAgeInHours');

    h1.appendChild(answer1);
    h3.appendChild(answer2);
    h5.appendChild(answer3);

    document.getElementById('container__result').appendChild(h1);
    document.getElementById('container__result').appendChild(h3);
    document.getElementById('container__result').appendChild(h5);
}

function reset() {
    document.getElementById('yourAge', 'yourAgeInDays', 'yourAgeInHours').remove();
    document.getElementById('yourAgeInDays').remove();
    document.getElementById('yourAgeInHours').remove();

}