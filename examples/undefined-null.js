let name;

console.log(name); //undefined

name = null;

console.log(name);


let funct = (param) => console.log(param);

funct(); // print undefined

let funct_val = funct(); // print undefined and asigned undefined to funct_val 

console.log(funct_val);

funct_val = null;

console.log(funct_val);
