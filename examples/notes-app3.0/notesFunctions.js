"use strict"
//Read existing notes from localStorage
const getStoredNotes = () =>{
  const notesFromStorage = localStorage.getItem("notes");
  try {
    return notesFromStorage ? JSON.parse(notesFromStorage) : [];
  } catch (e) {
    return [];
  }
}

const removeNotes = (notes, idNote) => {
    notes.forEach((note, i) => {
      if(note.id === idNote) notes.splice(i, 1);
    });
}

//Generete the dom structure for the notes
const createNotes = (notes, fullNotes) => {
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



const sortNotes = (notes, sortBy) =>{
  if(sortBy==="byCreated"){
      return notes.sort((a,b) =>{
        if(a.createdAt > b.createdAt)
          return -1;
        else if(a.createdAt < b.createdAt)
          return 1;
        else
          return 0;
      })
  }else if(sortBy==="byEdited"){
        return notes.sort((a,b) =>{
          if(a.updatedAt > b.updatedAt)
            return -1;
          else if(a.updatedAt < b.updatedAt)
            return 1;
          else
            return 0;
        })
  }else if(sortBy==="byAlpha"){
        return notes.sort((a,b) =>{
          if(a.title.toLowerCase() < b.title.toLowerCase())
            return -1;
          else if(a.title.toLowerCase() > b.title.toLowerCase())
            return 1;
          else
            return 0;
        })
    }else
    return notes;

}



const list = document.getElementById("list");
//Render the applications notes
const renderNotes = (notes, filters) =>{
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  list.innerHTML = "";

  if(filteredNotes.length > 0){
    filteredNotes.forEach((note) => {
  	const noteElement = createNotes(note, notes);
    list.appendChild(noteElement);
  });
  }else{
    const msg = document.createElement("p");
    msg.textContent = "No notes to show yet"
    msg.className = "empty-message"
    list.appendChild(msg);
  }

}

const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
}

const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`
