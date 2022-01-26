const computerPick = document.getElementById('comp-pick')

const playerPick = document.getElementById('play-pick')

const outcomeDisplay = document.getElementById('outcome')

const buttonChoices = document.querySelectorAll('button')

let playerPick
possibleChoices.forEach(button => buttonChoices.addEventListener('click', (e) =>{
    playerPick=e.target.id
}))