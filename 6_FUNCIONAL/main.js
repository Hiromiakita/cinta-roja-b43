

//ITERAR UN ARREGLO
//Imperativa (pasos a seguir)

// let array = [22, 15, 10, 12, 8];


// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };

//Declarativa (haz tal cosa)
//ITERAR ARREGLOS
// array.forEach(valurActualDelArreglo => console.log(valurActualDelArreglo));;

// let array2 = ['junio', 'julio', 'agosto', 'septiembre'];

// array2.forEach(mes => console.log(mes));


//CONSTRUIR UN ARREGLO BASADO EN UN ARREGLO BASE
//['22 - 0', '15 - 1, '10 -2', '12 -3', '8 - 4'];
let array = [22, 15, 10, 12, 8];

let nuevoArreglo = [];

// for(let i = 0; i < array.length; i++) {
//     let actual = array[i];
//     let elementoAInsertar = actual + ' - ' + i;
//     nuevoArreglo.push(elementoAInsertar);
// }

// console.log(nuevoArreglo);

let nuevoAray = array.map(valor =>  valor -1);
// console.log(array);
// console.log(nuevoAray);


//FILTER -> crear nuevo arreglo con una condición
let arrayNumbers = [10, 5, 41, 25, 0, 30, 50, 100, 2];

let arregloFiltrado = arrayNumbers.filter(valorActual =>  valorActual < 20);

// console.log(arrayNumbers);
// console.log(arregloFiltrado);




//1. Multiplicar x 5 cada uno de los elementos del siguiente arreglo -> [10, 4, 3, 2, 6, 8]

let arreglo1 = [10, 4, 3, 2, 6, 8];

let arreglo1modificado = arreglo1.map( value => value * 5 );

// console.log('arreglo1: ' + arreglo1);
// console.log('arreglo1modificado: ' + arreglo1modificado);

//2. Del arreglo siguiente, elegir los elementos que sean mayores que 5 -> [12, 2, 1, 5, 8]

let arreglo2 = [12, 2, 1, 5, 8];

let arreglo2filtrado = arreglo2.filter( valor => valor > 5 );

// console.log('arreglo2');
// console.log(arreglo2);
// console.log('arreglo2filtrado');
// console.log(arreglo2filtrado);

//3. Del arreglo siguiente, elegir los elementos que sean divisibles entre 2 -> [12, 2, 1, 5, 8]

let arreglo3 = [12, 2, 1, 5, 8];

let arreglo3filtrado = arreglo3.filter( value => value%2 !== 0);

// console.log('arreglo3');
// console.log(arreglo3);
// console.log('arreglo3filtrado');
// console.log(arreglo3filtrado);



//4. A partir del arreglo ['Ana', 'Diego', 'Julio'] crear el siguiente -> ['1. Ana ', '2. Diego', '3. Julio']

let nombres = ['Ana', 'Diego', 'Julio'];

let nombresConNumero = nombres.map( (valorActual, indice) => indice + 1 + '. ' + valorActual);

// console.log('nombres');
// console.log(nombres);
// console.log('nombresConNumero');
// console.log(nombresConNumero);

//A partir del arreglo filtrar sólo los que sean mayores a 18;
//[{nombre: 'Karla', edad: 20}, 
    //{nombre: 'Sonia', edad: 14}, 
    //{nombre: 'Jesús', edad: 15},
    // {nombre: 'Miguel', edad: 24},
    // {nombre: 'Luis', edad: 12}]

let info = [
    {nombre: 'Karla', edad: 20}, 
    {nombre: 'Sonia', edad: 14}, 
    {nombre: 'Jesús', edad: 15},
    {nombre: 'Miguel', edad: 24},
    {nombre: 'Luis', edad: 12}
];

let nuevaInfo = info.filter( persona => persona.edad > 18 );

// console.log(info);
// console.log(nuevaInfo);


// Filter
//     1.- A partir del siguiente arreglo de animalitos: 
    const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];
//     Genera un nuevo arreglo en el que solo se encuentren
//     los conejos del arreglo original.  

let conejos = animalitos.filter(animalito => animalito.especie === 'conejo');

// let conejos = animalitos
// .filter(animalito => animalito.especie === 'conejo')
// .map(conejo => conejo.nombre);

// console.log(conejos);


// Map
//     2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
        { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
        { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
        { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
        { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
    ];
//     Genera un nuevo arreglo que contenga los nombres de todas 
//     las mascotas.

let nombresMascotas = mascotas.map(mascota => mascota.nombre);
// let nombresMascotas = mascotas.map(mascota => mascota.nombre).filter(nombre => nombre.length <= 6);

console.log(nombresMascotas);


//REDUCE

//Sumar todos los elementos del siguiente arreglo -> [1,10, 2, 20, 3, 30]
//Multiplicar entre sí los elementos del siguiente arreglo -> [6, 5, 4]
