const { Largometraje } = require('./Largometraje');


class Documental extends Largometraje {
    constructor(titulo, duracion, directores, tema, actores, bibliografia) {
        super(titulo, duracion, directores, tema, actores);
        this.bibliografia = bibliografia;
    }
}

let onceDeSeptiembre = new Documental('11 de Septiembre', 60, 'Jesus Cosmo', 'Informativo', [], ['www.google.com', 'archivos del pentagono'])

module.exports = {
    Documental,
    onceDeSeptiembre
}