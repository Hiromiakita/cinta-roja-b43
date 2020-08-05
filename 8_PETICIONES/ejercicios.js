const request = require('request');
const { Libro } = require('./Libro');

// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/


let getPokemon = (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    request(URL, (err, res, body) => {
        if (res.statusCode === 200) {
            let bodyJson = JSON.parse(body);
            console.log(bodyJson.name);
        } else {
            console.log('ERROR');
        }
    });
};

// getPokemon(1);
// getPokemon(2);
// getPokemon(2098976567);

// 2.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro("i robot");
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

let libros = [];

let getAutores = (busqueda) => {

    const URL = `http://openlibrary.org/search.json?q=${busqueda}`;

    request(URL, (err, res, body) => {

        let bodyJson = JSON.parse(body);
        let autores = bodyJson.docs[0].author_name;
        let titulo = bodyJson.docs[0].title;

        let libro = new Libro(titulo, autores);

        console.log(libro);

        autores.forEach( (value, index) => {
            console.log(`Libro: ${titulo}: Autor ${index + 1}: ${value}`);
        });

        //Autor 1: jfjkhgdg
        //Autor 2: fjhjgjdhg
        //Autor 3: fhgjh

        return libro;
    });
}

// getAutores("el principito");
// getAutores("i robot");
// getAutores("harry potter");
// getAutores("la biblia");
// getAutores("el quijote");
// getAutores("el capital");



// 3.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//         http://openlibrary.org/search.json?author=asimov



let getLibros = (autor) => {

    const URL = `http://openlibrary.org/search.json?author=${autor}`;

    request(URL, (error, respuesta, body) => {

        let bodyJson = JSON.parse(body);

        if ( bodyJson.docs.length > 0 ) {
            let libros = bodyJson.docs.map(infoLibro => infoLibro.title);
            console.log(libros);
        } else {
            console.log('NO SE ENCONTRARON RESULTADOS');
        }

    })
}

// getLibros('asimov');
getLibros('gabriel garcia marquez');


// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse


// 5.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//                     https://swapi.co/

// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/

// 7.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//                       https://pokeapi.co/