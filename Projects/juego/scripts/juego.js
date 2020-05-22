


//ELEMENTOS DEL DOM
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');


let nivel_actual = 1;


class Juego {
  constructor() {
    
    this.inicializar()
    this.generarSecuencia();
    setTimeout(this.siguienteNivel,1500)
  }


  inicializar() {
    
    this.btnEmpezarToggle();
    this.niveles = nivel_actual;
    this.colores = {
        celeste, violeta, naranja, verde
    }
    this.elegirColor = this.elegirColor.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.inicializar = this.inicializar.bind(this);
  }

  btnEmpezarToggle(){
    if(btnEmpezar.classList.contains('hide')){
      btnEmpezar.classList.remove('hide');
    }else{
      btnEmpezar.classList.add('hide');
    }
  }

  generarSecuencia(){
      this.secuencia = new Array(nivel_actual).fill(0).map(() => Math.floor(Math.random() *4));
  }


  siguienteNivel(){
      this.subnivel = 0;
      this.iluminarSecuencia();
      this.agregarEventosClick();
  }


  numerosColor(n){
    switch (n){
        case 0: return 'celeste'; case 1: return 'violeta'; case 2: return 'naranja'; case 3: return 'verde';        
    }
  }
  colorNumero(color){
    switch(color){
      case 'celeste': return 0; case 'violeta': return 1; case 'naranja': return 2; case 'verde': return 3;  
    }
  }


  iluminarColor(color){
    this.colores[color].classList.add('light');
    setTimeout(()=> this.apagarColor(color), 350);
  }

  apagarColor(color){
      this.colores[color].classList.remove('light');
  }

  iluminarSecuencia(){
      for(let i = 0; i<this.niveles; i++){
        const color = this.numerosColor(this.secuencia[i]);
        setTimeout(()=> this.iluminarColor(color), 1000 * i);
      }
  }


  agregarEventosClick(){
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor )
    this.colores.naranja.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor) 
  }
  eliminarEventosClick(){
    this.colores.celeste.removeEventListener('click', this.elegirColor)
    this.colores.violeta.removeEventListener('click', this.elegirColor )
    this.colores.naranja.removeEventListener('click', this.elegirColor)
    this.colores.verde.removeEventListener('click', this.elegirColor) 
  }

  elegirColor(event){
    const nombreColor = event.target.dataset.color;
    const numeroColor = this.colorNumero(nombreColor);

    this.iluminarColor(nombreColor);

    if(numeroColor === this.secuencia[this.subnivel]){
      this.subnivel++;

      if(this.subnivel === this.niveles){
        this.niveles++;
        this.eliminarEventosClick(); 

        if(this.niveles === (nivel_actual+1)){
          this.ganoElJuego();
        }else{
          setTimeout(this.siguienteNivel,2000);
        }
      }
    }else{
      this.perdioElJuego();
    }
  }
  ganoElJuego(){
    nivel_actual++;
    const nivel_pasado = nivel_actual-1;
    swal('Ganaste', `Nivel ${nivel_pasado}`, 'success')
    .then(this.inicializar);
  }
  perdioElJuego(){
    swal('Perdiste', 'Vuelve a intentarlo', 'error')
    .then(()=>{
      this.eliminarEventosClick();
      this.inicializar();
    })
  }
}

     function empezarJuego() {
        window.juego = new Juego()
      }

 btnEmpezar.addEventListener('click', empezarJuego)
