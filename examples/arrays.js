/*const notes = ["note 1", "note 2", "note 3"];

notes.shift();
console.log(notes);
notes.unshift("note 1 Again");
console.log(notes);

notes.splice(1,1); 
console.log(notes);

notes.splice(1,0,"note 2 Again");
notes.forEach((item, index)=> console.log(item+"["+index+"]"));

*/


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

/*console.log(notes);*/

//to find a index on an array of objects, index of will not be enough cause it compare with 
// triple equals and will not return the index even the object has the same properties
// we use findIndex instead.

const index = notes.findIndex((item,index) => {
	return item.title === "My next trip";
});

/*console.log(index);

/*const findNote = (note, noteTitle) => {
	const result = note.findIndex((notes)=>{
		return notes.title === noteTitle;	
	});
	if(result != -1) return note[result]
	else return undefined;
}*/

/*

const findNote = (note, noteTitle) => {
	return note.find((notes)=>{
		return notes.title === noteTitle;	
	});
}



const note = findNote(notes,"My next trip");

console.log(note);
*/

const filterNotes = function(noteObj, query){
	return noteObj.filter((noteObj, query) => {
		const titleMatch = noteObj.title.toLowerCase().includes(query.toLowerCase);
		const bodyMatch = noteObj.title.toLowerCase().includes(query.toLowerCase);
		return titleMatch || bodyMatch;
	});
}




const filter_notes = filterNotes(notes, "trip");


console.log(filter_notes);


const sort_notes_by_title = (obj) => {
	obj.sort((obj1, obj2) => {
		if(obj1.title.toLowerCase < obj2.title.toLowerCase())
			return -1;
		else if(obj1.title.toLowerCase > obj2.title.toLowerCase())
			return 1;
		else 
			return 0;
	})
}

console.log("After:");
console.log(notes);
sort_notes_by_title(notes);
console.log("Before:");
console.log(notes);



