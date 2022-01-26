const computerPick = document.getElementById('comp-pick')

const playerPick = document.getElementById('play-pick')

const outcomeDisplay = document.getElementById('outcome')

const buttonChoices = document.querySelectorAll('button')

let userPick

buttonChoices.forEach(buttonChoice => buttonChoice.addEventListener('click', (e) =>{
    userPick=e.target.id
    playerPick.innerHTML = userPick
    randomComputerPick()
}))


function randomComputerPick(){
    const randomPick = Math.floor(Math.random() * buttonChoices.length)
    console.log(randomPick)
}