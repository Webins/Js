//query and remove
/*document.querySelector("h1").remove();*/

//query all and remove
/*document.querySelectorAll("h1").forEach((item) => {
  item.remove();
});*/

//query and read/edit the content
/*
document.querySelectorAll("h1").forEach((item, i) => {
  console.log(item.textContent);
  item.textContent="****nothing****";
});*/
function display(list, notes){
  let h2_title;
  let h2_body;
  list.appendChild(document.createElement("hr"));
  notes.forEach((item, i) => {
      h2_title = document.createElement("h2");
      h2_body = document.createElement("h2");
      h2_title.textContent= `Title: ${item.title}`;
      h2_body.textContent= `Body: ${item.body}`;
      list.appendChild(h2_title);
      list.appendChild(h2_body);
      list.appendChild(document.createElement("hr"));
  });
      centerTag.appendChild(list);
}
//Add a new element
const newH1=document.createElement("h1");
const centerTag = document.createElement("center");

//change atributtes
newH1.textContent="Notes";
centerTag.id="center-tag";

//concat to DOM
document.querySelector("body").appendChild(centerTag);
document.getElementById("center-tag").appendChild(newH1);


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

let list = document.createElement("li");
list.id="list";
document.querySelector("body").appendChild(list);

display(list, notes);


const centerInputs = document.createElement("center");

centerInputs.id = "center";
const inputTitle = document.createElement("input");
const inputBody = document.createElement("input");
const button = document.createElement("button");
let span1 = document.createElement("span");
let span2 = document.createElement("span");
button.type="submit";
button.textContent = "Create new note";

document.querySelector("body").appendChild(centerInputs);


span1.textContent="Title: ";
centerInputs.appendChild(span1);
centerInputs.appendChild(inputTitle);
span2.textContent="  Body: ";
centerInputs.appendChild(span2);
centerInputs.appendChild(inputBody);
centerInputs.appendChild(document.createElement("br"));
centerInputs.appendChild(document.createElement("br"));
centerInputs.appendChild(button);


inputTitle.addEventListener("input", (e) =>{
console.log(e.target.value);
})

button.addEventListener("click",(e) =>{
  notes.push({
    title: inputTitle.value,
    body: inputBody.value
  })
  list.remove();
  list = document.createElement("li");
  list.id="list";
  document.querySelector("body").appendChild(list);
  display(list,notes);
})
