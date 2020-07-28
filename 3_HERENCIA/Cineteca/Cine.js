// Crear una clase Cine que tenga 3 atributos y el método reproducir como mínimo. :)
// El método reproducir puede diferenciar entre un objeto tipo Película o un objeto tipo Documental.
// Crear una clase Largometraje (elige atributos y métodos que sean apropiados)
// Crea las subclases Pelicula y Documental que extiendan de Largometraje.
// Añade los atributos y métodos adicionales que sean necesarios.
// *Cada clase debe estar en un archivo por separado.
// *Investiga como exportar clases de un archivo para importarlas en otro y poder usarlas.
// Crea instancias de Película, Documental y Cine como mínimo.

const { onceDeSeptiembre } = require('./Documental');
const { elExtranioMundoDeJack } = require('./Pelicula')

class Cine {
    constructor(nombre, ubicacion, noSalas, noEmpleados){
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.noSalas = noSalas;
        this.noEmpleados = noEmpleados;
    };

    reproducir(largometraje) {
        if (largometraje.duracion <= 60) {
            console.log(`Se está reproduciendo el documental: ${largometraje.titulo}`);
        } else {
            console.log(`Se está reproduciendo la película: ${largometraje.titulo}`);
        }
    }
}

let cinepolisCoyoacan = new Cine('Cinépolis', 'Coyoacán', 24, 30 );

cinepolisCoyoacan.reproducir(elExtranioMundoDeJack);

cinepolisCoyoacan.reproducir(onceDeSeptiembre);

module.exports = {
    Cine
};