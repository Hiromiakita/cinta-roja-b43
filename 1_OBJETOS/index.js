//OBJETOS LITERALES

let persona1 = {
    //ATRIBUTOS
    //LLAVE: VALOR,
    nombre: 'Mauricio',
    apellido: 'Ochoa',
    edad: 21,
    pais: 'Mexico',
    esMayor: true,

    //MÉTODOS
    saludar() {
        console.log('Hola!!');
    },

    //ECMA 5
    despedir() {
        console.log('Adios!!')
    },
    //ECMA 6 | Arrow
    gritar: () => {
        console.log('ESTOY GRITANDO!!!!!!')
    },

    //Vanila js
    caminar: function () {
        console.log('Estoy caminando :)')
    }

};

let persona2 = {
    nombre: 'Héctor',
    apellido: 'Lopez',
    edad: 15,
    pais: 'Argentina',
    esMayor: false,

    saludar() {
        console.log('HOLA!');
    },

    despedir() {
        console.log('ADIOS!!');
    }
}

let persona3 = {
    nombre: 'Julio',
    apellido: 'Rodriguez',
    edad: 15,
    pais: 'Argentina',
    esMayor: false,

    saludar() {
        console.log('HOLA!');
    },

    despedir() {
        console.log('ADIOS!!');
    }
}

console.log(persona1);
console.log(persona2);
console.log(persona3);

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// persona.saludar();
// persona.despedir();
// persona.gritar();

// let perrito = {
//     //ATRIBUTOS
//     color: 'gris',
//     patas: 3,
//     tienePelo: false,
//     nombre: 'Conchita',

//     //MÉTODOS
//     ladrar: function () {
//         console.log('GUAAAUUU!!');
//     },
    
//     comer: function () {
//         console.log('estoy comiendo');
//     }
// };

// console.log(perrito);

// perrito.dueno = 'Hiromi';

// console.log(perrito);

// perrito.estarAlerta = function () {
//     console.log('te estoy vigilando!!');
// }

// console.log(perrito);