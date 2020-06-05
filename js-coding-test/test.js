// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('result')
//     }, 100)
//     })
//     .then(console.log)
//     .catch(console.error)

/******************************************************************** */

// var num = num - 1;
// console.log(num);

/************************************************************************ */

// if (sessionStorage.hits){
//     sessionStorage.hits = Number(sessionStorage.hits) +1;
// }
// else {
//     sessionStorage.hits = 1;
// }
// console.log("Total Hits: " + sessionStorage.hits);

/*********************************************************************** */

// var a = 100;
// var b = NaN;
// switch (true) {
//     case isNaN(a) || isNaN(b):
//         console.log('NaNNaN');
//         break;
//     case a === b:
//         console.log(0);
//         break;
//     default:
//         console.log(1);
// }

/*********************************************************************** */

// var foo = "global foo";
// function checkFoo() {
//     var foo = "local foo";
// }
// function f() {
//     return foo;
// }
// return f;

/*********************************************************************** */

// var id03 = document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;
// console.log(id03);
// const a = Object.freeze({
//     foo: 'Hello',
//     bar: 'world',
//     baz: '!'
// });
// a.foo = "Goodbye";

/************************************************************************ */

// class A {
//     constructor(name) {
//         this.name = name;
//     }
// }

// var a = new A('alpha');
// a.name;

// A.prototype.x = 23;

// a.x;

/************************************************************************* */

// var scope = "I'm Global!"

// function whatIsMyScope() {
//     var scope = "I'm just local";

//     function func() {
//         return scope;
//     }
//     return func;
// }
// console.log(whatIsMyScope()())

/************************************************************************ */

// function printing() {
//     console.log(1);
//     setTimeout(function() { console.log(2); }, 1000);
//     setTimeout(function() { console.log(3); }, 0);
//     console.log(4);
// }
// printing();

/************************************************************************ */

// var x = -0.5110;
// X = x--;
// Math.ceil (x);

// function init() {
//     var greeting = "Hello";
//     var globe = 'World';

//     function displayName() {
//         alert(greeting);
//     }
//     displayName();
// }
// init();

/*********************************************************************** */

// if (-0.1 > 9 && -9 < 0.1){
//     return true;
// }
// else if (Boolean(-0.1 > 9 && -9 < 0.1)){
//     return true;
// }

/********************************************************************* */
// if (false && true) {
//     console.log(true);    
// }

// if (2 > 2 && 3 == 3) {
//     console.log(true);
// }

// // CORRECT ONE
// if (2 > 2 || 3 == 3) {
//     console.log(true);
// }

// if (3<=2 || 2>=3) {
//     console.log(true);
// }

/*********************************************************************** */

// for (let year = 2020; year <= 2000; year++) {console.log(year);}
// for (let year = 2020; year <= 2000; year--) {console.log(year);}
// for (let year = 2000; year >= 2020; year--) {console.log(year);}
// CORRECT ONE
// for (let year = 2000; year <= 2020; year++) {console.log(year);}

/*********************************************************************** */

// let i = 0;
// while (i<= 10){
//     console.log(i++);
// }