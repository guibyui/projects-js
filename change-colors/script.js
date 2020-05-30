var allButtons = document.getElementsByTagName("button");

//console.log(allButtons);

var copyAllButtons = [];

for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

// console.log(copyAllButtons)

function buttonColorChange(buttons) {
    //console.log(buttons.value);
    if (buttons.value === "red") {
        buttonsRed();
    } else if (buttons.value === "green") {
        buttonsGreen();
    } else if (buttons.value === "reset") {
        buttonsReset();
    } else if (buttons.value === "random") {
        buttonsRandom();
    }
}

function buttonsRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-danger");
    }
}

function buttonsGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add("btn-success");
    }
}

function buttonsReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonsRandom() {
    let choices = [
        "btn-primary",
        "btn-outline-primary",
        "btn-warning",
        "btn-success",
        "btn-info",
        "btn-danger",
        "btn-light",
        "btn-dark",
        "btn-link",
        "btn-outline-secondary",
        "btn-outline-light",
        "btn-outline-success",
        "btn-outline-danger",
        "btn-outline-warning",
        "btn-outline-info",
        "btn-outline-dark",
    ];

    for (let i = 0; i < allButtons.length; i++) {
        let randomNumber = (Math.floor(Math.random() * 15));
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}