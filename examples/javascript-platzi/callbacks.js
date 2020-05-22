const SWAPI_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const PLANET_URL = 'planets/:id';
const STARTSHIP_URL = 'starships/:id';
/* const LUKE_URL = `${SWAPI_URL}${PEOPLE_URL.replace(':id','1')}` */
const OPTIONS = { crossDomain: true };
const ON_PEOPLE_RESPONSE = function (person){
    console.log(person.name);
};

function idCharacterUrl(id, callback){
    const URL =  `${SWAPI_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(URL, OPTIONS, callback).
    fail(()=> console.log(`No se pudo obtener el personaje de id "${id}"`)
    )
}

idCharacterUrl(1,(personaje)=>{
    console.log(personaje.name);

    idCharacterUrl(2, (personaje)=>{
        console.log(personaje.name);

        idCharacterUrl(3,(personaje)=>{
            console.log(personaje.name);

            idCharacterUrl(4,(personaje)=>{
            console.log(personaje.name);
            });
        });
    });
});






//metodo normal
/* 
$.get('https://swapi.co/api/people/1/',{ crossDomain: true },
function(luke){
    console.log(luke.name);
});
 */


