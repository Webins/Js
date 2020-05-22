"use strict"


const remaining = document.getElementById("guesses")
const puzzle = document.getElementById("puzzle")
const status = document.getElementById("status")
const startButton = document.getElementById("start")
const errorDiv = document.getElementById("error")
let game  



const startGame = async () =>{
  try{  
      console.log("fetching")
  const word = await getPuzzle("2")
  game = new Hangman(word, 5)
  game.status = "init"
  startButton.textContent = "Reset"
  render()
  }catch(e){
    errorDiv.textContent= "There are problems with the network. try later.";
    status.textContent=""
    puzzle.textContent=""
    remaining.textContent=""
  }
  
}


const render = () =>{
  status.textContent = game.status
  remaining.textContent = ""
  let init = "";
  if(game.status === "init"){
    game.word.forEach((w) => {
      if(w === ' ') init+= " -  "
        else{
          init +='_'
          init +=" ";
        }
  })
    puzzle.textContent = init
  }
}


startButton.addEventListener("click", (e) =>{ 

  startGame()
})


/*getSentece("2").then((data)=>{
  console.log(data)
}).catch((err) =>{
  console.log(err)
})*/

/*
getCurrentCountry().then((country) =>{
  console.log(country)
}).catch((err) => {
  console.log(err)
})*/




/*
getLocation().then((obj) =>{
  return getCountry(obj.country)
}).then((country) => {
  console.log(country)
}).catch((err) => {
  console.log(err)
})*/


/*callback
getSentence(1, (error, setence)=> {
  if(error) console.log(`Error: ${error}`)
  else console.log(setence)
})

getCountry("US", (error, country) => {
  if(error) console.log(`Error: ${error}`)
  else console.log(country)
})
*/



/*
const sync = getWordSync()
console.log(sync)*/



window.addEventListener("keypress", (e)=>{
  game.addLetter(String.fromCharCode(e.charCode))
  if(game.checkStatus() === "Failed") {
    status.textContent= game.checkStatus()
    puzzle.textContent= "You loose"
    remaining.textContent= `The word was ${game.word.join("")}`
  }
  else if(game.checkStatus() === "Finished"){
    status.textContent= game.checkStatus()
    puzzle.textContent= "You Won"
    remaining.textContent= `The word was ${game.word.join("")}. You had ${game.attemps} left`
  }else{
    status.textContent = game.checkStatus()
    puzzle.textContent = game.puzzle
    remaining.textContent = game.remaining
  }
})



