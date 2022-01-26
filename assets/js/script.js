const computerPick = document.getElementById('comp-pick')

const playerPick = document.getElementById('play-pick')

const outcomeDisplay = document.getElementById('outcome')

const buttonChoices = document.querySelectorAll('button')

let userPick

let computerPicks

let outcome

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) =>{
    userPick=e.target.id
    playerPick.innerHTML = userPick
    randomComputerPick()
    getOutcome()
}))


function randomComputerPick(){
    const randomPick= Math.floor(Math.random() * 3)
    console.log(randomPick)


if (randomPick === 1) {
    computerPicks = 'paper'
}

if (randomPick === 2) {
    computerPicks = 'scissors'
}

if (randomPick === 3) {
    computerPicks = 'rock'
}

computerPick.innerHTML = computerPicks
}


function getOutcome () {
    if (computerPicks === userPick) {
        outcome = 'Tie!'
    }

    if (computerPicks === 'paper' && userPick === 'scissors') {
        outcome = 'You Win!'
    }

    if (computerPicks === 'rock' && userPick === 'paper') {
        outcome = 'You Win!'
    }

    if (computerPicks === 'scissors' && userPick === 'rock') {
        outcome = 'You Win!'
    }

    if (computerPicks === 'rock' && userPick === 'scissors') {
        outcome = 'You Lose!'
    }

    if (computerPicks === 'scissors' && userPick === 'paper') {
        outcome = 'You Lose!'
    }

    if (computerPicks === 'paper' && userPick === 'rock') {
        outcome = 'You Lose!'
    }
    outcomeDisplay.innerHTML = outcome
}