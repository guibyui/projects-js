// WORKING! Just need to automate
(() => {
    let followNumber = 1;
    const followInterval = setInterval(() => {
        if (followNumber >= 2) {
            clearInterval(followInterval);
            return;
        }

        const buttons = document.querySelectorAll(".wpO6b");
        const arrow = document.querySelector(".coreSpriteRightPaginationArrow");
        const nextButton = buttons[followNumber];
        nextButton.click();
        followNumber++;

        console.log(`You've liked ${followNumber - 1} post(s)!`);
        arrow.click();
    }, 500);
})();

/******************************************************************** */

let likesGiven = 0;
setInterval(() => {
    let heart = document.getElementsByClassName("wpO6b"),
        arrow = document.querySelector(".coreSpriteRightPaginationArrow");
    if (heart) {
        likesGiven++, heart.click();
    }
    arrow.click();
    console.log(`You've liked ${likesGiven} post(s)!`);
}, 500);

/******************************************************************** */

var count = 1;
const interval = setInterval(function () {
  var heart = document.getElementsByClassName("._8-yf5");
  var arrow = document.querySelector(".coreSpriteRightPaginationArrow");

  const nextHeart = heart[count];
  nextHeart.click();
  count++;
  console.log(`You've liked ${followNumber - 1} post(s)!`);
  arrow.click();
}, 4000);

/******************************************************************** */

let likesGiven = 0;
setInterval(() => {
    let likes = document.getElementsByClassName('glyphsSpriteHeart__outline__24__grey_9'),
        arrow = document.querySelector('.coreSpriteRightPaginationArrow');
    if (likes[1]) {
        likes = likes[1].parentElement;
        likesGiven++, likes.click();
    }
    arrow.click();
    console.log(`You've liked ${likesGiven} post(s)!`);
}, 2000);  


