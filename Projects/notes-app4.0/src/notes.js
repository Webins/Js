import { uuid } from 'uuidv4'
import moment from 'moment'

let notes = []

//Read existing notes from localStorage
const loadNotes = () =>{
  const notesFromStorage = localStorage.getItem("notes");
  try {
    return notesFromStorage ? JSON.parse(notesFromStorage) : [];
  } catch (e) {
    return [];
  }
}
//expose notes from modules
const getNotes = () => notes

const createNote = () => {
  const id_note = uuid()
  const created = moment().valueOf()
  notes.push({
    id: id_note,
    title: "",
    body: "",
    createdAt: created,
    updateAt: ""
  })
  saveNotes()
 return id_note
}

notes = loadNotes()

const removeNotes = (idNote) => {
    notes.forEach((note, i) => {
      if(note.id === idNote){
      	notes.splice(i, 1)
      	saveNotes()
      } 
    })
}

const saveNotes = () => {
  localStorage.setItem("notes", JSON.stringify(notes))
}

const sortNotes = (sortBy) =>{
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


const updateNote = (id, updates) =>{
	const note = notes.find((note) => note.id === id)
	
	if(!note) return

	if(typeof updates.title === 'string'){
		note.title = updates.title
		note.updateAt = moment().valueOf()
	}

	if(typeof updates.body === 'string'){
		note.body = updates.body
		notes.updateAt = moment().valueOf()
	}

	saveNotes()
	return note
}

export {getNotes, createNote, removeNotes, sortNotes, updateNote}