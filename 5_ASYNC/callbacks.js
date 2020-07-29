let saludo = (callback, callback2) => {
    let palabra = 'hola1';
    callback(palabra);

    let palabra2 = 'hola2';
    callback(palabra2);

    let palabra3 = 'hola3';
    callback(palabra3);

    callback2();
};

let callback = () => console.log('soy el callback');

let test = () => console.log('soy el test');

let nombreUsario = () => console.log('soy un usuario!');

let mostrarPalabra = (palabra) => console.log(`la palabra es: ${palabra}`);


function mostrarPalabra (palabra) {
    return console.log(`la palabra es: ${palabra}`)
}

//mandar llamar - ejecutar 
saludo(mostrarPalabra, nombreUsario);

