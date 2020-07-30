// 1.- Muestra un mensaje en consola mediante un callback. 
// La función de orden superior que escribas debe poder mostrar 
// el mensaje como console.warn, console.log, console.info, o cualquier 
// método para pintar en consola del objeto console.


let mostrarMensaje = (callback, nombre, feliz) => {
    let mensaje = 'soy el mensaje';
    callback(mensaje, nombre, feliz);
};

// let callback1 = (mensaje, nombre, feliz) =>  
// console.log(`log:  ${mensaje} y soy ${nombre} ${feliz}`);

// mostrarMensaje(callback1 ,'Hiromi', ':)');

// mostrarMensaje( (msj) => { console.warn(`warning: ${msj}` )});

// mostrarMensaje( (msj) => { console.info(`info:  ${msj}` )});


// 2.- Crear una función de orden superior que reciba como
//     argumento una variable de cualquier tipo y un callback. 
// La función de orden superior debe retornar como resultado, 
// mediante el callback, cual es el tipo de dato de la variable ingresada e 
// imprimir su contenido.

let funcionSuperior = (variable, callback) => {
    callback(variable);
};

// funcionSuperior(2, (variable) => console.log(typeof variable));


// 3.- Crear una función de orden superior que reciba como 
//     argumentos dos números y un callback. Según el callback
//     que se pase a la función, se devuelve la suma de los
//     dos números, la resta de los dos números o la
//     multiplicación de los dos números.

let hazCalculo = (value1, value2, callback) => callback(value1, value2);

// console.log( hazCalculo(20, 10, (value1, value2) =>  value1 + value2 ) );

// console.log( hazCalculo(100, 1, (value1, value2) => value1 - value2 ) );

// console.log( hazCalculo(5, 4, (value1, value2) => value1 * value2 ) );


// 4.- Escribe una función de orden superior que reciba una cadena de
//     caracteres y debe devolver, mediante un callback, la
//     cadena de caracteres en mayúsculas o en minúsculas.
//             ordenSuperior("PejeLagarto", minus);
//             -> pejelagarto
//             ordenSuperior("PejeLagarto", mayus);
//             -> PEJELARTO

let functionSuperior = (palabra, callback) => callback(palabra);;

let mayus = palabra => palabra.toUpperCase();
// console.log(functionSuperior('peRRito', mayus));

let minus = palabra => palabra.toLowerCase();
// console.log(functionSuperior('peRRito', minus));

// 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
//     EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
//     mayores a dos horas (hacer la comparación en horas) 
//     mediante un callback.

let array = [120, 80, 200, 100];

const compararTiempo = (arregloMinutos, callback) => {
    callback(arregloMinutos);
};

compararTiempo([120, 80, 200, 100, 300, 500, 1, 20, 121], (arregloMinutos) => {
    for(let i = 0; i < arregloMinutos.length; i++){
        if(arregloMinutos[i] >= 120){
            console.log(arregloMinutos[i])
        }
    }
    // return console.log(arregloMinutos);
})
