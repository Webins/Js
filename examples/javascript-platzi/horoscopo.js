var signo = prompt('¿Cuál es tu signo zodiacal?');

const signos = {
    aries: '21 marzo - 19 abril',
    tauro: '20 abril - 20 mayo',
    geminis: '21 mayo - 20 junio',
    cancer: '21 junio - 22 julio',
    leo: '23 julio - 22 agosto',
    virgo: '23 agosto - 22 septiembre',
    libra:'23 septiembre - 22 octubre',
    escorpion: '23 octubre - 21 noviembre',
    sagitario: '22 noviembre - 21 diciembre',
    capricornio: '22 diciember - 19 enero',
    acuario: '20 enero - 18 febrero',
    piscis: '19 febrero - 20 marzo'
}

switch(signo.toLowerCase()){
    case 'aries': console.log(signos.aries); break;
    case 'tauro': console.log(signos.tauro); break;
    case 'geminis': case 'géminis': console.log(signos.geminis); break;
    case 'cancer': case 'cáncer': console.log(signos.cancer); break;
    case 'leo': console.log(signos.leo); break;
    case 'virgo': console.log(signos.virgo); break;
    case 'libra': console.log(signos.libra); break;
    case 'escorpion': case 'escorpión': console.log(signos.escorpion); break;
    case 'sagitario': console.log(signos.sagitario); break;
    case 'capricornio': console.log(signos.capricornio); break;
    case 'acuario': console.log(signos.acuario); break;
    case 'piscis': console.log(signos.piscis); break;
    default: console.log('!Escoga un signo zodiacal'); break;
}
