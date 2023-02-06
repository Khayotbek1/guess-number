const number = document.querySelector(".number")
let inputNum = document.querySelector(".left")
let input = document.querySelector(".guess")
const startGuess = document.querySelector(".message")
const score = document.querySelector(".score")
const btnCheck = document.querySelector(".check")
const btnAgain = document.querySelector(".again")
const hScore = document.querySelector(".highscore")
const ovr = document.querySelector(".overlay")
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal-btn")

randomNumber = Math.floor(Math.random() * 5 +1)


// variables
let score20 = 20
let winning = false
let heightScore = 0
let bigHightScore = 0

btnCheck.addEventListener("click", ()=> {
    // console.log(input.value)

    if(input.value == randomNumber){
        number.textContent = randomNumber
        startGuess.textContent = "Tog'ri topdingiz !!!"
        document.body.style.backgroundColor = "green"
        heightScore = score20
        // bigHightScore = heightScore

        if(bigHightScore < heightScore){
            bigHightScore = heightScore
            hScore.textContent = bigHightScore
        }else{
            heightScore = score20
        }

    }else if(input.value > randomNumber){
        startGuess.textContent = "Kiritgan soningiz katta !!!"
        score20--
        score.textContent = score20
    }else if(input.value < randomNumber){
        startGuess.textContent = "Kiritgan soningiz kichik !!!"
        score20--
        score.textContent = score20
    }



    if(score20 == 0){
        ovr.classList.remove("hidden")
        modal.classList.remove("hidden")
    }

    
    
})


btnAgain.addEventListener("click", ()=> {
    again()
})

modalBtn.addEventListener("click", ()=> {
    ovr.classList.add("hidden")
    modal.classList.add("hidden")
    again()
})

function again(){
    score20 = 20
    document.body.style.backgroundColor = "#222"
    number.textContent = "?"
    score.textContent = score20
    input.value = ""
    randomNumber = Math.floor(Math.random() * 5 +1)
    startGuess.textContent = "Taxminan son o'ylang"
}