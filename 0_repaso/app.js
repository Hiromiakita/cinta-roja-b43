//Enviar un mensaje a la consola
// console.log('hola');

//Variable es un espacio en la memoria donde podemos guardar información

//DECLARAR VARIABLES

//global
var numero = 10;

//local
let area = 100;

//constante NO SE ALTERA EL VALOR INICIAL
const total = 50;

//Puedo sobreescribir los valores guardados anterioremente
numero = 50;
area = 20;

//Se muestran los últimos valores asignados
console.log(numero);
// console.log(area);

//TIPOS DE DATO

//NUMBER
let edad = 15;
// console.log(edad);
// console.log(typeof edad);
let altura = 4.5;
// console.log(altura);
// console.log(typeof altura);

//STRING  Cadena de caracteres
let nombre = 'Hiromi';
// console.log(nombre);
// console.log(typeof nombre);
let direccion = 'Calle Patria 52';
// console.log(direccion);
// console.log(typeof direccion);

let telefono = '33333333333';
// console.log(telefono);
// console.log(typeof telefono);

//BOOLEAN
let esMayorDeEdad = true;
// console.log(esMayorDeEdad);
// console.log(typeof esMayorDeEdad);
let esMexicano = false;
// console.log(typeof esMexicano);
// console.log(esMexicano);

//ARREGLOS 
let edades = [12, 'hola', 35, true, 40, 12, 10];
// console.log(edades);
// console.log(edades[0]);
// console.log(edades[0], edades[1]);
// La propiedad lenght nos permite conocer el tamaño de un arreglo
// console.log(edades.lenght);

//OBJETO
let persona = {
    estadoCivil: 'soltero',
    tieneMascota: true,
    pais: 'Colombia'
}

// console.log(persona);
// console.log(persona.pais);
// console.log(persona.pais, persona.tieneMascota, persona.estadoCivil);


//CONDICIONALES

//IF
let edadMauricio = 50;

//Operadores -> true | false
if (edadMauricio >=  20 ) {
    // console.log('Mauricio tiene más de 20');
}


// == doble igual -> Compara valor de los datos
// console.log(10 == '10');

// === tripe igual -> Compara valor de los datos y tipo de dato
// console.log(10 === '10');

let edadJulio = 50;

if (edadJulio < 20) {
    // console.log('entra con boleto rojo');
} else if(edadJulio < 35) {
    // console.log('entra con boleto blanco');
} else if(edadJulio < 50) {
    // console.log('entra con boleto gris');
} else {
//    console.log('Entra con boleto general'); 
}


//CICLOS
for (let i = 0; i < 5; i++) {
    // console.log('hola', i);
}
  
let nombres = ['Ángel', 'Diana', 'Sergio', 'Héctor', 'Javier', 'Lola', 'Blanca'];
// console.log(nombres.length);

for (let i = 0; i < nombres.length; i++) {
    // console.log(nombres[i]);
}

//DECLARANDO FUNCIONES (CREANDO)
function mostrarSaludo () {
    console.log('Soy una función!');
}

function enviarAlerta() {
    alert('Esto es una alerta!!');
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(resultado);
}

function restar(num1, num2, mensaje) {
    let resultado = num1 - num2;
    console.log(resultado, mensaje);
    return resultado;
}

//Función con valores predefinidos
function crearNIP(nombre, edad, telefono1 = 11111111) {
    const pais = 'USA';
    let nip = nombre + edad + telefono + pais;
    return nip;
}

//Declarando función anónima
let resultadoMultiplicacion = function(a, b) {
    let resultado = a * b;
    alert('El resultado de multiplicarlos es' +  resultado);
    return resultado;
}


//MANDAR LLAMAR LA FUNCIÓN
// mostrarSaludo();
// enviarAlerta();
// sumar(50, 10);
// restar(20, 100, 'soy el mensaje');
// restar(80, 10, 'hola');
// crearNIP('Miguel', 12, undefined);
// crearNIP('Miguel', 12, 3333333);

// console.log(resultadoMultiplicacion(50, 20));


//usando datos obtenidos de un prompt
// let nombresUsuario = prompt('Ingresa tu nombre');
// let num3 = prompt('Ingresa el primer numero');
// let num4 = prompt('Ingresa el segundo numero');

function saludarUsuario(nombre) {
    alert('Hola, ' + nombre);
}

// saludarUsuario(nombresUsuario);
// resultadoMultiplicacion(num3, num4);