import React from 'react';
import './Card.css';

function Card (props) {
    console.log(props);

    // const titulo = props.titulo;
    // const descripcion = props.descripcion;

    const { titulo, descripcion, calificacion } = props;
    
    return (
        <div className="card-container">
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <p>{calificacion}</p>
        </div>
    )
}

export default Card;

