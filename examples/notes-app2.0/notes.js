const notes = [
{
	title: "My next trip",
	body: "I would like to go to Spain"
},{
	title: "Habbits to work on",
	body: "Exercise. Eating a bit better"
},{
	title: "Office modification",
	body: "Get a new seat"
}
];

const list = document.getElementById("list");
const form = document.getElementById("form");
const btn = document.getElementById("submit");
const searchInput = document.getElementById("search-note");
const inputTitle = document.getElementById("input-title");
const inputBody = document.getElementById("input-body");
let succes=  document.createElement("h1");

const filters = {
  searchText: ""
}

const renderNotes = (notes, filter) =>{
  const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  })
  list.innerHTML ="";
  filteredNotes.forEach((note, i) => {
    const noteElement = document.createElement("p");
    noteElement.textContent = note.title;
    list.appendChild(noteElement);
  });

}

renderNotes(notes, filters);

document.querySelectorAll(".input-note").forEach((item, i) => {
  item.addEventListener("input", (e) =>{
    succes.remove();
  })
});


searchInput.addEventListener("input", (e) =>{
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
})


//change the default behavior of a form
form.addEventListener("submit", (e) =>{
		e.preventDefault();
		let title = e.target.elements.title.value; //input title value
		let body = e.target.elements.body.value; //body value
		notes.push({
	    title: title,
	    body: body
	  })
	  e.target.elements.title.value = "";
	  e.target.elements.body.value = "";
	  succes.textContent = "The note was created";
	  form.appendChild(succes);
		renderNotes(notes, "");
});
