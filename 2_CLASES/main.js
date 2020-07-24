//obejto literal

let autoRojo = {
    color: 'rojo',
    velocidad: 100,
    ruedas: 4,
    motor: 'V6',
    arrancar () {
        console.log('RUn ruunnn');
    },
    frena () {
        console.log('iiiiiiiii');
    },
    dobla () {
        console.log('estoy doblando');
    }
};

// console.log(autoRojo);

//CREACIÓN DE UNA CLASE (PLANTILLA)

class Coche {
    //CONSTRUCTOR ES NECESARIO
    //Nos sirve para crear o inicializas las propiedas de la clase
    constructor(color, velocidad, ruedas, motor, marca) {
        this.tipo = 'auto';
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.vendido = true;
        this.marca = marca || 'Honda';
    };

    arrancar () {
        // console.log(`El motor ${this.motor} está encendido`);
        console.log("El motor " , this.motor ,  " está encendido");

    }; 

    frena () {
        console.log('iiiiiiiii');
    }; 

    dobla () {
        console.log('estoy doblando');
    };

    pintar (color) {
        this.color = color;
    };
    
    agregarRuedas (cantidadRuedas) {

        let suma = this.ruedas += cantidadRuedas;

        if (suma > 6) {
            this.tipo = 'camioneta';
        } else {
            this.ruedas = suma;
        }
        
    }
}

//INSTANCIAR UN CLASE -> Crear un objeto con una CLASE
let coche1 = new Coche('morado', 200, 4, 'v4', 'Nissan');

// console.log(coche1);
coche1.espejos = 2;
console.log(coche1);

coche1.pintar('blanco');

console.log(coche1);

coche1.agregarRuedas(1);

console.log(coche1);



// let coche2 = new Coche('negro', 150, 4, 'v6');

// console.log(coche2);

// coche1.arrancar();
// coche2.arrancar();