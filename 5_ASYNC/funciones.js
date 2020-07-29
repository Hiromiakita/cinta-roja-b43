//Función Vanilla
function mostrarMensaje () {
    return console.log('Soy el mensaje');
};

function soyUnaPrueba(){
    return console.log('Soy la prueba de que sí funciona todo');
}

function saludo(nombre) {
    return console.log(`Hola, ${nombre}`);
}

//llamada la función (podemos llamarlas 
// antes de crearlas de acuerdo al orden)
mostrarMensaje();
soyUnaPrueba();

let nombreUsario = 'Antonio';
saludo(nombreUsario);
saludo('Erick');

//Funciones anónimas Vanilla
let resultadoSuma = function () {
    let a = 1;
    let b = 5;
    return console.log(5+1);
}

let mensajeBienvenida = function (nombreUsuario) {
    return console.log(`Bienvenidx ${nombreUsuario}`);
}

//Llamada función anónima (forzosamente debe declararse antes)
resultadoSuma();
mensajeBienvenida('Rocío');


let number = 5;
// console.log(number);

//Arrow functions ECMA6

let test = (nombre) => {
    return console.log(`Hola, ${nombre}`);
}

() => {}

let mostrarMensajeArrow = () => {
    //CUERPO
    return console.log('Soy el mensaje');
};

let mostrarMensajeArrowPequenia = () => 'Soy el mensaje';

//ARROW CON DOS ARGUMENTOS O MÁS - forzosamente usamos paréntesis para encerrarlos

let restaArrow = (num1, num2) => {
    return num1 - num2;
}

let restaArrowPequenia = (num1, num2) => num1 - num2;

console.log(restaArrow(10, 3));
console.log(restaArrowPequenia(100, 200));

//ARROW CON UN ARGUMENTO - Puedes omitir paréntesis de argumentos

let darBienvenida = nombreUsuario => `Bienvenide a cinta roja ${nombreUsuario}`;

console.log(darBienvenida('Hiromi'));