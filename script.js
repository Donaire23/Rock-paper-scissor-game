
// player choice button

const pRockBtn = document.querySelector("#pRockBtn");
const pPaperBtn = document.querySelector("#pPaperBtn");
const pScissorBtn = document.querySelector("#pScissorBtn");

// match history
const results = document.querySelector("#results");

//history container 
let historyContainer = []

//counting all history in match history
let countHistory = 0;

//Who win 
const whoWin = document.querySelector("#whoWin");

//reset game button
const resetGame = document.querySelector("#resetGame");

//player and ai picked
const rockPaperScissor = document.querySelector("#rockPaperScissor");
const aiPicks = document.querySelector("#aiPicks")

//ai Choices
const aiChoices = ["👊", "✋", "✌"];

const ai = () => {
  let randomChoices = Math.floor(Math.random() * aiChoices.length);
  aiPicks.innerHTML = aiChoices[randomChoices]
}

//player Choices
const playerChoices = ["👊", "✋", "✌"];

//player score
const playerScore = document.querySelector("#playerScore");
let pScores = 1;

//ai score
const aiScore = document.querySelector("#aiScore");
let aScore = 1;



//Who Win 
const Winner = () => {

  const resetBtn = document.createElement("button");
  resetBtn.innerHTML = "Reset Game";

  // Reset Button
  resetBtn.addEventListener("click", () => {

    playerScore.innerHTML = ""
    aiScore.innerHTML = ""
    results.innerHTML = ""
    whoWin.innerHTML = ""
    aiPicks.innerHTML = ""
    rockPaperScissor.innerHTML = ""


    historyContainer = []

    pScores = 1;
    aScore = 1;
    countHistory = 0
  
    pRockBtn.removeAttribute("disabled");
    pPaperBtn.removeAttribute("disabled");
    pScissorBtn.removeAttribute("disabled");

    resetGame.removeChild(resetGame.firstElementChild)
  })

  if(countHistory == 10 && pScores > aScore) {
    
    pRockBtn.setAttribute("disabled", "");
    pPaperBtn.setAttribute("disabled", "");
    pScissorBtn.setAttribute("disabled", "");

    resetGame.appendChild(resetBtn)
    whoWin.innerHTML = "Player Win"

  } else if (countHistory == 10 && aScore > pScores) {

    pRockBtn.setAttribute("disabled", "");
    pPaperBtn.setAttribute("disabled", "");
    pScissorBtn.setAttribute("disabled", "");
 
    whoWin.innerHTML = "A.I Win"
    resetGame.appendChild(resetBtn)

  } else if (countHistory == 10 && aScore == pScores) {
    pRockBtn.setAttribute("disabled", "");
    pPaperBtn.setAttribute("disabled", "");
    pScissorBtn.setAttribute("disabled", "");

    whoWin.innerHTML = "Its a tie!"
    resetGame.appendChild(resetBtn)
  }

}


//Player Choices

//Rock Button
pRockBtn.addEventListener("click", () => {

  countHistory++
  Winner()
  ai()

  rockPaperScissor.innerHTML = playerChoices[0]
  
  if(aiPicks.innerHTML == playerChoices[0]) {

    historyContainer.push(`${playerChoices[0]} vs ${aiChoices[0]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[1]) {
    
    aiScore.innerHTML = aScore++

    historyContainer.push(`${playerChoices[0]} vs ${aiChoices[1]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[2]) {

    playerScore.innerHTML = pScores++

    historyContainer.push(`${playerChoices[0]} vs ${aiChoices[2]}`)
    results.innerHTML = historyContainer.join("<br>")

  }

})


//Paper Button

pPaperBtn.addEventListener("click", () => {

  countHistory++
  Winner()
  ai()

  rockPaperScissor.innerHTML = playerChoices[1]
  
  if(aiPicks.innerHTML == playerChoices[1]) {

    historyContainer.push(`${playerChoices[1]} vs ${aiChoices[1]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[2]) {
    
    aiScore.innerHTML = aScore++

    historyContainer.push(`${playerChoices[1]} vs ${aiChoices[2]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[0]) {

    playerScore.innerHTML = pScores++

    historyContainer.push(`${playerChoices[1]} vs ${aiChoices[0]}`)
    results.innerHTML = historyContainer.join("<br>")

  }

})

//Scissor button

pScissorBtn.addEventListener("click", () => {

  countHistory++
  Winner()
  ai()

  rockPaperScissor.innerHTML = playerChoices[2]
  
  if(aiPicks.innerHTML == playerChoices[2]) {

    historyContainer.push(`${playerChoices[2]} vs ${aiChoices[2]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[0]) {
    
    aiScore.innerHTML = aScore++

    historyContainer.push(`${playerChoices[2]} vs ${aiChoices[0]}`)
    results.innerHTML = historyContainer.join("<br>")

  } else if(aiPicks.innerHTML == playerChoices[1]) {

    playerScore.innerHTML = pScores++

    historyContainer.push(`${playerChoices[2]} vs ${aiChoices[1]}`)
    results.innerHTML = historyContainer.join("<br>")

  }

})






