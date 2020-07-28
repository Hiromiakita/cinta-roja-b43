class Largometraje {
    constructor(titulo, duracion, directores, tema, actores){
        this.titulo = titulo;
        this.duracion = duracion;
        this.directores = directores;
        this.tema = tema;
        this.actores = actores;
    }

    producir() {
        console.log('Este largometraje está en producción');
    }
};

module.exports = {Largometraje};