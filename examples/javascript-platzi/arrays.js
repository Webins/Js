var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [sacha, alan, martin, dario, vicky, paula];

for(var i=0; i < personas.length; i++ ){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} Mts`);
}


const ALTOS = ({altura}) => altura > 1.80;
const BAJOS = ({altura}) => altura < 1.60;

var personasAltas = personas.filter(ALTOS);
var personasBajas = personas.filter(BAJOS);
console.log(personasAltas);
console.log(personasBajas);


//con parentesis llaves un arrowfunction retorna un objeto;

const MTS_TO_CTM = (personas) =>
 ({
    ...personas,
    altura: personas.altura*100
    })


//MAP DEVUELVE UN NUEVO ARRAY
var personasCtms = personas.map(MTS_TO_CTM);
console.log(personasCtms);