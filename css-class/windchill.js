let temperature = document.querySelector("#high-temp").textContent;
let speed = document.querySelector("#wind-speed").textContent;

let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);

if (temperature <= 50 && speed >= 3) {
    document.querySelector('#windchill').textContent = Math.floor(windchill);
}




// let temperature = document.getElementById("high-temp").innerHTML;
// let speed = document.getElementById("wind-speed").innerHTML;

// let windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);

// if (temperature <= 50 && speed >= 3) {
//     document.getElementById('windchill').innerHTML = Math.floor(windchill);
// } else {
//     document.getElementById('windchill').innerHTML = 0;
// }

console.log(windchill);
