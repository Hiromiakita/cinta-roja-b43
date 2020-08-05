
let nuestraPromesa = new Promise( (resolve, reject) => {
    let numero = Math.floor(Math.random() * 100);
    console.log(numero);    

    //QUIERO NÚMERO DEL 30 AL 60

    if (numero < 30) {
        reject('el número es menor que 30, necesito uno del 30 al 60');
    } else if (numero <= 60 ) {
        resolve(numero);
    } else {
        reject('el número es mayor que 60, no me sirve');
    }
});

nuestraPromesa
    .then( numero => console.log(`Soy el .then. No: ${numero}`))
    .catch( razonDelError => console.warn(`Soy el .catch. Error: ${razonDelError}`));

