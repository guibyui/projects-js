let count = 0;
let yourName = "Gui"; // Right your name inside the quotation marks
const arrow = document.querySelector(".coreSpriteRightPaginationArrow");

function clickHeartAndArrow() {
  const likeButton = document.querySelector(
    "article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
  );

  if (likeButton) {
    button.click();
    count++;
    console.log(`${yourName}, you've unfollowed ${counter} person/people`);
  } else {
    console.log(`${yourName}, you've already liked this post`);
    arrow.click();
  }

  arrow.click();
}

(function doLikeLoop() {
  setTimeout(() => {
    clickHeartAndArrow();
    doLikeLoop();
  }, 2000);
})();
