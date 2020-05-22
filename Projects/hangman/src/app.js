import Hangman from './hangman'
import {getPuzzle, getCurrentCountry} from './requests'

//DOM ELEMENTS
const remaining = document.getElementById("guesses")
const puzzle = document.getElementById("puzzle")
const startButton = document.getElementById("start")
const error = document.getElementById("error")
const countryP = document.getElementById("country")
const guessesContainer = document.getElementById('remainingGuessesContainer')
const statusContainer = document.getElementById('statusContainer')
const puzMsg = document.getElementById('puzz')
const level = document.getElementById('levels')


let game //THE ACTUAL GAME  


const trysPerLevel = (level) =>{
  switch (level) {
    case '1': return 3; break;
    case '2': return 4; break;
    case '3': return 5; break;
    case '4': return 6; break;
    case '5': return 7; break;
    case '6': return 8; break;
    case '7': return 9; break;
    case '8': return 10; break;
    case '9': return 12; break;
    default:
      
      break;
  }
}


const startGame = async () =>{
  try{  
  error.setAttribute('hidden',true)
  const tries = trysPerLevel(level.value.toString())
  const word = await getPuzzle(level.value.toString())
  game = new Hangman(word, tries)
  game.status = "init"
  startButton.textContent = "Reset"
  initRender()
  }catch(e){
    error.removeAttribute('hidden')
    error.textContent= "There are problems with the network. try later.";
    puzzle.textContent=""
    remaining.textContent=""
  }
  
}


const initRender = () =>{
  level.setAttribute('hidden',true)
  guessesContainer.removeAttribute('hidden')
  puzMsg.removeAttribute('hidden')
  remaining.textContent = ""  
  puzzle.innerHTML= ' '
  if(game.status === "init"){
    game.word.forEach((w) => {
      const span = document.createElement('span')
      span.textContent ='*'    
      puzzle.appendChild(span)
  })
  }
}


startButton.addEventListener("click", startGame)



getCurrentCountry().then((country) =>{
  countryP.textContent = country
}).catch((err) => {
 countryP.textContent(err)
})



window.addEventListener("keypress", (e)=>{
  game.addLetter(String.fromCharCode(e.charCode))
  if(game.checkStatus() === "Failed") {
    startButton.textContent = "Start"
    level.removeAttribute('hidden')
    guessesContainer.setAttribute('hidden',true)
    puzMsg.setAttribute('hidden',true)
    puzzle.textContent= `You loose. The word was ${game.word.join("")}`
  }
  else if(game.checkStatus() === "Finished"){
    startButton.textContent = "Start"
    level.removeAttribute('hidden')
    guessesContainer.setAttribute('hidden',true)
    puzMsg.setAttribute('hidden',true)
    puzzle.textContent= `You Won.The word was ${game.word.join("")}. You had ${game.attemps} left`
  }else{
    puzzle.innerHTML = ''
    game.puzzle.split("").forEach((w) => {
      const span2 = document.createElement('span')
      span2.textContent = w;
      puzzle.appendChild(span2)
  })
    remaining.textContent = game.remaining
  }
})