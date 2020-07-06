const arrow = document.querySelector(".coreSpriteRightPaginationArrow");
let counter = 0;

function clickSaveAndArrow() {
  const saveButton = document.querySelector(
    "article > div.eo2As > section.ltpMr.Slqrh > span.wmtNn > button"
  );

  if (saveButton) {
    saveButton.click();
    counter++;
    console.log(`You've saved ${counter} post(s)!`);
  }
  arrow.click();
}

(function doSaveLoop() {
  setTimeout(() => {
    clickSaveAndArrow();
    doSaveLoop();
  }, 8000);
})();
