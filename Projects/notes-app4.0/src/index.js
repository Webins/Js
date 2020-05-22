import {createNote} from './notes'
import {setFilters} from './filters'
import {renderNotes} from './views'

renderNotes();


document.getElementById("search-note").addEventListener("input", (e) =>{
  setFilters({
    searchText: e.target.value
  })
  renderNotes();
})

document.getElementById("createNote").addEventListener("click", () => {
  location.assign(`edit.html#${createNote()}`)
})

document.getElementById("filter-by").addEventListener("change", (e) => {
  if(e.target.value === "1") setFilters({
    sortyBy: "byAlpha"
  })
  else if(e.target.value === "2") setFilters({
    sortyBy: "byCreated"
  })
  else if(e.target.value === "3") setFilters({
    sortyBy: "byEdited"
  })
  renderNotes();
});


window.addEventListener("storage", (e) => {
  if(e.key === "notes"){
      renderNotes()
  }
})

