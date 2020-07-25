// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, género, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,género,peso y altura
//      Generar el RFC a partir de el nombre, apellido, fechaNacimiento y sexo
// RFC - > PRIMER LETRA DE TU NOMBRE + PRIMER LETRA DE TU APELLIDO + AÑO NACIMIENTO + MES + DÍA + PRIMER LETRA DE TU GÉNERO

class Persona {
    constructor(nombre, apellido, genero, peso, altura, anioN, mesN, diaN) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = this.calcularEdad();
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
        this.IMC = this.calcularIMC();
        this.anioN = anioN;
        this.mesN = mesN;
        this.diaN = diaN;
        this.rfc = this.crearRFC();
    };

    calcularIMC () {
        let IMC = (this.peso) / Math.pow((this.altura/100), 2);
        // console.log(`Tu IMC es ${IMC}`);
        return IMC;
    };

    esMayorDeEdad () {
        if (this.edad >= 18) {
            console.log('Es mayor de edad');
            return 'Es mayor de edad';
        } else {
            console.log('Es menor de edad');
            return 'Es menor de edad'
        }
    }

    crearRFC(){
        let primerLetraNombre = this.nombre[0];
        let primerLetraApellido = this.apellido[0];
        let RFC = primerLetraNombre + primerLetraApellido + this.anioN + this.mesN + this.diaN + this.genero;
        // console.log(RFC);;
        return RFC;
    }

    calcularEdad (){

    }
}

let persona1 = new Persona('Miguel', 'Gomez', 25, 'M', 60, 165, 1990, 10, 04);
// console.log(persona1);


// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.cantidad = 0;
    };

    ingresar(ingreso) {
        let cantidadActual = this.cantidad + ingreso;

        if(cantidadActual > 900) {
            console.log('No puedes tener más de $900 en tu cuenta');
        } else {
            this.cantidad = cantidadActual;
            console.log('Tu cuenta tiene ahora: $' + this.cantidad);
        }
    };

    retirar(retiro) {
        let cantidadActual = this.cantidad - retiro;

        if (cantidadActual < 10) {
            console.log('No puedes tener menos de $10 en tu cuenta');
        } else {
            this.cantidad = cantidadActual;
        }

    }
}


let cuenta1 = new Cuenta('Jaime Martinez');
console.log(cuenta1);

cuenta1.ingresar(200);

console.log(cuenta1);

cuenta1.retirar(100);

console.log(cuenta1);

let cuenta2 = new Cuenta('Claudia Perez');
console.log(cuenta2);

