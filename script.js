'use strict';

const win = 100

// Selecting elements for player scores
const score1El = document.querySelector('#score--0')
const score2El = document.querySelector('#score--1')
const currentScore1El = document.getElementById('current--0')
const currentScore2El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice')
const player1El = document.querySelector('.player--0')
const player2El = document.querySelector('.player--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

score1El.textContent = 0
score2El.textContent = 0
diceEl.classList.add('hidden')

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

let playing = true

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).
        textContent = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    currentScore = 0
    player1El.classList.toggle('player--active')
    player2El.classList.toggle('player--active')
}

// roll button

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1
        console.log(dice);
        // dispay
        diceEl.classList.remove('hidden')
        diceEl.src = `dice-${dice}.png`

        if (dice !== 1) {
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).
                textContent = currentScore

        } else {

            switchPlayer()
            // switch player

        }
    }
})


btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]


        if (scores[activePlayer] >= win) {
            document.querySelector(`.player--${activePlayer}`).
                classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).
                classList.remove('player--active')
            diceEl.classList.add('hidden')
            state = false


        } else {
            switchPlayer()
        }
    }

})

btnNew.addEventListener('click', function () {

    if (activePlayer === 0) {
        if (scores[0] >= win) {
            document.querySelector(`.player--0`).
                classList.remove('player--winner')
        }
    } else {

        if (scores[1] >= win) {
            document.querySelector(`.player--1`).
                classList.remove('player--winner')
        } else {
            document.querySelector(`.player--1`).
                classList.remove('player--active')
        }
        document.querySelector(`.player--0`).
            classList.add('player--active')
    }

    score1El.textContent = 0
    score2El.textContent = 0

    currentScore1El.textContent = 0
    currentScore2El.textContent = 0

    diceEl.classList.add('hidden')

    scores[0] = 0
    scores[1] = 0
    currentScore = 0;
    activePlayer = 0;

    playing = true
}
)
