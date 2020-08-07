import React, {useState} from 'react';

const PerfilUsuario = (props) => {
    const [contador, setContador] = useState(0);
    const [anio, setAnio] = useState(2000);

    console.log(props)

    const estilosUsuario = {
        backgroundColor: 'gray',
        color: 'white',
        padding: 1 + 'rem',
        margin: 2 + 'rem',
        border: '1px solid purple' 
    }

    const {nombre, edad, ciudad} = props;

    return (
        <div style={estilosUsuario}>
            <p>{nombre}</p>
            <p>{edad}</p>
            <p>{ciudad}</p>
            <p>{contador}</p>
            <button onClick={ () => {setContador(contador + 1)}}>AUMENTA 1</button>
        </div>
    )
}

export default PerfilUsuario;
