var contador = 0;

const LLUEVE = () => Math.random() < 0.25;

do{
    contador++
}while(!LLUEVE()){

}
contador === 1 ? console.log(`Fui a ver si llovia unas ${contador} vez`):console.log(`Fui a ver si llovia unas ${contador} veces`);