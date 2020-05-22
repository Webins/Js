const lis = {
    nombre: 'Lissette',
    apellido: 'Garzon'
}

const anton = {
    nombre: 'Antonio',
    apellido: 'Cortes'
}

functionsaludar(saludo='Hola'){
   console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

// saludar(lis)  //esto da Hola, mi nombre es undefined

// const saludoLis = saludar.bind(lis) //no se ejecuta saludar hasta que llame a saludoLis que la referncia

const saludando = (persona,saludo) => saludar.bind(persona,saludo)

saludando(lis)()
saludando(anton, 'Hola che')()
setTimeout( ()=>saludando(anton, 'che')(),1000)

saludar.call(lis,'Hola wey') //parametros separados por coma

saludar.apply(anton, ['Hola amigo']) //parametros dentro de un arreglo separados por coma