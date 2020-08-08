import React from 'react';

const GiftCard = (props) => {

    const {imagen, titulo, website} = props;

    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={website} className="btn btn-primary">Ir a GIF</a>
            </div>
        </div>
    )
}

export default GiftCard;
