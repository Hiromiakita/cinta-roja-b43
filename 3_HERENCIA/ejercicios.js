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

    calucularPromedio (){
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
maestro1.calucularPromedio();

// ------------------------------------------------------------
// 2.- Crea una superclase llamada Electrodoméstico con las 
//     siguientes características:
//     a. Sus atributos son precio, color, consumoEnergetico
//        y capacidad (peso máximo)
//     b. El constructor solo debe pedir precio, color 
//        y capacidad. 
//     c. consumoEnergetico debe iniciar con valor de 100
// ------------------------------------------------------------

// ------------------------------------------------------------
// 3.- Crea una subclase de Electrodomestico llamada Lavadora 
//     con las siguientes características:
//     a. Su atributo es carga(kg de ropa), además de los 
//        atributos heredados.
//     b. Crea el método precioFinal(). Este se calcula
//        multiplicando el consumoEnergetico por la carga.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4.- Crear una clase Bebida que herede a dos clases Cerveza 
//     y Refresco. Ambas clases deben tener la propiedad 
//     cantidad (ml). La clase Refresco debe tener el atributo
//     azucar(g) y la clase Cerveza debe el atributo 
//     porcentajeAlcohol. Crear los getters y setters
//     correspondientes.
// ------------------------------------------------------------

