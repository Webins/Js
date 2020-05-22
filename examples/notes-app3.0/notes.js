"use strict"
//DOM ELEMENTS
const btn = document.getElementById("submit");
const createNote = document.getElementById("createNote");
const searchInput = document.getElementById("search-note");
const dropwdown = document.getElementById("filter-by");
const submitButton = document.getElementById("submit");

let notes = getStoredNotes();
const filters = {
  searchText: "",
  sortBy: ""
}

renderNotes(notes, filters);


searchInput.addEventListener("input", (e) =>{
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})

createNote.addEventListener("click", (e) =>{
  const id_note = uuidv4();
  const created = moment().valueOf();
  notes.push({
    id: id_note,
    title: "",
    body: "",
    createdAt: created,
    updateAt: ""
  });
  location.assign(`edit.html#${id_note}`);
  saveNotes(notes);
})

dropwdown.addEventListener("change", (e) => {
	if(e.target.value === "1") filters.sortBy="byAlpha";
	else if(e.target.value === "2") filters.sortBy="byCreated";
	else if(e.target.value === "3") filters.sortBy="byEdited";
  renderNotes(notes, filters);
});


window.addEventListener("storage", (e) => {
  if(e.key === "notes"){
      notes = JSON.parse(e.newValue);
      renderNotes(notes, filters);
  }
})



