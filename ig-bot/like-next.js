// All working

const arrow = document.querySelector(".coreSpriteRightPaginationArrow");
let counter = 0

function clickHeartAndArrow() {
    const likeButton = document.querySelector(
      "article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
    );

    if (likeButton) {
        likeButton.click();
        counter++;
        console.log(`You've liked ${counter} post(s)!`);
    }
    
    arrow.click();
}

(function doLikeLoop() {
    setTimeout(() => {
        clickHeartAndArrow();
        doLikeLoop();
    }, 8000)
}())

/******************************************************************* */

// Working, Just need to automate
(() => {
  let followNumber = 1;
  const followInterval = setInterval(() => {
    if (followNumber >= 5) {
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
  }, 2000)
})();

/******************************************************************* */


// Working, Just need to automate
(() => {
  let followNumber = 1;
  const followInterval = setInterval(() => {
    if (followNumber >= 5) {
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
  }, 2000)
})();