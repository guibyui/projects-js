
let count = 0;
let yourName = '' // Right your name inside the quotation marks

document.querySelectorAll("._8A5w5").forEach((button, index) => {
  setTimeout(() => {
    if (button.innerText == "Following") {
      button.click();
      document.querySelectorAll(".-Cab_").forEach((button, index) => {
        if (button.innerText == "Unfollow") {
          button.click();
          count++;
          console.log(`${yourName}, you've unfollowed ${counter} person/people`);
        }
      });
    }
  }, button * 3000);
});
