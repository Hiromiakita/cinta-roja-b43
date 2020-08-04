const request = require('request');

request('https://swapi.dev/api/people/11/', (error, respuesta, body) => {
    console.log('PETICIÓN');
    // console.log(error);
    console.log(respuesta.statusCode);
    // console.log(body);
    let bodyJson = JSON.parse(body);
    // console.log(bodyJson);
    console.log(bodyJson.name);
    console.log(bodyJson.height);
});


let getPersonaje = (id) => {
    request(`https://swapi.dev/api/people/${id}/`, (error, respuesta, body) => {
    console.log('PETICIÓN');
    console.log(respuesta.statusCode);
    if (respuesta.statusCode === 200) {
        let bodyJson = JSON.parse(body);
        // console.log(bodyJson);
        console.log(bodyJson.name);
        console.log(bodyJson.height);
    } else {
        console.log('NO FUE ENCONTRADO');
    }  
});
};

getPersonaje(1);
getPersonaje(100000000000);
getPersonaje('hiromi');