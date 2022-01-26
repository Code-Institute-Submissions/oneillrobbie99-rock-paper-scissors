const computerPick = document.getElementById('comp-pick')

const playerPick = document.getElementById('play-pick')

const outcomeDisplay = document.getElementById('outcome')

const buttonChoices = document.querySelectorAll('button')

let userPick

let computerPicks

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) =>{
    userPick=e.target.id
    playerPick.innerHTML = userPick
    randomComputerPick()
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