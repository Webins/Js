function Persona(nombre, apellido, edad, altura){
    this.nombre = nombre;
    this.apellido= apellido;
    this.edad = edad;
    this.altura = altura;
}
function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

//Heredar funcion forma antigua
//se crea una nueva funcion con los siguientes param
//TODAS LAS FUNCIONES TIENEN EL ATRIBUTO PROTOTYPE
function heredaDe(prototipoHijo, prototipoPadre){
    //va a tener una funcion que no hace nada la var fn tiene una funcion anonima vacia para que pueda asignarle el valor del protoype
    var fn = function(){};
    // asignar el prototipo del prototipopadre
    fn.prototype = prototipoPadre.prototype;
     //Su prototype va a ser un nuevo objeto para que no se pise
    prototipoHijo.prototype = new fn;
    //asignar funcion constructora
    prototipoHijo.prototype.constructor = prototipoHijo;
}


heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
}
Persona.prototype.saludar= function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años de edad `);
}
Persona.prototype.alto = function() {
        this.altura >= 1.80 ? console.log(`Soy alto, mido ${this.altura}`) : console.log(`Soy Bajo, mido ${this.altura}`);
        
}

/* var kleiver = new Persona('Kleiver', 'Marcano', 21, 1.67);
var jesxy = new Persona('Jesxy', 'Soler', 18, 1.60);
var poste = new Persona('Poste', 'Alto', 10, 1.99);

kleiver.saludar();
kleiver.alto();
jesxy.saludar();
jesxy.alto();
poste.saludar();
poste.alto(); */
