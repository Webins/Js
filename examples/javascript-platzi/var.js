var sacha = {
    nombre: 'sacha',
    apellido: 'lifsycz',
    edad: 28
}
const EDAD = 18;

function esMayor(persona){
    var mensaje = `${persona.nombre} es mayor de edad, tiene ${persona.edad} años`
    if(persona.edad>=EDAD){
        console.log(mensaje);
    }
    else{

    }
}