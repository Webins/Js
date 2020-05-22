"use strict"
const last_edited = document.getElementById("last_edited");
const title_input = document.getElementById("title");
const body_input = document.getElementById("body");
const noteId = location.hash.substring(1);
let notes = getStoredNotes();



document.getElementById("removeNote").addEventListener("click", () =>{
  removeNotes(notes, noteId);
  saveNotes(notes);
  location.assign("index.html");
});

let actual_note = notes.find((note) =>{
  return note.id === noteId;
})

if(actual_note === undefined) location.assign("/index.html");

if(actual_note.updateAt === "") console.log("OK")
else generateUpdateMsg(actual_note,last_edited);

title_input.value = actual_note.title;
body_input.value = actual_note.body;


title_input.addEventListener("input", (e) => {
    const updated = moment().valueOf();
    actual_note.title = e.target.value;
    actual_note.updateAt = updated;
    generateUpdateMsg(actual_note,last_edited);
    saveNotes(notes);
});

body_input.addEventListener("input", (e) => {
    const updated = moment().valueOf();
    actual_note.body = e.target.value;
    actual_note.updateAt = updated;
    generateUpdateMsg(actual_note,last_edited);
    saveNotes(notes);
});


window.addEventListener("storage", (e) =>{
    if(e.key === "notes"){
      notes = JSON.parse(e.newValue);
      actual_note = notes.find((note) =>{
        return note.id === noteId;
      })
      if(actual_note === undefined) location.assign("./index.html");
      generateUpdateMsg(actual_note,last_edited);

      title_input.value = actual_note.title;
      body_input.value = actual_note.body;
    }

})


function generateUpdateMsg(actual_note,last_edited){
    last_edited.textContent = `Last edited: ${moment(actual_note.updateAt).fromNow()}`;

}
