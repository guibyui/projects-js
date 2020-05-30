// Based on Rafi Kazi teachings

let blackjackGame = {
    'you': {
        'scoreSpan': '#your-blackjack-result',
        div: '#your-box',
        score: 0
    },

    'dealer': {
        'scoreSpan': '#dealer-blackjack-result',
        div: '#dealer-box',
        score: 0,
    },

    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],

    'cardsMap': {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'K': 10,
        'J': 10,
        'Q': 10,
        'A': [1, 11]
    },

    'wins': 0,
    'losses': 0,
    'draws': 0,

    'isStand': false,
    'turnsOver': false,
    // 'isHit': true,
};

const you = blackjackGame["you"];
const dealer = blackjackGame["dealer"];

const hitSound = new Audio("/blackjack/sounds/swish.m4a");
const winSound = new Audio("/blackjack/sounds/cash.mp3");
const lossSound = new Audio("/blackjack/sounds/aww.mp3");

document
    .querySelector("#blackjack-hit-button")
    .addEventListener("click", blackjackHit);

document.querySelector("#blackjack-stand-button").addEventListener("click", dealerLogic);

document
    .querySelector("#blackjack-deal-button")
    .addEventListener("click", blackjackDeal);

function blackjackHit() {

    if (blackjackGame['isStand'] === false) {
        let card = getRandomCard();

        //console.log(card);

        showCard(card, you);

        updateScore(card, you);

        showScore(you);

        // blackjackGame['isHit'] = false;

        console.log('Your Score: ', you['score']);
    }

}

function getRandomCard() {
    let randomCardIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomCardIndex];
}

function showCard(card, activePlayer) {

    if (activePlayer['score'] <= 21) {
        let imageCard = document.createElement("img");
        imageCard.src = `/blackjack/images/${card}.png`;

        document.querySelector(activePlayer["div"]).appendChild(imageCard);

        hitSound.play();
    }
}

function updateScore(card, activePlayer) {

    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let selectYourImages = document.querySelector('#your-box').querySelectorAll('img');
        let selectDealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < selectYourImages.length; i++) {
            selectYourImages[i].remove();
        }

        for (let i = 0; i < selectDealerImages.length; i++) {
            selectDealerImages[i].remove();
        }

        you['score'] = 0;
        dealer['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-game-result').textContent = 'Let\'s Play';
        document.querySelector('#blackjack-game-result').style.color = '#ffffff';

        blackjackGame['turnsOver'] = true;
        // blackjackGame['isHit'] = true;
    }

}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUUUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {

    blackjackGame['isStand'] = true;

    while (dealer['score'] < 16 && blackjackGame['isStand'] === true) {
        // if (blackjackGame['isHit'] === false) {
        let card = getRandomCard();
        showCard(card, dealer);
        updateScore(card, dealer);
        showScore(dealer);
        await sleep(500);
        // }
    }

    console.log('Dealer Score: ', dealer['score']);

    blackjackGame['turnsOver'] = true;
    let winner = computeGame();
    showResult(winner);
    console.log(blackjackGame['turnsOver']);
}

// Compute Wins, loses, and draws
// Update the game table
function computeGame() {
    let winner;

    if (you['score'] <= 21) {

        // CONDITION 1: Your score is higher than dealer or when dealer busts

        if (you['score'] > dealer['score'] || (dealer['score'] > 21)) {
            blackjackGame['wins']++;
            winner = you;

            console.log('YOU WOOOOOOOOOOON!');
            console.log('Wins = ' + blackjackGame['wins']);

        } else if (you['score'] < dealer['score']) {
            blackjackGame['losses']++;

            winner = dealer;

            console.log('YOU LOOOOOOOOST!');
            console.log('Losses = ' + blackjackGame['losses']);

        } else if (you['score'] === dealer['score']) {
            blackjackGame['draws']++;

            console.log('YOU DREWWWWW!');
            console.log('Draws = ' + blackjackGame['draws']);
        }

        // CONDITION 2: When you bust but dealer doesn't

    } else if (you['score'] > 21 && dealer['score'] <= 21) {
        blackjackGame['losses']++;

        winner = dealer;

        console.log('YOU LOOOOOOST!');
        console.log('Losses = ' + blackjackGame['losses']);

        // CONDITION 3: When you and dealer bust

    } else if (you['score'] > 21 && dealer['score'] > 21) {
        blackjackGame['draws']++;

        console.log('YOU DREWWWWW!');
        console.log('Draws = ' + blackjackGame['draws']);
    }


    console.log('Winner is: ', winner);
    console.log(blackjackGame);


    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {
        if (winner === you) {
            message = 'You Won!';
            messageColor = 'green';
            winSound.play();
            document.querySelector('#wins').textContent = blackjackGame['wins'];

        } else if (winner === dealer) {
            message = 'You Lost!';
            messageColor = 'red';
            lossSound.play();
            document.querySelector('#losses').textContent = blackjackGame['losses'];

        } else {
            message = 'You Drew!';
            messageColor = 'black';
            document.querySelector('#draws').textContent = blackjackGame['draws'];
        }

        document.querySelector('#blackjack-game-result').textContent = message;
        document.querySelector('#blackjack-game-result').style.color = messageColor;
    }
}