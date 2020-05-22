import moment from 'moment'
import {getFilters} from './filters'
import {sortNotes, getNotes} from './notes'
//Generete the dom structure for the notes
const generateNotesDOM = (notes) => {
  const wrapper = document.createElement("a");
  const noteElement = document.createElement("p");
  const status = document.createElement('p') 

  wrapper.href = `edit.html#${notes.id}`;
  
  if(notes.title.length > 0)
    noteElement.textContent = notes.title;
  else
  noteElement.textContent = "Unnamed Note";

  status.textContent = generateLastEdited(notes.updatedAt)
  wrapper.appendChild(noteElement);
  wrapper.appendChild(status)

  wrapper.className = "list-item"
  status.className ="list-item__subtitle"
  noteElement.className="list-item__title"
  return wrapper;
}




//Render the applications notes
const renderNotes = () =>{
  const list = document.getElementById("list")
  const filters = getFilters()
  const notes = sortNotes(filters.sortBy)
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  list.innerHTML = "";

  if(filteredNotes.length > 0){
    filteredNotes.forEach((note) => {
  	const noteElement = generateNotesDOM(note);
    list.appendChild(noteElement);
  });
  }else{
    const msg = document.createElement("p");
    msg.textContent = "No notes to show yet"
    msg.className = "empty-message"
    list.appendChild(msg);
  }

}

const initializeEditPage = (id) =>{
  const notes = getNotes()
  const note = notes.find((note) => note.id == id)
  if(!note) location.assign('./index.html')

  document.getElementById("last_edited").textContent = generateLastEdited(note.updatedAt)
  document.getElementById("title").textContent = note.title
  document.getElementById("body").textContent = note.body
}


const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`


export {generateLastEdited, generateNotesDOM, renderNotes, initializeEditPage}