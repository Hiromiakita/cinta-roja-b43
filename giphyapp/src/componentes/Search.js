import React from 'react';

const Search = (props) => {

    const {getGifs} = props;

    const handlerEvent = (evento) => {
        console.log('soy el evento', evento.target.value);
        getGifs(evento.target.value);
    }

    return (
        <div className="input-group mb-3 mt-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Buscar GIF :D</span>
            </div>
            <input onChange={handlerEvent} type="text" className="form-control" placeholder="Busca un gif" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    )
}

export default Search;
