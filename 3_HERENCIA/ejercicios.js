// ------------------------------------------------------------
// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones 
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antiguedad" que guarda un valor numerico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.
// ------------------------------------------------------------

class Maestro {
    constructor (materia, calificaciones) {
        this.materia = materia;
        this.calificaciones = calificaciones;
    };

    calucularPromedio () {
        let suma = 0;
        let promedio = 0;
        for (let i = 0; i < this.calificaciones.length; i++){
            suma += this.calificaciones[i];
        }
        promedio = suma/this.calificaciones.length;
        return console.log(promedio);
    }
}

let maestro1 = new Maestro('Matemáticas', [10, 9, 8, 5]);
// console.log(maestro1);
// maestro1.calucularPromedio();

class MaestroFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad) {
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
    saludar() {
        console.log('HOLAAA');
    }
}

let maestroFisica1 = new MaestroFisica('física', [100, 99, 90, 80, 70], 5);
// console.log(maestroFisica1);
// maestroFisica1.calucularPromedio();
// maestroFisica1.saludar();


class MaestroMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

let maestroMusica1 = new MaestroMusica('Música', [100, 100, 90], 45);
// maestroMusica1.calucularPromedio();
// ------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100
// ------------------------------------------------------------

class Electrodomestico {
    constructor(precio, color, capacidad, descuentoCompra) {
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoEnergetico = 100;
        this.descuentoCompra = descuentoCompra;
    }
};

// ------------------------------------------------------------
// 3.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// ------------------------------------------------------------

class Lavadora extends Electrodomestico {
    constructor(precio, color, capacidad, carga, descuentoCompra) {
        super(precio, color, capacidad, descuentoCompra);
        this.carga = carga;
    }

    aplicarDescuento() {
        let precioFinal = this.precio - (this.precio*(this.descuentoCompra/100));
        console.log(`El precio final es: ${precioFinal}`);
        this.precio = precioFinal;
        return precioFinal;
    }
}

// let lavadora1 = new Lavadora (10000, 'rojo', 20, 20, 20);
// console.log(lavadora1);
// lavadora1.aplicarDescuento();
// console.log(lavadora1);



// ------------------------------------------------------------
// 4.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes. 
// GET -> OBTENER O MOSTRAR EL VALOR DE UNA PROPIEDAD
// SET -> CAMBIAR O ACTUALIZAR EL DE VALOR DE UNA PROPIEDAD
// ------------------------------------------------------------

class Bebida {
    constructor(candidadMl){
        this.candidadMl = candidadMl;
    }

    getCandidadMl (){
        return console.log(this.candidadMl);
    }

    setCantidad (nuevaCantidad){
        this.candidadMl = nuevaCantidad;
    }
}

let bebida1 = new Bebida(100);
bebida1.getCandidadMl();
bebida1.setCantidad(500);
console.log(bebida1);



class Cerveza extends Bebida{
    constructor(candidadMl, porcentajeAlcohol) {
        super(candidadMl);
        this.porcentajeAlcohol = porcentajeAlcohol;
    }
    getPorcentajeAlcohol () {
            return console.log(this.porcentajeAlcohol);
    };

    setPorcentajeAlcohol(nuevoPorcentaje){
            this.porcentajeAlcohol = nuevoPorcentaje;
    }
}


class Refresco extends Bebida {
    constructor(candidadMl, azucar) {
        super(candidadMl);
        this.azucar = azucar;
    }

    getAzucar() {
        return this.azucar;
    }

    setAzucar(nvaCantidadAzucar) {
        this.azucar = nvaCantidadAzucar;
    }
}
