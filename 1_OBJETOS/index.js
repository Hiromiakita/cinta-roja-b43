//OBJETOS LITERALES

let persona = {
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

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.apellido);
// console.log(persona.edad);
// persona.saludar();
// persona.despedir();
// persona.gritar();

let perrito = {
    //ATRIBUTOS
    color: 'gris',
    patas: 3,
    tienePelo: false,
    nombre: 'Conchita',

    //MÉTODOS
    ladrar: function () {
        console.log('GUAAAUUU!!');
    },
    
    comer: function () {
        console.log('estoy comiendo');
    }
};

console.log(perrito);

perrito.dueno = 'Hiromi';

console.log(perrito);

perrito.estarAlerta = function () {
    console.log('te estoy vigilando!!');
}

console.log(perrito);