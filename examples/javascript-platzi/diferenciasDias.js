

function CalcularDia(fecha1, fecha2){
    const unDia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia / unDia);
}

const HOY = new Date();
const FECHA_KLEIVER = new Date(1997, 7, 4);
var resultado = CalcularDia(HOY, FECHA_KLEIVER);
const DIAS_AÑO= 365;
var final = (resultado / DIAS_AÑO).toFixed(2);


