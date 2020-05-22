"use strict"

function removeWhiteSpace(array){
    return array.filter((item) => item != ' ');
}
class Hangman {
  constructor(word, attemps){
    this.word = word.toLowerCase().split("")
    this.attemps = attemps
    this.lettersGuessed=[]
    this.status="init"
    this.completeWord=[]
  }

  
  addLetter(c){
    if(this.status !== "Playing") return
    c= c.toLowerCase();
    const isUnique = !this.lettersGuessed.includes(c)
    const notExist = !removeWhiteSpace(this.word).includes(c)
    if(isUnique){
      this.lettersGuessed.push(c);
      removeWhiteSpace(this.word).forEach((w, i)=>{
        if(w === c) this.completeWord[i] = w;

      })
    }
    if(notExist)
      this.attemps--
  }
  checkStatus(){
    if(this.attemps == 0 && JSON.stringify(this.completeWord) !== JSON.stringify(removeWhiteSpace(this.word))) this.status = "Failed"
    else if(this.attemps > 0 && JSON.stringify(this.completeWord) !== JSON.stringify(removeWhiteSpace(this.word))) this.status = "Playing"
    else if(this.attemps > 0 && JSON.stringify(this.completeWord) === JSON.stringify(removeWhiteSpace(this.word))) this.status = "Finished"
    return this.status
  }
  get remaining(){
      return `Remaining guesses: ${this.attemps}`
  }
  get puzzle(){
    let result="";
    this.word.forEach((w, i) => {
      if(this.lettersGuessed.includes(w)){
        result+= w
      }else{
        result += "*"
      }
    });
    return result
  }

}
