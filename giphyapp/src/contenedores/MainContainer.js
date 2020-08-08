import React, { useState, useEffect } from 'react';
import Navbar from '../componentes/Navbar';
import Search from '../componentes/Search';
import GiftCard from '../componentes/GiftCard';
import axios from 'axios';

const MainContainer = () => {

    const [gifs, setGifs] = useState([]);
    const [cargando, setCargando] = useState(false);

    const getGifs = (busqueda) => {
        
        if(!busqueda){
            busqueda = 'demo';
        }
        console.log(busqueda);
        const URL = `https://api.giphy.com/v1/gifs/search?api_key=2130qY3e28Pv6198mN4w3EZAwBc653hU&q=${busqueda}&limit=5`;

        axios.get(URL)
            .then( respuesta => setGifs(respuesta.data.data))
            .catch( error => console.log(error) );

    }

    useEffect( () => {
        getGifs();
    }, []);


    return (
        <div>
            <Navbar />

            <div className="container">
                
                <Search getGifs={(getGifs)}/>

                { gifs.map(gif => {
                            return ( <GiftCard 
                                key={gif.id}
                                imagen={gif.images.downsized_medium.url}
                                titulo={gif.title}
                                website={gif.url}
                            />)
                })}
            </div>
            
        </div>
    )
}

export default MainContainer;
