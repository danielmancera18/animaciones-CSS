let clicleableOne = document.getElementById("nez-1")
let clicleableTwo = document.getElementById("nez-2")
let clicleableThree = document.getElementById("nez-3")
let clicleableFour = document.getElementById("nez-4")
let scoreCount = document.getElementsByClassName("total-count")


let score = 0

function incrementScore(){
    score += 1
    console.log(score)
    scoreCount[0].textContent = "Score: " + score
}

clicleableOne.addEventListener('click', incrementScore)
clicleableTwo.addEventListener('click', incrementScore)
clicleableThree.addEventListener('click', incrementScore)
clicleableFour.addEventListener('click', incrementScore)

console.log(scoreCount[0].textContent)


