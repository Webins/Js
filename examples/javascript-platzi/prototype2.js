class Persona{
    constructor(nombre, apellido, edad, altura){
        this.nombre = nombre;
        this.apellido= apellido;
        this.edad = edad;
        this.altura = altura;
    }
saludar(fn) {
   /*  var nombre = this.nombre;
    var apellido = this.apellido; */
     var {nombre, apellido, edad} = this;
    console.log(`Hola, me llamo ${nombre} ${apellido}, tengo ${edad} años de edad `);
    if(fn){
        fn(nombre, apellido, null);
    }
}
alto(){
    this.altura >= 1.80 ? console.log(`Soy alto, mido ${this.altura}`) : console.log(`Soy Bajo, mido ${this.altura}`);
}
}

class Desarrollador extends Persona{
    constructor(nombre, apellido){
        super(nombre, apellido);
    }
    saludar(fn){
        var {nombre, apellido} = this;
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador`);
        if(fn){
            fn(nombre, apellido, true);
        }
    }
}

function responderSaludo(nombre, apellido, dev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if(dev){
        console.log(`Ah, así que eres desarrollador, que bien`);
    }
}


var kleiver = new Desarrollador('Kleiver', 'Marcano', 21, 1.67);
var jesxy = new Persona('Jesxy', 'Soler', 18, 1.60);
var poste = new Persona('Poste', 'Alto', 10, 1.99);

kleiver.saludar(responderSaludo);
jesxy.saludar(responderSaludo);
jesxy.alto();
poste.saludar(responderSaludo);
poste.alto();
