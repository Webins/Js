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


var ids = [1,2,3,4,5,6,7,20];
var promises = ids.map((id)=> idCharacterUrl(id));
Promise.all(promises)
.then(personajes => console.log(personajes))
.catch(onError);

//Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, 
//que pasaremos como parámetro a Promise.all( arregloDePromesas ), 
//con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.
/* 
    idCharacterUrl(1)
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(2) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(3) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(4) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(5) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(6) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(7) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(8) } )
    .then(personaje =>{ console.log(personaje.name); return idCharacterUrl(9) } )
    .catch(onError); */
    
    
    //          Ó 
/*     .catch(function(id){
        onError(id);
    }); */