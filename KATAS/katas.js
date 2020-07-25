// function farenheitToCelsius( gradosFarenheit) {
//     let gradosCentigrados = (gradosFarenheit -32) * (5/9);
//     console.log(gradosCentigrados);
//     return gradosCentigrados;
// }

// farenheitToCelsius(100);

// function evaluateLetter (letra) {
//     let vocales = ['a', 'e', 'i', 'o', 'u'];
//     let tipoLetra = 'Consonante'; 
//     for( let i = 0; i < vocales.length; i++ ) {
//         if (vocales[i] === letra) {
//             (console.log('Entré al primer IF'));
//             tipoLetra =  'Vocal';
//         }
//     }
//     return console.log(tipoLetra);
// }

// evaluateLetter('c');

const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'OU'];

function evaluateLetter(letra){
    let checker = vocales.includes(letra) ? 'Vocal' : 'Consonante';
    return checker;
}

console.log(evaluateLetter('b'));