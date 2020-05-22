var kleiver = {
    name : 'Kleiver',
    surname: 'Marcano',
    age : 21,
    weight: 70,
}


/* console.log(`Al inicio del año ${kleiver.name} pesaba ${kleiver.weight}kg`);




for(var i =1; i<=DIAS_AÑO; i++){
    let random = Math.random();

    if(random < 0.25){
        aumentarDePeso(kleiver);
    }
    else if(random < 0.5){
        bajarDePeso(kleiver);
    }
}
 */
const GRAMOS = 0.2;
const DIAS_AÑO = 365;

const aumentarDePeso = (persona) => persona.weight+= GRAMOS;
const bajarDePeso = (persona) => persona.weight-= GRAMOS;
const numMax = 5;
const numMin = 1;
const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);

const PESO_META = 3;
const META = kleiver.weight - PESO_META;
const COMER = ()=> Math.random() < 0.3;
const EJERCICIOS = ()=> Math.random() < 0.4;
var dias =0;


while(kleiver.weight > META){

    if(COMER()){
        aumentarDePeso(kleiver);
    }
    if(EJERCICIOS()){
        bajarDePeso(kleiver);    
    }
    dias+=1;
}
 
console.log(`Al final ${kleiver.name} pesa ${kleiver.weight.toFixed(0)}kg despues de ${dias} dias`);
