"use strict"

const Hangman = function (word, attemps){
  this.word = word.toLowerCase().split("")
  this.attemps = attemps
  this.lettersGuessed=[]
  this.status="init"
  this.completeWord=[]

}
Hangman.prototype.addLetter = function(c){
  if(this.status !== "Playing") return
  c= c.toLowerCase();
  const isUnique = !this.lettersGuessed.includes(c)
  const notExist = !this.word.includes(c)
  if(isUnique){
    this.lettersGuessed.push(c);
    this.word.forEach((w, i)=>{
      if(w === c) this.completeWord[i] = w;
    })
  }
  if(notExist)
    this.attemps--
}
Hangman.prototype.checkStatus = function(){
  if(this.attemps == 0 && JSON.stringify(this.completeWord) !== JSON.stringify(this.word)) this.status = "Failed"
  else if(this.attemps > 0 && JSON.stringify(this.completeWord) !== JSON.stringify(this.word)) this.status = "Playing"
  else if(this.attemps > 0 && JSON.stringify(this.completeWord) === JSON.stringify(this.word)) this.status = "Finished"
  return this.status
}
Hangman.prototype.remaining = function (){
  return `Remaining guesses: ${this.attemps}`
}
Hangman.prototype.getPuzzle = function(){
  let result="";
  this.word.forEach((w, i) => {
    if(this.lettersGuessed.includes(w) || w === ' ')
      result+=w
    else
      result+='_'
  });
  return result
}
