class Animal {
    constructor(cantidadOjos, especie, edad) {
        this.cantidadOjos = cantidadOjos;
        this.especie = especie;
        this.edad = edad;
        this.estaVivo = true;
    };

    comunicar(){
        return console.log('Me estoy comunicando');
    };

    alimentar() {
        return console.log('Me estoy alimentando, ñam, ñam');
    };
};

let animalBasico1 = new Animal(2, 'ave', 2);

// animalBasico1.comunicar();

class Mascota extends Animal {
    constructor(cantidadOjos, especie, edad, duenio, direccion, estaVacunado) {
        super(cantidadOjos, especie, edad);
        this.duenio = duenio;
        this.direccion = direccion;
        this.estaVacunado = estaVacunado;
    };
    comunicar() {
        return console.log('Miauuuu!!');
    }
    ronronear(){
        return console.log('rrrrrrrrrrrrr');
    }
}

let gatito = new Mascota(2, 'gatito', 4, 'Jaime', 'Calle x 22', false);
gatito.ronronear();

console.log(gatito.estaVivo);
gatito.estaVivo = false;

// class Mascota {
//     constructor(cantidadOjos, especie, edad, duenio, direccion, estaVacunado) {
//         this.cantidadOjos = cantidadOjos;
//         this.especie = especie;
//         this.edad = edad;
//         this.duenio = duenio;
//         this.direccion = direccion;
//         this.estaVacunado = estaVacunado;
//     };

//     comunicar() {
//         return console.log('Me estoy comunicando');
//     };

//     alimentar() {
//         return console.log('Me estoy alimentando, ñam, ñam');

//     };

//     darCarinio (){
//         return console.log('Holi, te estoy dando cariñito <3');
//     }
// }

let perrito = new Mascota(1, 'perro', 2, 'Pedro', 'Calle de la soldad 28', true);
// perrito.darCarinio();