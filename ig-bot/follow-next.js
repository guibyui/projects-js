let count = 0;
let yourName = ""; // Right your name inside the quotation marks

let nextFollow = document.querySelectorAll(".L3NKy");

nextFollow.forEach((button, index) => {
  setTimeout(() => {
    if (!button.classList.contains("_8A5w5")) {
      button.click();
      count++;
      console.log(`${yourName} already followed ${count} new people`);
    } else {
      console.log(`${yourName}, you already follow this person`);
    }
  }, index * 5000); // 5 seconds
});
