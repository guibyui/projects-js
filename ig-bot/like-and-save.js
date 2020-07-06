const arrow = document.querySelector(".coreSpriteRightPaginationArrow");
let counter = 0;

function clickHeartSaveAndArrow() {
  const likeButton = document.querySelector(
    "article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
  );

  const saveButton = document.querySelector(
    "article > div.eo2As > section.ltpMr.Slqrh > span.wmtNn > button"
  );

  if (likeButton) {
    likeButton.click();
    counter++;
    console.log(`You've liked ${counter} post(s)!`);
  }

  if (saveButton) {
    saveButton.click();
    console.log(`You've saved ${counter} post(s)!`);
  }
  arrow.click();
}

(function doLikeSaveLoop() {
  setTimeout(() => {
    clickHeartSaveAndArrow();
    doLikeSaveLoop();
  }, 8000);
})();
