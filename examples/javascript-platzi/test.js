let nombre = 'Pepe'const persona = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    saludar: function () {
      console.log(`Hola, me llamo ${this.nombre}`)
    },
    decirAdios: function () {
      console.log('Chau, me voy!')
    }
  }

  const otraPersona = {
    ...persona,
    nombre: 'Eric',
    edad: 24
  }

  nombre = 'Lucas'
  otraPersona.saludar()