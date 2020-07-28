const { Largometraje } = require('./Largometraje');

class Pelicula extends Largometraje {
    constructor(duracion, directores, tema, actores, genero) {
        super(duracion, directores, tema, actores); 
        this.genero = genero;
    }
}

let elExtranioMundoDeJack = new Pelicula('El Extraño Mundo De Jack', 120, 'Tim Burton', 'hallowen', ['Jack', 'Sally', 'Santa', 'perro'], 'Animación')

module.exports = {
    Pelicula,
    elExtranioMundoDeJack
}