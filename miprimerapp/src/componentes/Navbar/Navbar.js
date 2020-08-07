import React from 'react';

const Navbar = () => {

    const estilosNavbar = {
        backgroundColor: "black",
        color: 'white', 
        height: 4 + 'rem',
        display: 'flex'
    };

    return (
        <div style={ estilosNavbar }>
            <p>Inicio</p>
        </div>
    )
};

export default Navbar;
