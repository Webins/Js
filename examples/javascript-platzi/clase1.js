/* var n = 'kleiver';
var apellido = 'marcano';


//interpolar variables
var nombreApellido = `${nombre} ${apellido.length}`;

//substring que empieze desde la letra 2 hasta la 5
var str = nombre.substr(nombre.length, -1);

console.log(nombreApellido);

var petro = Math.round(218.155 *100 * 3) /100;
var petroStr = petro.toFixed(2);
var petro = parseFloat(petroStr); */

/* var nombre = 'kleiver', edad = '21';
var nombre2 = 'jesxy', edad2 = '18';
function printAge(n, e){
    console.log(`${n} tiene ${e} años`);
};

printAge(nombre, edad);
printAge(nombre2, edad2);

 */

 
 
 /* function print(n){
     n = n.toUpperCase();
     console.log(n);
 }; */


 //Desglosando el objeto para obtener parametro deseado {}
 /* function printUpperCase({nombre}){
    nombre = nombre.toUpperCase();
    console.log(nombre);
}; */



/* function printUpperCase(persona){
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
};


function printNameAndAge(persona){
var { nombre , edad } = persona;
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años `)
}

printNameAndAge(jesxy);
printNameAndAge(kleiver); */
/*  printUpperCase(kleiver);
 printUpperCase(jesxy);
 */


 //sideeffect

/*  function birthday(persona){
     persona.edad += 1;
 }

 birthday(kleiver); */

 //Nuevo objeto

 /* function birthday(persona){
     return{
         ...persona,
         edad: persona.edad+ 1
     }
 }; */
 const MAJORITY_AGE = 18;

 var kleiver = {
    nombre: 'kleiver',
    apellido: 'Marcano',
    edad: 21
};

var jesxy ={
    nombre: 'Jesxy',
    apellido:'Soler',
    edad: 17
};

/* const validateAges= (persona)=>{ */


 /* function validateAges(persona){
    if(persona.edad < MAJORITY_AGE){
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`);
    }
    else{
        console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} años`);

    }
 }
 */
//Como es un solo parametro que retorna puedo quitar los corchetes
const majorityAge =({edad}) => edad >= MAJORITY_AGE;

const validateAges= (persona) => majorityAge(persona) ? console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} años`): 
console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`);
   

/* if(majorityAge){
        console.log(`${persona.nombre} es mayor de edad, tiene ${persona.edad} años`);
    }
    else{
        console.log(`${persona.nombre} es menor de edad, tiene ${persona.edad} años`);
    } */
 
 /* function grantAccess(persona){
     if(majorityAge(persona)){
        console.log(`Access granted, for ${persona.nombre} of ${persona.edad} years old`)
        }
        else{
            console.log(`Access denied, for ${persona.nombre} of ${persona.edad} years old`)
        }
 } */

 const PERMITIR_ACCESO = (persona) => majorityAge(persona) ? console.log(`Access granted, for ${persona.nombre} of ${persona.edad} years old`):
 console.log(`Access denied, for ${persona.nombre} of ${persona.edad} years old`)