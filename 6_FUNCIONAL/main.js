

//ITERAR UN ARREGLO
//Imperativa (pasos a seguir)

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// };

//Declarativa (haz tal cosa)

// array.forEach(elemento => console.log(elemento));

let array2 = ['junio', 'julio', 'agosto', 'septiembre'];

// array2.forEach(mes => console.log(mes));


//CONSTRUIR UN ARREGLO ['22 - 0', '15 - 1, '10 -2', '12 -3', '8 - 4'];
let array = [22, 15, 10, 12, 8];

let nuevoArreglo = [];

for(let i = 0; i < array.length; i++) {
    let actual = array[i];
    let elementoAInsertar = actual + ' - ' + i;
    nuevoArreglo.push(elementoAInsertar);
}

console.log(nuevoArreglo);

let nuevoAray = array.map((valor, index) =>  index);

console.log(nuevoAray);