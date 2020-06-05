
//CURRENT DATE
let current = new Date();
// console.log('Full Date: ' + current);
let numberDay = current.getDay();
// console.log('Get day of the Week: ' + numberDay);
let month = current.getMonth();
// console.log('Get Month: ' + month);
let day = current.getDate();
// console.log('Get Day: ' + day);
let year = current.getFullYear();
// console.log('Get Year: ' + year);

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// let currentDate = weekdays[day] + ", " + date + " " + months[month] + ", " + year;
let currentDate = `${weekdays[numberDay]}, ${day} ${months[month]}, ${year}`;

document.getElementById("currentYear").textContent = year;
document.getElementById("currentDate").textContent = currentDate;

// LAST MODIFIED
let lastModified = Date(document.lastModified);
document.getElementById("lastModified").innerHTML = lastModified;
let modified = new Date(lastModified);

