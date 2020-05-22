import { updateNote, removeNotes } from './notes'
import {initializeEditPage, generateLastEdited} from './views'


const last_edited = document.getElementById("last_edited");
const noteId = location.hash.substring(1);

initializeEditPage(noteId)


document.getElementById("removeNote").addEventListener("click", () =>{
  removeNotes(noteId);
  location.assign("index.html");
})


document.getElementById("title").addEventListener("input", (e) => { 
    const note = updateNote(noteId, {title: e.target.value}) 
    last_edited.textContent = generateLastEdited(note.updateAt) 
})

document.getElementById("body").addEventListener("input", (e) => {  
    const note = updateNote(noteId, {body: e.target.value}) 
    last_edited.textContent = generateLastEdited(note.updateAt)
})


window.addEventListener("storage", (e) =>{
    if(e.key === "notes")
      initializeEditPage(noteId)
})