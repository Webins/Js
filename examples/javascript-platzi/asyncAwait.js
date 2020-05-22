const SWAPI_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTIONS = { crossDomain: true };




function idCharacterUrl(id){
    return new Promise((resolve, reject)=>{
        const URL =  `${SWAPI_URL}${PEOPLE_URL.replace(':id',id)}`;
        $.get(URL, OPTIONS, function(data){
            resolve(data);
        })
        .fail(() => reject(data))
    })

}

function onError(id){
    console.log(`No se pudo obtener el personaje de id "${id}"`);
}
/* 
Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. 
Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch. */


async function obtenerPersonajes() {
    
    var ids = [1,2,3,4,5,6,7,20];
    var promises = ids.map((id)=> idCharacterUrl(id));
    
    try {
        var personajes = await Promise.all(promises);
        console.log(personajes)
    } catch (id) {
        onError(id);
    }
}

obtenerPersonajes();
